import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import{withFormik, useFormik} from 'formik'
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import './Login.scss'
import { logInAction } from '../../redux/actions/UserAction';


export default function Login(props) {
    const Bgline = 'linear-gradient(to bottom,rgba(62,33,86,0.6),rgba(62,34,124,0.7),rgba(61,36,126,0.8),rgba(63,40,134,1)'
    const {history} = useHistory();
    const dispatch = useDispatch();
    const formik =  useFormik({
        initialValues:{
            account:'',
            password:'',
        },
        onSubmit:values=>{
            console.log(values);
            dispatch(logInAction(values));
            history.push('/home');
        }
    })
    
    return (
        <section className="ftco-section login" >
            <div className="container text-white" >
                <div className="row justify-content-center mt-5">
                    <div className="col-md-12 col-lg-10">
                        <div className="wrap d-md-flex">
                            <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last"
                                style={{ backgroundColor: 'linear-gradient(to bottom,rgba(62,33,86,0.6),rgba(62,34,124,0.7),rgba(61,36,126,0.8),rgba(63,40,134,1))' }}>
                                <div className="text w-100">
                                    <h3>Welcome to login</h3>
                                    <p>Don't have an account?</p>
                                    <NavLink to="/regiser" className="signup px-4 py-2">Sign Up</NavLink>
                                </div>
                            </div>
                            <div className="login-wrap p-4 p-lg-5 text-dark">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Sign In</h3>
                                    </div>
                                    
                                </div>
                                <form action="#" className="signin-form" bg={Bgline} onSubmit={formik.handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="name" >Username</label>
                                        <input name="account" type="text" className="form-control" placeholder="Username" required values={formik.values.account} onChange={formik.handleChange}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="password" >Password</label>
                                        <input name="password" type="password" className="form-control" placeholder="Password" required values={formik.values.password} onChange={formik.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit"
                                            className="form-control btn px-3">Sign In
                                    </button>
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50 text-left">
                                            <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                                <input type="checkbox" defaultChecked />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <p className="social-media d-flex justify-content-start">
                                            <a href="#" className="social-icon d-flex align-items-center justify-content-center p-4"><span className="fab fa-facebook" /></a>
                                            <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fab fa-twitter" /></a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
