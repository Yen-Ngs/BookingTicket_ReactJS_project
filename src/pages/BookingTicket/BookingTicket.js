import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { account } from '../../configs/setting';
import { bookingTicketAction } from '../../redux/actions/BookingManagementAciton';
import { getInforTicketRoom } from '../../redux/actions/MovieAction';
import './BookingTicket.scss'

export default function BookingTicket(props) {
    const { ticketInfor } = useSelector(state => state.MovieReducer)
    const { bookingChairList } = useSelector(state => state.BookingTicketReducer)
    const dispatch = useDispatch();
    let { id } = props.match.params;
    useEffect(() => {
        dispatch(getInforTicketRoom(id))
    }, [])

    // render lần đầu rỗng vì --> useEffect có [] = componentDidMout nên chạy lần 1 return arr rỗng
    const renderChair = () => {
        console.log('render_1', ticketInfor)
        return ticketInfor.danhSachGhe?.map((item, index) => {
            let indexBookingChair = bookingChairList.findIndex(isBooking => isBooking.maGhe === item.maGhe);
            let classBookingChair = indexBookingChair !== -1 ? 'bookingChair' : '';
            let classBookedChair = item.daDat ? 'bookedChair' : '';
            console.log(item.daDat);
            let classVipChair = item.loaiGhe === 'Vip' ? 'VipChair' : '';
            return <Fragment key={index}>
                <button className={`chair ${classBookingChair} ${classVipChair} ${classBookedChair}`} disabled={item.daDat} onClick={() => {
                    dispatch({
                        type: 'BOOKING_CHAIR',
                        item
                    })
                }}>
                    {item.daDat === true ? 'X' : item.stt}

                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}

            </Fragment>
        })
    }

    const renderBookingChair = () => {
        console.log(bookingChairList, "chair_render")
        return bookingChairList?.map((bookingItem, index) => {
            return <Fragment key={index}>
                <span className="text-success">{bookingItem.stt}</span>
            </Fragment>
        })
    }
    const total = () => {
        return bookingChairList.reduce((totalVND, bookingItem, index) => {
            return totalVND += bookingItem.giaVe
        }, 0)
    }
    if (!localStorage.getItem('account')) {
        return <Redirect to='/login' />
    }
    // console.log(ticketInfor, 'thong tin dat ve');

    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-8 text-center mt-5">
                    <img className="logo w-75" src="https://tix.vn/app/assets/img/icons/screen.png" alt="" />
                    <hr />
                    <div className="text-center">
                        {renderChair()}
                    </div>
                </div>
                <div className="col-4 text-center mt-5 text-white">
                    <div className="display-4 text-success">{total().toLocaleString()}VND</div>
                    <hr />
                    <img src={ticketInfor.thongTinPhim?.hinhAnh} height={250} alt="123" />
                    <h3>{ticketInfor.thongTinPhim?.tenPhim}</h3>

                    <div>Adress:{ticketInfor.thongTinPhim?.diaChi}</div>
                    <div>Schedule:{ticketInfor.thongTinPhim?.ngayChieu} - {ticketInfor.thongTinPhim?.gioChieu}</div>
                    <hr />
                    <div className="text-warning text-left">
                        {renderBookingChair()}
                    </div>
                    <button className="w-75 btn btn-success display-4" onClick={() => {
                        let userLogin = JSON.parse(localStorage.getItem(account))

                        let bookingInfor = {
                            "maLichChieu": props.match.params.id,
                            "danhSachVe": bookingChairList,
                            "taiKhoanNguoiDung": userLogin.taiKhoan
                        }
                        dispatch(bookingTicketAction(bookingInfor))
                    }}>Booking Tickets</button>
                </div>
            </div>
        </div>
    )
}
