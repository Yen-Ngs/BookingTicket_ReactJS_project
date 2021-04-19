const stateDefault ={
    arrFilms:[],
    movieDetails:{tenPhim:'default', heThong:[]},
    ticketInfor:{}

}
export const MovieReducer = (state=stateDefault,action)=>{
    switch(action.type){
        case 'GET_FILMS':{
            state.arrFilms =[...action.arrFilms]
            return{...state}
        }
        case 'GET_DETAILS':{
            state.movieDetails = action.movieDetails
            return{...state}
        }
        case 'GET_INFOR_TICKET':{
            state.ticketInfor = action.ticketInfor
            return{...state}
        }
        default:{
            return{...state}
        }
    }
}