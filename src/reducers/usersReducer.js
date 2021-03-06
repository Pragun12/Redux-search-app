import {FETCH_USERS} from '../actions/types';

const initialState={
    userList:[],
    user:{}
}

export default function(state=initialState,action){

    switch(action.type){
        case FETCH_USERS:
        return {
            ...state,
            userList:action.payload
        }
        default:
        return state;
    }
}