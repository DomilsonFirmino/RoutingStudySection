function Button({onEvent,children}) {
   return (
   <button className={`px-2 py-2`}>
      {children}
   </button>
  )
}

export default Button