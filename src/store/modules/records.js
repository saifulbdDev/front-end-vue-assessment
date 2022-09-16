/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import config from '../../../configs/config.json';
import arrayReset from '../../utils/arrayReset';

const state = {
  config,
  page_1: config?.flow?.pages[0],
  page_2: config?.flow?.pages[1],
  carousel: config?.flow?.carousel,
  launcher: config?.launcher,
  selectedPage_1: [],
  selectedPage_2: [],
  isSideBar: false,
  currentStep: 1,
};
const getters = {
  getRecords: (state) => state.records,
  getData: (state) => state.data,
  selectedPage_1: (state) => state.selectedPage_1,
  selectedPage_2: (state) => state.selectedPage_2,
};
const mutations = {
  isSideBar(state, payload) {
    state.isSideBar = payload;
  },
  next(state, payload) {
    state.currentStep = payload;
  },
  skip(state, data) {
    state.currentStep = 2;
    state.selectedPage_1 = [];
    state.page_1.cards = data;
  },
  setRecords(state, data) {
    state[data?.page].cards = data.records;
  },
  setSelected(state, data) {
    state[data.page] = data.newValue;
  },
  getData(state, data) {
    state.data = data;
  },
  setRestart(state) {
    state.page_1.cards = arrayReset(state.page_1?.cards);
    state.page_2.cards = arrayReset(state.page_2?.cards);
    state.currentStep = 1;
    state.selectedPage_1 = [];
    state.selectedPage_2 = [];
  },
};
const actions = {
  setRecords({ state, commit }, payload) {
    const { card, page } = payload;
    const cards = state?.[page]?.cards;
    const records = cards.filter((record) => {
      let item;
      if (page === 'page_2') {
        // selected single
        if (record.id === card?.id) {
          item = card;
        } else {
          item = record;
          item.selected = false;
        }
      } else {
        // selected maltiple
        item = record.id === card?.id ? card : record;
      }
      return item;
    });
    commit('setRecords', { page, records });
  },

  setSkip({ state, commit }) {
    const cards = arrayReset(state?.page_1.cards);
    commit('skip', cards);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
