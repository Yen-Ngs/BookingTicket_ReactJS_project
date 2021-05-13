import React from'react'
import {Route} from 'react-router'
import { NavLink } from 'react-router-dom';
import './templates.scss'

export const AdminTemplate = (props) =>{
    let {Component,...restParams} = props;
    return <Route {...restParams} render={(propsRoute)=>{
        return <div className="templates">
            <div className="row">
                <div className="col-3 text-white text-center navbar-item arrow" style={{height:800}}>
                </div>
                <div className="col-8">
                    <Component {...propsRoute}/>

                </div>

            </div>
        </div>
    }}
    />
}