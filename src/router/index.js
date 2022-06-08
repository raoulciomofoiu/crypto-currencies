import { createRouter, createWebHistory } from "vue-router";
import CryptoList from "../views/CryptoList.vue";
import CryptoDetails from "@/views/CryptoDetails.vue";

const routes = [
  {
    path: "/",
    name: "CryptoList",
    component: CryptoList,
  },
  {
    path: "/crypto/:id",
    name: "CryptoDetails",
    props: true,
    component: CryptoDetails
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
