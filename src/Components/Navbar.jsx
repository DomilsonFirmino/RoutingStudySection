import { NavLink} from "react-router-dom"

import { HiSun } from "react-icons/hi";
import {HiMoon} from "react-icons/hi";
import {HiMenu} from  "react-icons/hi";
import {HiX} from "react-icons/hi";


import Navlink from "./NavLink";

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
         <header className="bg-blue-600 dark:bg-blue-800 py-6 text-white sticky w-full mb-auto">
            <nav className="container sm:flex sm:gap-12 items-center justify-between sm:space-y-0">

               <p className="flex-1 font-black -tracking-[-0.15em]">LOGOTIPO</p>
               
               <div className="fixed top-2 right-2 px-4 py-2 rounded-md z-[999999] sm:hidden">
                  <button className="text-3xl text-white" onClick={()=>{setIsOpen(!isOpen)}}>
                     {isOpen ? <HiX/> : <HiMenu/>}
                  </button>
               </div>

               <div className={`space-y-4 text-center sm:flex items-center sm:space-y-0 flex-2 sm:gap-6 absolute sm:relative top-[100%] left-0 bg-blue-600 dark:bg-blue-800 transform justify-end w-auto ${isOpen ? "" : "translate-x-[-100%]"} flex-1 sm:translate-x-0 duration-100 ease-in-out py-4 sm:py-0 w-full`}>
                 
                  <ul className="space-y-2 sm:space-y-0 sm:flex sm:gap-8 items-center text-lg sm:text-base">
                     <Navlink link="/">Home</Navlink>
                     <Navlink link="about">About</Navlink>{/*
                     <Navlink link="Login">Login</Navlink>
                     <Navlink link="Register">Register</Navlink>*/}
                  </ul>

                  <div className="flex gap-4 justify-center">
                     <button className="text-3xl dark:text-white text-blue-800" onClick={()=>{
                        setTheme("light")
                     }}><HiSun/></button>
                     <button className="text-3xl text-white dark:text-blue-400" onClick={()=>{
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