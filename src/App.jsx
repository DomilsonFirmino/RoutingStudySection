import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from "react-router-dom"

//Pages
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import About from "./pages/About"
import Error from "./pages/Error"

//Layout
import RootLayout from "./Layouts/RootLayout"
import OutsideLayout from "./Layouts/OutsideLayout"
import EsqueceuSenha from "./pages/EsqueceuSenha"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Route>

      <Route path="/Login" element={<OutsideLayout/>}>
        <Route index element={<Login/>}></Route>
      </Route>

      <Route path="/Register" element={<OutsideLayout/>}>
        <Route index element={<Register/>}></Route>
      </Route>

      <Route path="/EsqueceuSenha" element={<OutsideLayout/>}>
        <Route index element={<EsqueceuSenha/>}></Route>
      </Route>

      <Route path="*" element={<Error/>}/>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App