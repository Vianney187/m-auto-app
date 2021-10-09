import {backendUrl} from './index';
import axios from 'axios';
import { LOGIN } from '../actionTypes';

const loginData  = (data: any) => {
    return {
        type: LOGIN,
        data
    }
}

export const login = (data: {telephone: string, password:string}) => {
    return async(dispatch: any) => {
        console.log(data);
        try{
            const result = await axios.post(`https://m-auto.herokuapp.com/api/clients/login`, data);
            console.log(result.data);
            dispatch(loginData({...result.data.data}));
            return 'login';
        } catch(err: any){
            return null;
        }
    }
}