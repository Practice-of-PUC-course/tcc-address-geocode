import axios from "axios";
//import { getServiceURL, prepareStatement } from '../drive/googleAPI.js';
import { getServiceURL, prepareStatement } from '../drive/geoapifyAPI.js';

const getGeoLocation = async (address)=>{
    let url=getServiceURL();
    let qs=prepareStatement(address);
    if(url && qs) {
        return await axios.get(url+qs);
    }else{
        return false;
    }
};

export { getGeoLocation };