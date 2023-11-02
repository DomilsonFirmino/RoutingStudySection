import { Link } from "react-router-dom"
import Button from "../Components/Button"

function Error() {
  return (
    
    <div className='mx-8 grid place-items-center h-full'>
            
      <div className='text-center space-y-12'>
        <div className='space-y-4'>
            <h1>OPS!</h1>
            <p>Não conseguimos encontrar esta página</p>
            <p className="text-9xl font-bold">
              404
            </p>
        </div> 
        <Button type={"primary"}>
          <p>
            <Link to="/">Voltar para Home</Link>
          </p>  
        </Button>  
      </div>

    </div>
  )
}

export default Error
