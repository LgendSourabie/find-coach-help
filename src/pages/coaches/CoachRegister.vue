<template>
  <base-card>
    <section>
      <h2>Register As a Coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </section>
  </base-card>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
export default {
  components: {
    CoachForm,
  },
  computed: {
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
  },
  methods: {
    saveData(formData) {
      this.$store.dispatch("coaches/registerCoach", formData);
      this.$router.replace("/coaches"); //or
      // this.$router.push('/coaches')
    },
  },
};
</script>
