import { createContext , useContext, useState } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)



let GlobalStates = ({children}) => {
    const [token , setToken] = useState("suffiyan")
    const[getInputSearch , setGetInputSearch] = useState("")

    return <GlobalContext.Provider value={{
        token,
        getInputSearch,
        setToken,
        setGetInputSearch
    }}>
        {children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}










