import axios from 'axios'
import { accessToken, domain } from '../../configs/setting'
import { history } from '../../App'
import { getInforTicketRoom } from './MovieAction'

export const bookingTicketAction = (bookingInfor) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${domain}/api/QuanLyDatVe/DatVe`,
                method: 'POST',
                data: bookingInfor,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(accessToken) }
            });
            if (result.status === 200) {
                alert('Booking Successfully!');
                history.push(`/checkout/${bookingInfor.maLichChieu}`)
                //call back action to get infor booking ticket 
                dispatch(getInforTicketRoom(bookingInfor.maLichChieu))
            }


        } catch (errors) {
        }
    }

}