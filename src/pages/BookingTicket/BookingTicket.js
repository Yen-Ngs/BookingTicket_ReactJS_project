import React, {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Redirect } from 'react-router-dom';
import { account } from '../../configs/setting';
import { bookingTicketAction } from '../../redux/actions/BookingManagementAciton';
// import { getInforTicketRoom } from '../../redux/actions/MovieAction';
import './BookingTicket.scss'

export default function BookingTicket(props) {
    const {ticketInfor} = useSelector(state=>state.MovieReducer)
    const {bookingChairList} = useSelector(state=> state.BookingTicketReducer)
    let {id} = props.match.params;
    // useEffect(()=>{
    //     dispatchEvent(getInforTicketRoom())
    // },[])
    const renderChair = ()=>{
        return ticketInfor.danhSachGhe?.map((item,index)=>{
            let indexBookingChair = bookingChairList.findIndex(bookingChair => bookingChair.maGhe === item.maGhe);
            let classBookingChair = indexBookingChair !==-1? 'bookingChair':'';
            let classBookedChair = item.booked ? 'bookedChair':'';
            let classVipChair = item.loaiGhe === 'Vip' ? 'VipChair':'';

            return <Fragment key ={index}>
                <button className={`chair ${classBookingChair} ${classVipChair} ${classBookedChair}`} onClick={()=>{
                    dispatchEvent({
                        type:'BOOKING_CHAIR',
                        item
                    })
                }}>
                    {item.daDat === true ?'X': item.stt}

                </button>
                {(index +1) %16 ===0? <br/>:''}

            </Fragment>
            
        })
    }
    const renderBookingChair =()=>{
        return bookingChairList.map((bookingItem,index)=>{
            return <Fragment key={index}>
                <span className="text-success"></span>

            </Fragment>
        })
    }



    return (
        <div>
            
        </div>
  )
}
