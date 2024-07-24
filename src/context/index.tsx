"use client"
import {createContext, useContext, useState} from "react"


const AppContext = createContext<any>(undefined)

export default function AppWrapper({children,
}: Readonly<{
  children: React.ReactNode;
}>){
    const [links, setLinks] = useState<any>([]);
    return (
        <AppContext.Provider value={{
             links,setLinks
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}