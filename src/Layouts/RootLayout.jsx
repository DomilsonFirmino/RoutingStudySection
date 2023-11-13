import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function RootLayout() {
  return (
    <div className="grid grid-cols-[auto 1fr auto] min-h-full">
       <Navbar/>
       <main className="container">
         <Outlet/>
       </main>
       <Footer/>
    </div>
  )
}

export default RootLayout