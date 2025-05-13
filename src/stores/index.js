import { createStore } from "vuex";
import { coachesModule } from "./modules/coaches";
import { requestsModule } from "./modules/requests";

export const store = createStore({
  state() {
    return {
      userId: "c3",
    };
  },
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  getters: {
    coachId(state) {
      return state.userId;
    },
  },
});
