import { lazy } from 'react'

const Memoization = lazy(() => import(/* webpackChunkName: "memo-page" */ '../pages/memoization'))
const WithZustand = lazy(
  () => import(/* webpackChunkName: "zustand-page" */ '../pages/with-zustand'),
)
const Products = lazy(() => import(/* webpackChunkName: "react-page" */ '../pages/products'))

export default [
  {
    id: 1,
    path: '/memoization',
    name: 'Memoization',
    element: <Memoization />,
  },
  {
    id: 1,
    path: '/memoization-with-zustand',
    name: 'with zustand',
    element: <WithZustand />,
  },
  {
    id: 1,
    path: '/products',
    name: 'Products',
    element: <Products />,
  },
]
