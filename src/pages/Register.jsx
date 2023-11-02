import { Link } from "react-router-dom"
function Register() {
  return (
    <div>
      Register
      <p>
        <Link to="/Login">Já tem conta</Link>
      </p>
    </div>
  )
}

export default Register