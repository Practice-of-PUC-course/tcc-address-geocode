// loadind the .env file for this context
import dotenv from 'dotenv';
dotenv.config({ silent: true });

/**
 * Make a connection URL for external API using the environment variables
 * and an option object as default properties to properly URL format.
 * Using recommendations from official documentation.
 * 
 * 
 * Set .env to change configuration of the API account
 */
const getServiceURL=()=>{

    let opts={
        filter: 'countrycode:br',
        limit: '1',
        response_format: 'search'
    };

    let basequery=null;
    if(process.env.GEOAPIFY_API_URL && process.env.GEOAPIFY_API_KEY){
        basequery=process.env.GEOAPIFY_API_URL+
        '/'+opts.response_format+
        '?apiKey='+process.env.GEOAPIFY_API_KEY+
        '&filter='+opts.filter+
        '&limit='+opts.limit;
    }else{
        console.log("Missing the base API parameters. Review the .env configuration file.");
    }

    return (basequery)?(basequery):(false);
};

/**
 * Validate the entry object and prepare the query string as expected by Google API.
 * Forces the country on end of query string as suggested by API doc.
 * 
 * @param {Address} address, the object where properties as address parts. Ex.: {street:'A complete street name',number:120,county:'A complete county name',state:'A complete state name'}
 * @returns {string} An query string for address. Ex.: &q=parts,of,address,separated,by,comma
 */
const prepareStatement=(address)=>{

    let qs=null;
    if(typeof address=='object'){
        let isEmpty=(s)=>{return s==''};
        let ads='';
        for(let p in address) {
            if(address.hasOwnProperty(p)) ads=ads+(isEmpty(ads)?'':',')+address[p];
        }
        if(!isEmpty(ads)) qs='&text='+encodeURIComponent(ads);
    }else{
        console.log("Missing address or incorrect input type. Expects an object but "+typeof address+" was provided.");
    }
    return qs;
};

export { getServiceURL, prepareStatement };