// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    players: [],
  },
  mutations: {
    SET_PLAYERS(state, players) {
      state.players = players;
    },
  },
  actions: {
    async searchPlayers({ commit }, query) {
      try {
        const response = await axios.get('/api/search', {
          params: { query }
        });
        commit('SET_PLAYERS', response.data);
      } catch (error) {
        console.error('Feil ved søk etter spillere:', error);
      }
    },
  },
  getters: {
    players: (state) => state.players,
  }
});

export default store;
