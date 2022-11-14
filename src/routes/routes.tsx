import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element

interface Route { 
  path: string,
  component:LazyExoticComponent<JSXComponent> | JSXComponent,  //() => JSX.Element,
  name: string,
  children?: Route[]
}

// Cambiar nombre de chumk para webpack
// const LazyPage1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'))
// const LazyPage2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'))
// const LazyPage3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'))

// const LazyPage1 = lazy(() => import('../01-lazyload/pages/LazyPage1'))

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    component: lazy(() => import('../01-lazyload/layout/LazyLoyout')),
    name: 'LazyLoading Nested'
  },
  {
    path: '/no-lazy',
    component: NoLazy,
    name: 'No Lazy loading'
  }
]
