<template>
  <base-dialog :show="!!error" @close="handleError" title="An error occurred">
    {{ error }}
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Request received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests">
        <request-item
          v-for="request in receivedRequests"
          :key="request.id"
          :email="request.userMail"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>You have not received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";

export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      isLoading: true,
      error: null,
    };
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/loadRequests");
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.error = error.message || "Something went wrong";
      }
    },
    handleError() {
      this.error = null;
    },
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return !this.isLoading && this.$store.getters["requests/hasRequests"];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
