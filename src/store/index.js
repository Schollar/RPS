import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scoreboard: {
      wins: 0,
      loss: 0,
      tie: 0,
    },
    user_selection: {},
    computer_selection: {},
    selections: {
      rock: {
        name: "Rock",
        img_src: 'http://www.clker.com/cliparts/p/G/a/s/t/g/rock-md.png'
      },
      paper: {
        name: "Paper",
        img_src: 'http://www.clker.com/cliparts/Y/t/o/V/q/F/paper-md.png'
      },
      scissors: {
        name: 'Scissors',
        img_src: 'https://png.vector.me/files/images/1/6/167278/hand_open_fingers_scissors_shape_clip_art.jpg'
      },
    }

  },

  mutations: {

    user_select(state, payload) {
      state.user_selection = state.selections[payload];
    },
    update_scoreboard_wins(state, payload) {

      state.scoreboard.wins = payload;
    },
    update_scoreboard_tie(state, payload) {
      state.scoreboard.tie = payload;
    },
    update_scoreboard_loss(state, payload) {
      state.scoreboard.loss = payload;
    },

    computer_select(state) {
      const keys = Object.keys(state.selections);
      const prop = keys[Math.floor(Math.random() * keys.length)]
      state.computer_selection = state.selections[prop];
    }
  },
  actions: {

  },
  modules: {
  }
})