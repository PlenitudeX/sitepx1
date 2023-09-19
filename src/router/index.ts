import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("../App.vue")
        },
        {
            path: "/about",
            name: "About",
            component: () => import("../views/About.vue")
        }
    ]
});

export default router;
