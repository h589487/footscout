import { createRouter, createWebHistory } from 'vue-router'
//import Test from '@/Components/Test.vue'
import Search from '../Components/Search.vue'
import PlayerList from '../Components/PlayerList.vue';
import AboutUs from '../Components/AboutUs.vue';
import Discover from '../Components/Discover.vue';

const routes = [
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/playerList',
    redirect: '/search' // Omdiriger fra /home til /search
  },
  
  {
    path: '/aboutUs',
    name: 'AboutUs', // Omdiriger fra /home til /search
    component: AboutUs
  },
  {
    path: '/discover',
    name: 'Discover', // Omdiriger fra /home til /search
    component: Discover
  },
  {
    path: '/player/:searchText',
    name: 'PlayerList',
    component: PlayerList,
    props: route => ({ state: route.state })

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
