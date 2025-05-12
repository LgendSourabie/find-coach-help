import { requestsActions } from "./actions";
import { requestsGetters } from "./getters";
import { requestsMutations } from "./mutations";

export const requestsModule = {
  namespaced: true,
  state() {},
  mutations: requestsMutations,
  getters: requestsGetters,
  actions: requestsActions,
};
