import Vue from "vue";
import VueRouter from "vue-router";
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'
import EventCreate from '../views/EventCreate.vue'
import User from '../views/EventList.vue'
import EventCard from '../components/EventCard.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
  },
  {
    path: "/event-create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/user/:username",
    name: "user",
    component: User
  },
  {
    path: "/card",
    name: "card",
    component: EventCard
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
