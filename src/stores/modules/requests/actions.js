import { nanoid } from "nanoid";

export const requestsActions = {
  async contactCoach(_context, payload) {
    const requestId = nanoid();
    const newRequest = {
      id: requestId,
      coachId: payload.coachId,
      userMail: payload.email,
      message: payload.message,
    };

    const resp = await fetch(
      `https://vue-http-ab28d-default-rtdb.europe-west1.firebasedatabase.app/requests.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    if (!resp.ok) {
      const error = new Error(resp.message || "An error occurred.");
      throw error;
    }

    // context.commit("addRequest", newRequest);
  },

  async loadRequests(context, _payload) {
    const resp = await fetch(
      `https://vue-http-ab28d-default-rtdb.europe-west1.firebasedatabase.app/requests.json`
    );

    if (!resp.ok) {
      const error = new Error(resp.message || "An error occurred.");
      throw error;
    }

    const responseData = await resp.json();
    let responseDataArray = [];
    for (const key in responseData) {
      const respData = {
        id: responseData[key].id,
        coachId: responseData[key].coachId,
        userMail: responseData[key].userMail,
        message: responseData[key].message,
      };
      responseDataArray.push(respData);
    }

    context.commit("setRequests", responseDataArray);
  },
};
