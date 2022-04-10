// loadind the .env file for this context
import dotenv from 'dotenv';
dotenv.config({ silent: true });

/**
 * Make a connection URL for external API using the environment variables
 * and an option object as default properties to properly URL format.
 * Using recommendations from official documentation.
 * https://opencagedata.com/api
 * 
 * Set .env to change configuration of the API account
 */
const getServiceURL=()=>{

    let opts={
        countrycode: 'br',
        language: 'pt-BR',
        response_format: 'geojson',
        limit: 1,
        pretty: 0
    };

    let basequery=null;
    if(process.env.OPENCAGE_API_URL && process.env.OPENCAGE_API_KEY){
        basequery=process.env.OPENCAGE_API_URL+
        '/'+opts.response_format+
        '?key='+process.env.OPENCAGE_API_KEY+
        '&limit='+opts.limit+
        '&language='+opts.language+
        '&pretty='+opts.pretty+
        '&countrycode='+opts.countrycode;
    }else{
        console.log("Missing the base API parameters. Review the .env configuration file.");
    }

    return (basequery)?(basequery):(false);
};

/**
 * Validate the entry object and prepare the query string as expected by API OpenCage.
 * Forces the country on end of query string as suggested by API doc.
 * https://opencagedata.com/guides/how-to-format-your-geocoding-query
 * 
 * @param {Address} address, the object where properties as address parts. Ex.: {street:'A complete street name',number:120,county:'A complete county name',state:'A complete state name'}
 * @returns {string} An query string like OpenCage API expects. Ex.: &q=parts,of,address,separated,by,comma
 */
const prepareStatement=(address)=>{

    let qs=null;
    if(typeof address=='object'){
        let isEmpty=(s)=>{return s==''};
        let ads='';
        for(let p in address) {
            if(address.hasOwnProperty(p)) ads=ads+(isEmpty(ads)?'':',')+address[p];
        }
        if(!isEmpty(ads)) qs='&q='+encodeURIComponent(ads+', Brasil');
    }else{
        console.log("Missing address or incorrect input type. Expects an object but "+typeof address+" was provided.");
    }
    return qs;
};

export { getServiceURL, prepareStatement };