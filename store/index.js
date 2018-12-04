import Veux from 'vuex';

const createStore = () => {
  return new Veux.Store({
    state: () => ({
      combatants: [{
        name: 'Igor',
        health: 10,
        maxHealth: 10,
        initiative: 5,
        id: '1234',
      }, {
        name: 'Felicity',
        health: 15,
        maxHealth: 20,
        initiative: 3,
        id: '2345',
      }],
    }),
  });
};

export default createStore;
