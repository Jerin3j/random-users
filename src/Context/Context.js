import React,{createContext, useState} from 'react'

export const userContext = createContext(null)

  function Context ({children}) {
   const [userDetails, setUserDetails] = useState()
   return(
    <userContext.Provider value={{userDetails, setUserDetails}}>
        {children}
    </userContext.Provider>
   )
  
}

export default Context
