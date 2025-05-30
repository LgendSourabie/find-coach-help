import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../pages/NotFound.vue";
import CoachesList from "../pages/coaches/CoachesList.vue";
import CoachRegister from "../pages/coaches/CoachRegister.vue";
import RequestsReceived from "../pages/requests/RequestsReceived.vue";
import ContactCoach from "../pages/requests/ContactCoach.vue";
import CoachDetail from "../pages/coaches/CoachDetail.vue";

const routers = [
  { path: "/", redirect: "/coaches" },
  { path: "/coaches", component: CoachesList },
  {
    path: "/coaches/:id",
    props: true,
    component: CoachDetail,
    children: [{ path: "contact", component: ContactCoach }],
  },
  { path: "/register", component: CoachRegister },
  { path: "/requests", component: RequestsReceived },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
