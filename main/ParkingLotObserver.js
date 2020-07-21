let ParkingLotOwner = require('./ParkingLotOwner');
let AirportSecurity = require('./AirportSecurity');
let airportSecurity;
let parkingLotOwner;

class ParkingLotObserver{

    constructor() {
        airportSecurity = new AirportSecurity();
        parkingLotOwner = new ParkingLotOwner();
        this.notificationPersonList = [];
    }

    subscribe() {
        this.notificationPersonList.push(airportSecurity);
        this.notificationPersonList.push(parkingLotOwner);
    }

    getNotify() {
        this.notificationPersonList.map(data => {
            data.notifySlotFull();
        })
    }

    getNotifyToOwner() {
        this.notificationPersonList.map(data => {
            if (data == parkingLotOwner)
                data.notifySlotEmpty();
        })
    }

}

module.exports = ParkingLotObserver;