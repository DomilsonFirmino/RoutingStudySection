import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function RootLayout() {
  return (
    <div>
       <Navbar/>
       <main>
         <Outlet/>
       </main>
       <Footer/>
    </div>
  )
}

export default RootLayout