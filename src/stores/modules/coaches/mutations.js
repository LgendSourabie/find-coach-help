export const coachesMutations = {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
};
