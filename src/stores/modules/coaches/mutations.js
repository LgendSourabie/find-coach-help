export const coachesMutations = {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },

  setCoaches(state, payload) {
    state.coaches = payload;
  },

  setFetchedTimestamp(state) {
    state.lastFetched = new Date().getTime();
  },
};
