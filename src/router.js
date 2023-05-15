import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from '@/pages/MainPage';
import PhotosPage from '@/pages/PhotosPage';
import KinsmansPage from "./pages/KinsmansPage";
import Palette from "./components/Palette";
import Poker from "./components/Poker";
// import { UserRoles } from "@/types/Auth";
Vue.use(VueRouter);

// eslint-disable-next-line no-prototype-builtins
const isAuthorized = localStorage.hasOwnProperty('token');

const authGuard = function (to, from, next) {
    if (!isAuthorized) {
        next({name: 'Login'});
    } else {
        next();
    }
}

// const managerAuthGuard = function (to, from, next) {
//     if (!isAuthorized) {
//         next({name: 'Login'});
//     } else if (localStorage.getItem('userRole') !== UserRoles.Moderator) {
//         next({name: 'Home'});
//     } else {
//         next();
//     }
// }

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {layout: 'main'},
        component: MainPage,
        beforeEnter: authGuard,
    },
    {
        path: '/photo',
        name: 'Photo',
        meta: {layout: 'main'},
        component: PhotosPage,
        beforeEnter: authGuard,
    },
    {
        path: '/kinsman',
        name: 'Kinsman',
        meta: {layout: 'main'},
        component: KinsmansPage,
        beforeEnter: authGuard,
    },
    {
        path: '/palette',
        name: 'Palette',
        meta: {layout: 'main'},
        component: Palette,
        beforeEnter: authGuard,
    },
    {
        path: "/poker",
        name: 'Poker',
        meta: {layout: 'main'},
        component: Poker,
        beforeEnter: authGuard,
    },
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'empty'},
        component: () => import("./components/auth/Login"),
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});