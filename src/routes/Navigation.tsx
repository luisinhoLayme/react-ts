import {} from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../vite.svg'

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
                to="/"
              >
                Home
              </NavLink>
              <NavLink 
                className={({isActive}) => 'menu-item ' + (isActive ? 'active' : '')} 
                to="/about"
              >
                About
              </NavLink>
              <NavLink 
                className={({isActive}) => 'menu-item ' + (isActive ? 'active' : '')} 
                to="/users"
              >
                Users
              </NavLink>
            </nav>
          </aside>

          <div className="pages">
            <Routes>
              <Route path="/about" element={ <h1>About</h1> } />
              <Route path="/users" element={ <h1>Users</h1> } />
              <Route path="/" element={ <h1>Home</h1> } />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  )
}

export default Navigation
