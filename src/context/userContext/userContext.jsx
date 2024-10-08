import { createContext, useEffect, useReducer } from "react";
import Reducer from './Reducer'

const INITIAL_STATE ={
    user: JSON.parse(localStorage.getItem('user')) || null,
   

}

export const ContextUser = createContext(INITIAL_STATE);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(()=>{

        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])
    
    return(
        <ContextUser.Provider value={({ user: state.user, dispatch})}>
            { children }
        </ContextUser.Provider>
    )
};