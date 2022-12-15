import Vue from "vue";
import Vuex from "vuex";
import { getModule } from "vuex-module-decorators";
import general from "./general";

Vue.use(Vuex);

const store = new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {
    general
  }
});

export default store;

export const generalStore = getModule(general, store);
