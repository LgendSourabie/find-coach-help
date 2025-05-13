export const requestsActions = {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toLocaleString(),
      coachId: payload.coachId,
      userMail: payload.email,
      message: payload.message,
    };
    context.commit("addRequest", newRequest);
  },
};
