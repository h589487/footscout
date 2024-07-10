import { createRouter, createWebHistory } from 'vue-router'
//import Players from '@/Components/Players.vue'
//import Test from '@/Components/Test.vue'
import Test from '../Components/Test.vue';
//import Players from '../Components/Players.vue';

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
