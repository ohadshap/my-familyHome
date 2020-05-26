import Vue from 'vue';
import Router from 'vue-router';
import EditHome from './views/EditHome';
import MyHomes from './views/MyHomes';
import ViewHome from './views/ViewHome';
import LandingView from './views/LandingView';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/edit-home',
      name: 'edit-home',
      component: EditHome
    },
    {
      path: '/my-homes',
      name: 'my-homes',
      component: MyHomes
    },
    {
      path: '/view-home/:homeId',
      name: 'view-home',
      component: ViewHome
    },
    {
      path: '/',
      name: 'landing-view',
      component: LandingView
    }
  ]
});

export default router;
