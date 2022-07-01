import React, { useEffect } from 'react';
import { useState } from 'react';
import { Route,Redirect, useHistory } from 'react-router-dom';

export const PrivateRoute = ({auth,children,...rest}) =>{
    var checkToken =()=>{
        if(localStorage.getItem("Token"))
        {
            return true
        }else{
            return false;
        }
    }
    var [auth,setAuth]=useState('hii');
    useEffect(async()=>{
        if(await checkToken())
        {
            setAuth(true);
            console.log("21",auth)
        }else{
            setAuth(false)
            console.log("24",auth)
        }
    },[])
    console.log("27-->",auth)
    return(<Route {...rest} render={()=>auth?(children):(<Redirect exact to={'/'} />)} />)
}