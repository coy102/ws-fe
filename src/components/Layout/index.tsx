import { NavLink, Outlet } from 'react-router-dom'
import { MobileContainer } from './style'

const Layout = () => {
  return (
    <>
      <MobileContainer>
        <div>
          <NavLink to='/memoization'>Memoization</NavLink> |{' '}
          <NavLink to='/memoization-with-zustand'>With Zustand | </NavLink>
          <NavLink to='/products'>Products</NavLink>
        </div>

        <hr />

        <Outlet />
      </MobileContainer>
    </>
  )
}

export default Layout
