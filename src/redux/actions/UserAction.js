import axios from 'axios'
import { accessToken, domain, account } from '../../configs/setting';
import {history} from '../../App'



export const logInAction =(user)=>{
    console.log(user.account);
    return async (dispatch)=>{
        try{
            
            const result= await axios ({
                url:`${domain}/api/QuanLyNguoiDung/DangNhap`,
                method:'POST',
                data:{taiKhoan:user.account, matKhau:user.password }
            })
            localStorage.setItem(accessToken,result.data.accessToken);
            localStorage.setItem(account, JSON.stringify(result.data))
            history.push('/')
            dispatch({
                type:'LOG_IN',
                account: result.data.account
            })
        }catch(errors){
            console.log('errors', errors);
        }

    }
}