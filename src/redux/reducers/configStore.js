import { applyMiddleware, combineReducers, createStore } from 'redux'
import { MovieReducer } from '../reducers/MovieReducer';
import reduxThunk from 'redux-thunk'
import { LoadingReducer } from './LoadingReducer';
import { BookingTicketReducer } from './BookingTicketReducer'
import { RegisterReducer } from './RegisterReducer'
import { CartReducer } from './CartReducer';

const rootReducer = combineReducers({
    MovieReducer: MovieReducer,
    LoadingReducer: LoadingReducer,
    BookingTicketReducer: BookingTicketReducer,
    RegisterReducer:RegisterReducer,
    // CartReducer:CartReducer
})


export const store = createStore(rootReducer, applyMiddleware(reduxThunk));