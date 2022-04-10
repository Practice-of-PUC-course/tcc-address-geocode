/**
 * Represents the location point and has longitude and latitude coordinates.
 */
class Point {
    /**
     * Setting the values for a point.
     * 
     * @param {double precision} longitude, the value for the longitude of a geographic coordinate.
     * @param {double precision} latitude, the value for the latitude of a geographic coordinate.
     */
    constructor(longitude,latitude){
        this.latitude=latitude;
        this.longitude=longitude;
    };

     /**
     * Gets the latitude for the point.
     * 
     * @returns {double precision} the latitude value.
     */
    getLat=()=>{
        return this.latitude;
    };

    /**
     * Gets the longitude for the point.
     * 
     * @returns {double precision} the longitude value.
     */
    getLng=()=>{
        return this.longitude;
    };

    /**
     * Export data of instance to JSON.
     * @returns {...} a simple text Object
     */
    toString=()=>{
        return {
            "lat":this.getLat(),
            "lng":this.getLng()
        };
    };
};

export { Point };