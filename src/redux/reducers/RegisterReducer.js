const stateDefault ={
    arrInfor:
    [
        // {account:'Mr A', email:'mrA@gmail.com', fullName:'Lemonade', phoneNumber:'090909090'}
    ]
}
export const RegisterReducer =(state=stateDefault,action)=>{
    switch(action.type){
        case 'GET_INFOR':{
            
            state.arrInfor =[...state.arrInfor,action.arrInfor];
            return{...state}
        }
        default:{
            return {...state}
        }

    }

}