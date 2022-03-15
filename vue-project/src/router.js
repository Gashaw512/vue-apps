import {createRouter, createWebHashHistory} from "vue-router";
import Student from "./pages/Student.vue";
import Calendar from "./pages/Calendar.vue";
import Home from './pages/Home.vue'
import MarkdownVue from "./pages/Markdown.vue";
import Slider from './pages/Slider.vue'
const routes = [
  {
    path: "/student",
    component: Student,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
  {
    path:'/',
    component:Home,
  },
  {
    path:'/markdown',
    component:MarkdownVue,
  },
  {
    path:'/slider',
    component:Slider,
  },
];
const router = createRouter({
    routes,
    history:createWebHashHistory(),
});
export default router;
