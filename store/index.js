import Veux from 'vuex';
import { v4 as uuid } from 'uuid';

function createCombatant(payload) {
  return {
    id: uuid(),
    name: payload.name || 'Combatant',
    health: payload.health || 1,
    maxHealth: payload.maxHealth || payload.health || 1,
    initiative: payload.initiative || 1,
    statuses: [],
  };
}

function createStatus(name, type, remaining) {
  return {
    name,
    type,
    remaining,
  };
}

function tickStatus(status, secondsPerTurn) {
  if (status.type === 'time') {
    status.remaining -= secondsPerTurn;
  } else {
    status.remaining -= 1;
  }

  return status;
}

function tickStatuses(combatant, secondsPerTurn) {
  combatant.statuses = combatant.statuses.map(status => tickStatus(status, secondsPerTurn));
  combatant.statuses = combatant.statuses.filter(status => status.remaining > 0);
  return combatant;
}

const felicity = createCombatant({
  name: 'Felicity',
});
felicity.statuses.push(createStatus('dying?', 'time', 10));

const createStore = () => {
  return new Veux.Store({
    state: () => ({
      turn: 0,
      turnTime: 6,
      combatants: [
        createCombatant({
          name: 'Igor',
          health: 10,
          maxHealth: 10,
          initiative: 5,
          id: uuid(),
        }),
        felicity,
      ],
    }),
    mutations: {
      removeCombatant(state, idx) {
          state.combatants.splice(idx, 1);
      },
      removeAllCombatants(state) {
        state.combatants = [];
      },
      addStatus(state, {idx, status}) {
        state.combatants[idx].statuses.push(createStatus(status.name, status.type, status.remaining));
      },
      nextTurn(state) {
        state.turn++;
        if (state.turn >= state.combatants.length) {
          state.turn = 0;
        }
        state.combatants[state.turn] = tickStatuses(state.combatants[state.turn], state.turnTime);
      },
      addCombatant(state, payload) {
        state.combatants = state.combatants.concat(createCombatant(payload));
      },
      setHealth(state, {idx, value}) {
        state.combatants[idx].health = value;
      },
      setMaxHealth(state, {idx, value}) {
        state.combatants[idx].maxHealth = value;
      },
    }
  });
};

export default createStore;
