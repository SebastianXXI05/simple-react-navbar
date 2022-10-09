import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {
  let activeStyle = {
    textDecoration: "underline",
    color: 'red'
  }

  return (
    <div>
      <header>
        <h2>Title</h2>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
                style={({ isActivate }) => isActivate ? activeStyle : undefined}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to='about'
                style={({ isActivate }) => isActivate ? activeStyle : undefined}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to='contact'
                style={({ isActivate }) => isActivate ? activeStyle : undefined}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
