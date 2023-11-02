import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <header>
      <nav>
         <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
            <li><NavLink to="/Register">Register</NavLink></li>
         </ul>
      </nav>
    </header>
  )
}

export default Navbar