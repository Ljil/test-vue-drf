import Vue from "vue";
import VueRouter from "vue-router";
import LoginForm from "../views/LoginForm.vue";
import Main from "@/views/Main";
import PostCreate from "@/views/PostCreate";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main
    },
    {
        path: "/login",
        name: "LoginForm",
        component: LoginForm
    },
    {
        path: "/create",
        name: "CreatePost",
        component: PostCreate
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
