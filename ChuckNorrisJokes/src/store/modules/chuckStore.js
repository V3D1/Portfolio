const state = {
  chuckCategories: [],
  chuckJoke: null,
};

const getters = {
  getChuckCategories(state) {
    return state.chuckCategories;
  },
  getChuckJoke(state) {
    return state.chuckJoke;
  },
};

const actions = {
  fetchChuckCategories: async (context, payload) => {
    try {
      const categories = await payload.chuckService.chuckCategories();
      context.commit("GET_CHUCK_CATEGORIES", categories.data);
    } catch (error) {
      console.log(error);
    }
  },
  fetchChuckJoke: async (context, payload) => {
    const jokeCategory = payload.jokeCategory;
    try {
      const joke = await payload.chuckService.chuckJoke(jokeCategory);
      context.commit("GET_CHUCK_JOKE", joke.data);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  GET_CHUCK_CATEGORIES: (state, categories) => {
    state.chuckCategories = categories;
  },
  GET_CHUCK_JOKE: (state, joke) => {
    state.chuckJoke = joke;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
