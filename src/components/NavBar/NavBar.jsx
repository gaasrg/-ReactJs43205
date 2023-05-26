import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}>
        <h1> Apple Connection</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to={`/categoria/2`} style={{ textDecoration: 'none', color: 'white' }}> MacBook </NavLink>
          </li>

          <li>
            <NavLink to={`/categoria/3`} style={{ textDecoration: 'none', color: 'white' }}> Iphone </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar