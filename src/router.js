import Vue from 'vue';
import Router from 'vue-router';
import EditHome from './views/EditHome';
import ViewHome from './views/ViewHome';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'edit-home',
      component: EditHome
    },
    // {
    //   path: '/feed',
    //   name: 'feed',
    //   component: Feed
    // }
    {
      path: '/view-home/:homeId',
      name: 'view-home',
      component: ViewHome
    }
  ]
});

export default router;
