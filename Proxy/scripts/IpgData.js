class IpgData {
    constructor(ipgData) {
        this.db = {};
        this.setDb(ipgData);
    }
    
    setDb (ipgData) {
        ipgData.forEach(event => {
            this.db[`${event.stationId}_${event.startTime}`] = {
                event: event
            }
        })
    }
    
    getEvents (stationId, startTime) {
        let field = `${stationId}_${startTime}`;
        return this.db[field];
    }
}

export default IpgData;