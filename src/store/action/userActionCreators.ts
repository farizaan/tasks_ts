import { UserActionType } from '../types/userTypes';
import { Dispatch } from "redux";
import axios from 'axios';

export const fetchUsers = () => (dispatch: Dispatch) => {

    dispatch({type: UserActionType.FETCH_USERS})

    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        dispatch({type: UserActionType.FETCH_USERS_SUCCESS,payload:res.data})
    }).catch(e => {
        dispatch({type: UserActionType.FETCH_USERS_REJECT, payload:"error"})
    })

}