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
    customStats: {},
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
  initiative: 10,
});
felicity.statuses.push(createStatus('dying?', 'time', 10));

const createStore = () => {
  return new Veux.Store({
    state: () => ({
      turn: 0,
      turnTime: 6,
      combatants: [
      ],
      customStats: [
        {
          name: "AC",
          type: Number,
          defaultValue: 10,
          slug: "ac",
        },
        {
          name: "Inspiration",
          type: Number,
          defaultValue: 0,
          slug: "inspiration",
        },
      ],
    }),

    mutations: {
      sortByInitiative(state) {
        state.combatants.sort((a, b) => b.initiative - a.initiative);
        state.turn = 0;
      },

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
        this.commit('formatCombatants');
      },

      setHealth(state, {idx, value}) {
        state.combatants[idx].health = value;
      },

      setMaxHealth(state, {idx, value}) {
        state.combatants[idx].maxHealth = value;
      },

      updateStat(state, {idx, stat, value}) {
        const statsObj = state.combatants[idx].customStats;
        state.combatants[idx].customStats = Object.assign({}, statsObj, {[stat]: value});
      },

      updateInitiative(state, {idx, initiative}) {
        state.combatants[idx].initiative = initiative;
      },

      formatCombatants(state) {
        state.combatants.forEach(combatant => {
          state.customStats.forEach(({slug, defaultValue}) => {
            combatant.customStats[slug] = combatant.customStats[slug] || defaultValue;
          });
        });
      },
    },

  });
};

export default createStore;
