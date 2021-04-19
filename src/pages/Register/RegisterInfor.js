import React, { useState, useEffect } from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'

export function RegisterInfor(props) {
    // useSellector is a hook to get data from reducer 
    const arrInfor = useSelector(state =>state.RegisterReducer.arrInfor)

//useDispatch the same this.props.dispatch
    const dispatch = useDispatch()

    const renderInfor = () => {
        return arrInfor.map((infor, index) => {
            return <tbody className="text-white">
                    <tr key={index}>
                            <td>{infor.account}</td>
                            <td>{infor.email}</td>
                            <td>{infor.fullName}</td>
                            <td>{infor.phoneNumber}</td>
                        </tr>
            </tbody>
        

        })
    }

    return (
        <div className="container mt-5">
            <div className="display-4 text-center">Personal Information</div>
            <div className="row mt-5">
            <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Account</th>
                            <th>Email</th>
                            <th>Full Name</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    {renderInfor()}
                </table>
                
            </div>

        </div>
    )
        }
