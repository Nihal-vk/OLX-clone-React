import {createContext, useState} from 'react';

export const Firebasecontext=createContext(null)
export const authContext=createContext(null)

export default function Context({children}){
    const [user,setUser]=useState(null)

    return(
        <authContext.Provider value={{user,setUser}}> 
            {children}
        </authContext.Provider>
    )
}