import { createApp } from "vue";
import router from "./routes/router";
import "./style.css";
import App from "./App.vue";
import { store } from "./stores";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
