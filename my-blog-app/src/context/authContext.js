// AS WE WILL NEED OUR USERS INFO IN MULTIPLE PAGES

import { createContext, useState, useEffect } from "react";
import axios from "axios"


export const Authcontext  = createContext();

export const AuthContextProvider = ({children})=>{
 const [currentUser, setCurrentUser]  = useState
 (JSON.parse(localStorage.getItem("user")) || null)
    
    const login = async(inputs)=>{
        const res = await axios.post("/auth/login", inputs);
        setCurrentUser(res.data)
    };
    const logout = async (inputs) => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
    };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return <Authcontext.Provider value={{currentUser, login, logout}}>
        {children}
        </Authcontext.Provider>;

};