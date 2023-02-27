import { createRouter, createWebHistory } from "vue-router";
import { certCookies } from "@/utils/cookies";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import DetailUmkm from "../views/DetailUmkm.vue";
import AddUmkm from "../views/AddUmkm.vue";
import Berita from "../views/Berita.vue";
import DetailBerita from "../views/DetailBerita.vue";
import AddBerita from "../views/AddBerita.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/berita",
  },
  {
    path: "/berita",
    name: "Berita",
    component: Berita,
  },
  {
    path: "/add-berita",
    name: "Add Berita",
    component: AddBerita,
  },
  {
    path: "/berita/:id_berita",
    name: "Detail Berita",
    component: DetailBerita,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/umkm",
    name: "Add Umkm",
    component: AddUmkm,
  },
  {
    path: "/umkm/:id_usaha",
    name: "Detail Umkm",
    component: DetailUmkm,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "",
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const { id } = certCookies();
  if (to.matched.some(({ meta }) => meta.auth) && !id) {
    next({ name: "Signin" });
  } else if (to.matched.some(({ path }) => path.includes("auth")) && id) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
