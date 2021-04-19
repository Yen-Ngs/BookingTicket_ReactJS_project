import React, { Component } from 'react';
import './Register.scss'
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
class Register extends Component {
    state = {
        values: {
            account: '',
            password: '',
            confirmPassword:'',
            email: '',
            phoneNumber: '',
            fullName: '',
        },
        errors: {
            account: '',
            password: '',
            confirmPassword:'',
            email: '',
            phoneNumber: '',
            fullName: '',

        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        let newValues ={...this.state.values};
        newValues[name]=value;
        console.log(newValues);

        let newErrors = {...this.state.errors};
        let errors = '';
        if(value.trim() ===''){
            newErrors[name] = name + ' cannot be emty!'
        }else{
            newErrors[name] = ''
        }
        if(name === 'confirmPassword'){
            if(value === newValues['password']){
                newErrors[name] = ''
            }else{
                newErrors[name] =  'Password Confirm is invalid'
            }
        }

        this.setState({
            values:newValues,
            errors:newErrors,
        })


    }

    handleSubmit =(event)=>{
        event.preventDefault();
        let valid = true;
        // lỗi valid không hợp lệ 
        //+khi bất kì thuộc tính nào của errors !='' =>bị lỗi
        for(let keyError in this.state.errors){
            if(this.state.errors[keyError] !==''){
                valid =false;
            }
        }
        //+hoặc + bất kì thuộc tính nào của value =''
        for(let keyValue in this.state.values){
            if(this.state.values[keyValue] ===''){
                valid=false;
            }
        }
        if(!valid){
            alert("Try Again!")
            return;
        }
        // alert('Success!')
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
          this.props.getInfor(this.state.values);

    }
    
    render() {
        return (
            <form className="container" onSubmit ={this.handleSubmit}>
                <div className="display-4" style={{paddingBottom:30, textAlign:'center', fontWeight:30}}>Sign Up</div> 
                <div className="row mt-20">
                <div className="col-6">
                <div className="form-group">
                    <p style={{fontWeight:'bold'}}>Account</p>
                    <input name="account" className="form-control" style={{width:"70%", border:'2px solid black'}} onBlur={this.handleChange} required />
                    <p className="text-danger">{this.state.errors.account}</p>
                </div>
                <div className="form-group">
                    <p style={{fontWeight:'bold'}}>Password</p>
                    <input type="password" name="password" className="form-control" style={{width:"70%", border:'2px solid black'}} style={{width:"70%", border:'2px solid black'}} onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.password}</p>
                </div>
                <div className="form-group">
                    <p style={{fontWeight:'bold'}}>Confirm Password</p>
                    <input type="password" name="confirmPassword" className="form-control" style={{width:"70%", border:'2px solid black'}} style={{width:"70%", border:'2px solid black'}} onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.confirmPassword}</p>
                </div>
                

                </div>
                <div className="col-6">
                <div className="form-group">
                    <p style={{fontWeight:'bold'}}>E-mail</p>
                    <input type="email" name="email" className="form-control" style={{width:"70%", border:'2px solid black'}} onBlur={this.handleChange} />
                    <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group">
                    <p style={{fontWeight:'bold'}}>Phone Number</p>
                    <input name="phoneNumber" className="form-control" style={{width:"70%", border:'2px solid black'}} onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.phoneNumber}</p>
                </div>
                <div className="form-group">
                    <p style={{fontWeight:'bold'}}>Full-name</p>
                    <input name="fullName" className="form-control" style={{width:"70%", border:'2px solid black'}} onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.fullName}</p>
                </div>


                </div>
                </div>
                <div className="form-group text-center" style={{padding:"10px"}}>
                    <button type="submit" className="btn btn-success">Sign Up</button>

                </div>
                <hr style={{border:"2px solid black"}}></hr>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInfor(obj) {
            dispatch({type: "GET_INFOR", arrInfor: obj});
        }
    }
}

export default  connect(null,mapDispatchToProps)(Register)