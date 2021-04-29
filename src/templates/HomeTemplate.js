import React from 'react'
import { Route } from 'react-router';
import Header from "../components/Home/Header/Header"
import Footer from "../components/Home/Footer/Footer"

export const HomeTemplate = (props)=>{
    let {Component,...restRoute} = props;

    return <Route {...restRoute} render={(propsRoute)=>{
        return <div>
            <Header/>
            <Component {...propsRoute}/>
            <Footer/>
        </div>
    }}></Route>
}