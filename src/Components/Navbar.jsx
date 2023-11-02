import { NavLink } from "react-router-dom"

import { HiSun } from "react-icons/hi";
import {HiMoon} from "react-icons/hi";
import {HiMenu} from  "react-icons/hi";
import {HiX} from "react-icons/hi";

import { useEffect, useState } from "react";

function Navbar(){
   
   const element = document.documentElement
   const [isOpen, setIsOpen] = useState(false);
   const [theme,setTheme] = useState(
    localStorage.getItem("theme")
   );

   useEffect(()=>{
      switch(theme){
         case "light":
         element.classList.remove("dark");
         localStorage.setItem('theme','light')
         break;
         case "dark":
         element.classList.add("dark");
         localStorage.setItem('theme','dark')
         break;
      }
   },[theme])

   return(
      <>
         <header className="bg-blue-500 dark:bg-blue-800 py-6 text-white sticky w-full">
            <nav className="mx-4 lg:m-auto lg:w-[min(100%,65rem)] sm:flex sm:gap-12 items-center sm:space-y-0">

               <img src="" alt="padrinho" className="flex-1"/>
               
               <div className="fixed top-2 right-2 px-4 py-2 rounded-md z-[999999] sm:hidden">
                  <button className="text-3xl text-white" onClick={()=>{setIsOpen(!isOpen)}}>
                     {isOpen ? <HiX/> : <HiMenu/>}
                  </button>
               </div>

               <div className={`space-y-4 text-center sm:flex items-center sm:space-y-0 justify-between flex-2 sm:gap-6 absolute sm:relative w-full top-[100%] left-0 bg-blue-500 dark:bg-blue-600 transform ${isOpen ? "" : "translate-x-[-100%]"} sm:translate-x-0 duration-100 ease-in-out py-4 sm:py-0`}>
                  
                 
                  <ul className="space-y-2 sm:space-y-0 sm:flex sm:gap-2 items-center text-lg sm:text-base">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="/Login">Login</NavLink></li>
                    <li><NavLink to="/Register">Register</NavLink></li>
                  </ul>

                  <div className="sm:flex gap-4 relative">
                     <input type="text" placeholder="Procurar" className="rounded-sm px-4 py-2"/>
                     <div className="notification"></div>
                     <div className="user"></div>
                     <div className="login"></div>
                     <div className="cadastro"></div>
                  </div>

                  <div className="flex gap-4 justify-center">
                     <button className="text-3xl dark:text-white text-blue-300" onClick={()=>{
                        setTheme("light")
                     }}><HiSun/></button>
                     <button className="text-3xl text-white dark:text-blue-300 " onClick={()=>{
                        setTheme("dark")
                     }}><HiMoon/></button>
                  </div>

               </div>

            </nav>
         </header>
      </>
   )
}

export default Navbar;