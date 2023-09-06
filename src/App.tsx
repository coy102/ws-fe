import { Suspense } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import routes from '~/routes'

function App() {
  return (
    <Suspense fallback={<span>loading....</span>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route element={<Navigate to='/memoization' />} path='/' />

          {routes.map(({ element: Element, id, path }) => (
            <Route key={id} element={Element} path={path} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
