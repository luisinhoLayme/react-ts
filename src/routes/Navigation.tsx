import { Suspense } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../vite.svg'
import { routes } from './routes'

const Navigation = () => {

  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <BrowserRouter>
        <main className="container">
          <aside>
            <div className="img">
              <img src={ logo } alt="logo image" />
            </div>
            <nav className="menu">
              {routes.map(({ path, name }) => (
                <NavLink 
                  key={ path }
                  className={({isActive}) => 'menu-item ' + (isActive ? 'active' : '')} 
                  to={ path }
                >
                  { name }
                </NavLink>
              ))}
            </nav>
          </aside>

          <div className="pages">
            <Routes>
              {routes.map(({ component:Component, path}) => (
                <Route key={ path } path={path} element={ <Component /> } />
              ))}
              <Route path="*" element={<Navigate to={routes[0].path} />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
