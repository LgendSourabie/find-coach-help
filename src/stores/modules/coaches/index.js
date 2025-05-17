import { coachesActions } from "./actions";
import { coachesGetters } from "./getters";
import { coachesMutations } from "./mutations";

export const coachesModule = {
  namespaced: true,
  state() {
    return {
      lastFetched: null,
      coaches: [
        {
          id: "c1",
          firstName: "Cech",
          lastName: "Schwarz",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Cech and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations: coachesMutations,
  getters: coachesGetters,
  actions: coachesActions,
};
