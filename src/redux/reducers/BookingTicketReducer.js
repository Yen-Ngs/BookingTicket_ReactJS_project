const stateBookingTicket = {
    bookingChairList:[]
}

export const BookingTicketReducer=(state=stateBookingTicket,action)=>{
    switch (action.type){
        case 'BOOKING_CHAIR':{
            let index= state.bookingChairList.findIndex(bookingChair => bookingChair.maGhe === action.item.maGhe)
            if(index !== -1){
                state.bookingChairList.splice(index,1)

            }else{
                state.bookingChairList.push(action.item)
            }
            state.bookingChairList =[...state.bookingChairList]
            return{...state}

        }default: return {...state}
    }


}