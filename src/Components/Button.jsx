function Button({children,type}) {
   const colors={
      primary: "bg-blue-400 hover:bg-blue-600 text-white",
      secondary: "bg-purple-400 hover:bg-purple text-white"
   }

   return (
   <button className={`py-2 px-4 rounded-md text-lg font-medium duration-100 ease-in-out ${colors[type]}`}>
      {children}
   </button>
  )
}

export default Button