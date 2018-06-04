import {FETCH_USERS} from './types';

export const fetchUsers=(inpt)=>dispatch=>{
    
        fetch('https://api.github.com/search/users?q='+inpt)
        .then(res=>res.json())
        .then(users=>dispatch({
                type:FETCH_USERS,
                payload:users
            }));
    
}