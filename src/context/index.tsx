"use client"
import {createContext, useContext, useEffect, useState} from "react"
import { db } from "@/firebase";
import { collection ,addDoc } from "firebase/firestore";



const AppContext = createContext<any>(undefined)

export default function AppWrapper({children,
}: Readonly<{
  children: React.ReactNode;
}>){
    const [links, setLinks] = useState<any>([]);
    const [globalLinks , setGlobalLinks] = useState<[]>([])
    async function addToDb(name:"string",email:"string",message:"string" ) {
        try{
            const docRef  = await(collection(db ,"message"),{
                name:name,
                email:email,
                message:message,
            })
            // console.log("Document successfully written with ID: ", docRef.id);
        }
        catch(error){
            console.error("Error adding document: ", error);
        }
    }
    const handleCreateLink = () =>{
        links.length <= 4 &&  setLinks([...links, {
            id: Date.now(),
            title: "Github",
            url: '',
            description: "",
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    }
    return (
        <AppContext.Provider value={{
             links,setLinks ,handleCreateLink ,setGlobalLinks ,globalLinks
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}