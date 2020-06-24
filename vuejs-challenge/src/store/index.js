import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    options: [
      {
        overview: {
        totalSignUps: 648,
        lastWeek: 12,
        totalInvestment: 102,
        averageInvestment: "Nok345,565",
        totalExits: 23,
      }
    }
    ]
  },
  getters:{
   allOPtions : (state) => state.options
  },
  mutations: {},
  actions: {},
  modules: {}
});
