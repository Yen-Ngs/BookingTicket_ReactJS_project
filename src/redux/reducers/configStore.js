import { applyMiddleware, combineReducers, createStore } from 'redux'
import { MovieReducer } from '../reducers/MovieReducer';
import reduxThunk from 'redux-thunk'
import { LoadingReducer } from './LoadingReducer';
import { BookingTicketReducer } from './BookingTicketReducer'
import { RegisterReducer } from './RegisterReducer'

const rootReducer = combineReducers({
    MovieReducer: MovieReducer,
    LoadingReducer: LoadingReducer,
    BookingTicketReducer: BookingTicketReducer,
    RegisterReducer:RegisterReducer
})


export const store = createStore(rootReducer, applyMiddleware(reduxThunk));