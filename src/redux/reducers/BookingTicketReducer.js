const stateBookingTicket = {
    bookingChairList: [
        // {id:'01', price:75000, stt:'01'},
        // {id:'02', price:75000, stt:'02'},
    ]

}
export const BookingTicketReducer = (state = stateBookingTicket, action) => {
    switch (action.type) {
        case 'BOOKING_CHAIR': {
            let index = state.bookingChairList.findIndex(bookingChair => bookingChair.maGhe === action.item.maGhe);
            if (index !== -1) {
                state.bookingChairList.splice(index, 1);
                console.log("state.bookingChairList", state.bookingChairList)
            } else {
                state.bookingChairList.push(action.item)
            }
            state.bookingChairList = [...state.bookingChairList]
            return { ...state }

        }
        default: return { ...state };
    }
}
