import { Link } from "react-router-dom"
import Button from "../Components/Button"

function Login() {
  return (
    <div>
      <form>
        <Button bgColor="bg-slate-800" hoverColor="bg-red-400">
          <p>Domilson</p>
        </Button>
      </form>
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