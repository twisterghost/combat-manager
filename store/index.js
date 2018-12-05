import Veux from 'vuex';
import { v4 as uuid } from 'uuid';

function createCombatant(payload) {
  return {
    name: payload.name || 'Combatant',
    health: payload.health || 1,
    maxHealth: payload.maxHealth || payload.health || 1,
    initiative: payload.initiative || 1,
    id: uuid()
  };
}

const createStore = () => {
  return new Veux.Store({
    state: () => ({
      turn: 0,
      combatants: [{
        name: 'Igor',
        health: 10,
        maxHealth: 10,
        initiative: 5,
        id: uuid(),
      }, {
        name: 'Felicity',
        health: 15,
        maxHealth: 20,
        initiative: 3,
        id: uuid(),
      }],
    }),
    mutations: {
      nextTurn(state) {
        state.turn++;
        if (state.turn >= state.combatants.length) {
          state.turn = 0;
        }
      },
      addCombatant(state, payload) {
        state.combatants = state.combatants.concat(createCombatant(payload));
      }
    }
  });
};

export default createStore;
