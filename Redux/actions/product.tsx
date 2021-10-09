import {token, backendUrl} from './index';
import axios from 'axios';
import { GET_PRODUCTS } from '../actionTypes';

const getProduct  = (data : any) => {
    return {
        type: GET_PRODUCTS,
        data,
    }
}

export const getAllProduct =  () => {
    return async (dispatch: any) => {
        try{
            const result = await axios.get(`https://m-auto.herokuapp.com/api/products`);
            return dispatch(getProduct(result.data.data));
        } catch(err: any){
            return null;
        }
    }
}
