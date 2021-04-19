import axios from 'axios'
import { domain } from '../../configs/setting'


export const getMovieAction =()=>{
    return async(dispatch)=>{
        dispatch({
            type:'openLoading'
        })
        setTimeout(async()=>{
            const result = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method:'GET'
            });
            dispatch({
                type:'GET_FILMS',
                arrFilms:result.data
            });
            dispatch({
                type:'closeLoading'
            },1000)
        })
    }
}
export const getDetails =(idFilm)=>{
    return async(dispatch)=>{
        try{
            let result = await axios({
                url: `${domain}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}`,
                method: 'GET'
            });
            dispatch({
                type:'GET_DETAILS',
                movieDetails:result.data
            })
        }catch(errors){

        }
    }

}