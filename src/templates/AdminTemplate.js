import React from'react'
import {Route} from 'react-router'
import { NavLink } from 'react-router-dom';
import './templates.scss'

export const AdminTemplate = (props) =>{
    let {Component,...restParams} = props;
    return <Route {...restParams} render={(propsRoute)=>{
        return <div className="templates">
            <div className="row">
                <div className="col-3 text-white text-center navbar-item" style={{height:800}}>
                    {/* <a className="item" href="/home">Home</a> <br/>
                    <a className="item" href ='/details'>Movies List</a> <br/>
                    <a className="item" href='/checkout'>Movies Schedule</a> <br/>
                    <a className="item" href='/checkout'>Pops, Snack and Drinking</a> <br/>
                    <a className="item" href='/checkout'>Coupons</a> <br/>
                    <a className="item" href='/register'>Member Register</a> <br/>
                    <a className="item" href='/contact'>Contact</a> <br/>   */}

                </div>
                <div className="col-8">
                    <Component {...propsRoute}/>

                </div>

            </div>
        </div>
    }}
    />
}