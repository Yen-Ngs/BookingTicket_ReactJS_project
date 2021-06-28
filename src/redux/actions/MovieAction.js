import axios from 'axios'
import { domain } from '../../configs/setting'


export const getMovieAction = () => {
    return async (dispatch) => {
        dispatch({
            type: 'openLoading'
        })
        setTimeout(async () => {
            const result = await axios({
                url: `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
                method: 'GET'
            });
            dispatch({
                type: 'GET_FILMS',
                arrFilms: result.data
            });
            dispatch({
                type: 'closeLoading'
            }, 1000)
        })
    }
}
export const getMovieAction2 = () => {
    return async (dispatch) => {
        dispatch({
            type: 'openLoading'
        })
        setTimeout(async () => {
            const result = await axios({
                url: `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02`,
                method: 'GET'
            });
            dispatch({
                type: 'GET_FILMS',
                arrFilms: result.data
            });
            dispatch({
                type: 'closeLoading'
            }, 1000)
        })
    }
}
export const getDetails = (idFilm) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `${domain}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}`,
                method: 'GET'
            });
            dispatch({
                type: 'GET_DETAILS',
                movieDetails: result.data
            })
        } catch (errors) {

        }
    }

}

export const getInforTicketRoom = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${domain}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            });
            dispatch({
                type: 'GET_INFOR_TICKET_ROOM',
                ticketInfor: result.data,
            }, console.log("get infor ticked 2", result.data))


        } catch (error) {
            console.log('error', error);
        }
    }
}