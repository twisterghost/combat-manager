import Veux from 'vuex';

const createStore = () => {
  return new Veux.Store({
    state: () => ({
      combatants: ['hello'],
    }),
  });
};

export default createStore;
