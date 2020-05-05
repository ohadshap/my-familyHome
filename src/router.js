import Vue from 'vue';
import Router from 'vue-router';
import EditHome from './views/EditHome';
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
