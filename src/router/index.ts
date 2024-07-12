import { createRouter, createWebHistory } from 'vue-router'
//import Test from '@/Components/Test.vue'
import Search from '../Components/Search.vue'
import PlayerList from '../Components/PlayerList.vue';

const routes = [
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/discover',
    redirect: '/search' // Omdiriger fra /home til /search
  },
  {
    path: '/player/:searchText',
    name: 'PlayerList',
    component: PlayerList,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
