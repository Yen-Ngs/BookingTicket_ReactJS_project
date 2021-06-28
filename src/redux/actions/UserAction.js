import axios from 'axios'
import { accessToken, domain, account } from '../../configs/setting';
import { history } from '../../App'



export const logInAction = (user) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data: { taiKhoan: user.account, matKhau: user.password }
            })
            localStorage.setItem(accessToken, result.data.accessToken);
            localStorage.setItem("User", JSON.stringify(result.data))
            history.push('/')
            dispatch({
                type: 'LOG_IN',
                account: result.data.account
            })
        } catch (errors) {
            return "Account or password is incorrect, try again!"
        }

    }
}
export const SignUpAction = (user)=>{
    return async(dispatch)=>{
        try{
            const result = await axios({
                url: `${domain}/api/QuanLyNguoiDung/DangKy`,
                method:'POST',
                data:{ taiKhoan: user.account, matKhau: user.password}
            })
            localStorage.setItem(accessToken, result.data.accessToken);
            localStorage.setItem(account, JSON.stringify(result.data))
            history.push('/login')
            dispatch({
                type:'SIGN_UP',
                account: result.data.account
            })
        }catch(errors){
            console.log('errors', errors);
        }
    }
}