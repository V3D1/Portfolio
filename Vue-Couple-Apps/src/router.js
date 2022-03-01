import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import DcHeroes from "./views/DcHeroes.vue";
import Calendar from "./views/Calendar.vue";
import Markdown from "./views/Markdown.vue";
import Calculator from "./views/Calculator.vue";
import ReusableModal from "./views/ReusableModal.vue";
import UserCrud from "./views/UserCrud.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/dcHeroes", name: "DcHeroes", component: DcHeroes },
  { path: "/calendar", name: "Calendar", component: Calendar },
  { path: "/markdown", name: "Markdown", component: Markdown },
  { path: "/calculator", name: "Calculator", component: Calculator },
  { path: "/reusableModal", name: "ReusableModal", component: ReusableModal },
  { path: "/usercrud", name: "Usercrud", component: UserCrud },
  { path: "/:error(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
