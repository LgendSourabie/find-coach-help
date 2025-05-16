export const requestsGetters = {
  requests(state, _getters, _rootState, rootGetters) {
    const coachId = rootGetters.coachId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(_state, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
