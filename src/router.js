import { createWebHistory, createRouter } from "vue-router";


import testslist from './components/tests_list'
import testd from './components/testd'
const routes = [
  
  {
    path:'/branches/:branch',
    component:testslist, 
    children:[
      {
        path:':id',
        name:"info",
        component:testd,
        props:true
      }
    ],
    
   
  }
  
  ,
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;