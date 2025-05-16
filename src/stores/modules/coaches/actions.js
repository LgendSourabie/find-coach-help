export const coachesActions = {
  async registerCoach(context, data) {
    const userId = context.rootGetters.coachId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://vue-http-ab28d-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      { method: "PUT", body: JSON.stringify(coachData) }
    );
    const responseJSON = await response.json();
    console.log(responseJSON);

    if (!response.ok) {
      return "error";
    }
    const responseData = context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },

  async loadCoaches(context, _payload) {
    const response = await fetch(
      `https://vue-http-ab28d-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );

    const responseJSON = await response.json();

    if (!response.ok) {
      const error = new Error(responseJSON.message || "Failed to fetch!");
      throw error;
    }

    const coaches = [];

    for (const key in responseJSON) {
      const coach = {
        id: key,
        firstName: responseJSON[key].firstName,
        lastName: responseJSON[key].lastName,
        description: responseJSON[key].description,
        hourlyRate: responseJSON[key].hourlyRate,
        areas: responseJSON[key].areas,
      };

      coaches.push(coach);
    }

    context.commit("setCoaches", coaches);
  },
};
