import {applyMiddleware, combineReducers, createStore} from 'redux'
import { MovieReducer } from '../reducers/MovieReducer' ;
import reduxThunk from 'redux-thunk'
import { LoadingReducer } from './LoadingReducer';
import {BookingTicketReducer} from './BookingTicketReducer'

const rootReducer = combineReducers({
    MovieReducer:MovieReducer,
    LoadingReducer:LoadingReducer,
    // BookingTicketReducer:BookingTicketReducer
})


export const store = createStore(rootReducer,applyMiddleware(reduxThunk));