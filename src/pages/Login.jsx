import { Link } from "react-router-dom"

function Login() {
  return (
    <div>
      Login
      <p>  
        <Link to="/EsqueceuSenha">Esqueceu a senha ?</Link>
      </p>
      <p>  
        <Link to="/Register">Não tem conta</Link>
      </p>
    </div>
  )
}

export default Login