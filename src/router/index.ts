import { createRouter, createWebHistory } from 'vue-router'
//import Test from '@/Components/Test.vue'
import Search from '../Components/Search.vue'
import PlayerList from '../Components/PlayerList.vue';
import AboutUs from '../Components/AboutUs.vue';
import Discover from '../Components/Discover.vue';
import Example from '../Components/example.vue';
import FAQ from '../Components/FAQ.vue';

//Merkelig at denne filen er på ts(typescript) 
//Gjør mulig å omdiregere til forskjellige komponenter
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
    path: '/example',
    name: 'example', // Omdiriger fra /home til /search
    component: Example
  },
  {
    path: '/FAQ',
    name: 'FAQ', // Omdiriger fra /home til /search
    component: FAQ
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
