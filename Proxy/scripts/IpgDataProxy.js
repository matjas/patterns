import IpgData from "./IpgData.js";

class IpgDataProxy {
    constructor() {
        this.ipgData = new IpgData([
            {stationId: 1, startTime: 123, endTime: 345, name: "Event 1"},
            {stationId: 2, startTime: 123, endTime: 345, name: "Some funny"},
            {stationId: 3, startTime: 123, endTime: 345, name: "Weather"},
            {stationId: 4, startTime: 123, endTime: 345, name: "News"},
            {stationId: 5, startTime: 123, endTime: 345, name: "Movie"}
        ]);
        
        this.ipgCache = {};
    }

    getEvents (stationId, startTime) {
        let field = `${stationId}_${startTime}`;
        if(this.ipgCache[field]) {
            console.log("Return event from cache");
            return this.ipgCache[field];
        } else {
            console.log("Return event from db");
            let data = this.ipgData.getEvents(stationId, startTime);
            data && (this.ipgCache[field] = data);
            return data;
        }
    }
}

export default IpgDataProxy;