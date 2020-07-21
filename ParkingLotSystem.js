class ParkingLotSystem {

    park(vehicle){
        this.parkvehicle = vehicle;
        return true;
    }

    unPark(vehicle) {
        if (this.parkVehicle == vehicle) {
            return true;
        }
        return false;
    }
    
}
module.exports = ParkingLotSystem;