import Index from '../views/Index.vue';
import Catalog from '../views/Catalog.vue';
import CatalogItem from '../views/CatalogItem.vue';
import Help from '../views/Help.vue';
import ErrorPage from '../views/ErrorPage.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: 'Punk Beer',
    },
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
    meta: {
      title: 'punk catalog',
    },
  },
  {
    path: '/catalog/:id',
    name: 'CatalogItem',
    component: CatalogItem,
    meta: {
      title: 'punk beer',
    },
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      title: 'punk help',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: ErrorPage,
    meta: {
      title: 'Punk Error',
    },
  },

];

export default routes;
