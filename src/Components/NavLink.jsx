import { NavLink } from "react-router-dom"

function Navlink({link,children}) {
  return (
   <li><NavLink to={link}>{children}</NavLink></li>
  )
}

export default Navlink