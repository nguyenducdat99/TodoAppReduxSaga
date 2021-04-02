import axios from 'axios';
import { API_URL } from "../constants/ActionTypes";

export default async function callApi(endpoint, method, data) {
    try{
        const response =  await axios(
            {
                method: method,
                url: ''+API_URL+'/'+endpoint,
                data: data
            }
        )
        return response;
    }
    catch(err) {
        console.log(err);
    }

}

