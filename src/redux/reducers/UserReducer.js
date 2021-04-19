import {account} from '../../configs/setting'

let userAccount ='';
if(localStorage.getItem(account)){
    let userAccountStore = localStorage.getItem(account);
    userAccount = JSON.parse(userAccountStore).account
}
const stateDefault = {
    account:userAccount
}
export const UserReducer = (state =stateDefault,action)=>{
    switch (action.type){
        case 'LOG_IN':{
            state.account=action.account;
            return{...state}
        }
        default:{
            return{...state}

        }
    }
}