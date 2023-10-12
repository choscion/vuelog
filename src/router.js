import { createWebHistory, createRouter } from "vue-router";
import List from './components/ListWrap.vue';
import Home from './components/HomeWrap.vue';
import Detail from './components/DetailWrap.vue';
import Author from './components/AuthorWrap.vue';
import Comment from './components/CommentWrap.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 