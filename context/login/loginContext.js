import { View, Text } from 'react-native'
import React,{createContext,useReducer} from 'react'
import { useState } from 'react';
import { reducer as loginReducer,intialstate } from '../../reducer/loginReducer';

export const loginContext = createContext();
export const Loginprovider=({children})=>{
    const[state,dispatch]=useReducer(loginReducer,intialstate)
    return(
        <loginContext.Provider value={{state,dispatch}}>
            {children}
        </loginContext.Provider>
    )
} 