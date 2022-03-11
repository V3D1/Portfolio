import { createStore } from "vuex";
import chuckStore from "../store/modules/chuckStore";

export default createStore({
  modules: {
    chuckStore,
  },
});
