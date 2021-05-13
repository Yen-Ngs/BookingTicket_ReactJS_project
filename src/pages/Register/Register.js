import React, { Component } from 'react'
import SignUpForm from './SignUpForm';
import {RegisterInfor} from './RegisterInfor'
import './Register.scss'


export default function Register(props) {
    return (
        <div className="register">
            <SignUpForm/>
            <RegisterInfor/>
        </div>
    )
}


