import { Outlet,Link } from "react-router-dom"

function OutsideLayout() {
  return (
    <div>
      <Link to="/">Voltar</Link>
      <div><Outlet/></div>
    </div>
  )
}

export default OutsideLayout