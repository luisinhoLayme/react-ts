import {} from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../vite.svg'
import {
  LazyPage3,
  LazyPage2,
  LazyPage1
} from '../01-lazyload/pages'

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <main className="container">
          <aside>
            <div className="img">
              <img src={ logo } alt="logo image" />
            </div>
            <nav className="menu">
              <NavLink 
                className={({isActive}) => 'menu-item ' + (isActive ? 'active' : '')} 
                to="/lazy1"
              >
                Lazy1
              </NavLink>
              <NavLink 
                className={({isActive}) => 'menu-item ' + (isActive ? 'active' : '')} 
                to="/lazy2"
              >
                Lazy2
              </NavLink>
              <NavLink 
                className={({isActive}) => 'menu-item ' + (isActive ? 'active' : '')} 
                to="/lazy3"
              >
                Lazy3
              </NavLink>
            </nav>
          </aside>

          <div className="pages">
            <Routes>
              <Route path="/lazy3" element={ <LazyPage3 /> } />
              <Route path="/lazy2" element={ <LazyPage2 /> } />
              <Route path="/lazy1" element={ <LazyPage1 /> } />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  )
}

export default Navigation
