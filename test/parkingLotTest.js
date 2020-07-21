var assert = require('assert');
var ParkingLotSystem = require('../main/ParkingLotSystem');
let ParkingLotOwner = require('../main/ParkingLotOwner');
let AirportSecurity = require('../main/AirportSecurity');

describe('describe Mocha Test for parking lot', function () {

  let parkingLotSystem;
  let airportSecurity;
  let parkingLotOwner;

    beforeEach(() => {
        parkingLotSystem = new ParkingLotSystem();
        airportSecurity = new AirportSecurity();
        parkingLotOwner = new ParkingLotOwner();
    })
    
  it('should return true when park their car to catch the flight.', function () {
        let car = new Object();
        let answser = parkingLotSystem.park(car);
        assert.equal(answser, true);
    });

  it('should return true when Unpark their car to go home.', function () {
      let car = new Object();
      let car1 = new Object();
      parkingLotSystem.park(car);
      let answser = parkingLotSystem.unPark(car);
      assert.equal(answser, true);
    });

  it('should return false when no vehicle park.', function () {
    try {
      let car = new Object();
      parkingLotSystem.park();
  } catch (err) {
      assert.equal(err.message, 'unknown vehicle parked.');
  }
    });

  it('should return true when UnPark particular car to go home.', function () {
      let car = new Object('0');
      let car1 = new Object('1');
      let car2 = new Object('2');
      parkingLotSystem.park(car);
      parkingLotSystem.park(car1);
      parkingLotSystem.park(car2);
      let ans = parkingLotSystem.unPark(car2)
      assert.equal(ans, true);
    });

  it('should return throw an exception when UnPark unknown vehicle.', function () {
    try {
        let car = new Object();
        let car1 = new Object();
        parkingLotSystem.park(car);
        parkingLotSystem.park(car1);
        let ans = parkingLotSystem.unPark(new Object());
    } catch (error) {
        assert.equal(error.message, 'unknown vehicle unParked.');
    }
    });

    it('should return throw an false when null vehicle unPark.', function () {
      try {
          let car = new Object();
          let car1 = new Object();
          parkingLotSystem.park(car);
          parkingLotSystem.park(car1);
          let ans = parkingLotSystem.unPark();
          assert.equal(ans, false);
      } catch (error) {
      }
    });

  it('should return false when parking lot is full.', function () {
      try {
          let car = new Object();
          let car1 = new Object();
          let car2 = new Object();
          parkingLotSystem.park(car);
          parkingLotSystem.park(car1);
          let ans = parkingLotSystem.park(car2);
            assert.equal(ans, false);
      } catch (error) {
  
      }
    }); 

    it('should return false when parking lot is full and notify to parking lot owner.', function () {
      try {
          let car = new Object();
          let car1 = new Object();
          let car2 = new Object();
          parkingLotSystem.park(car);
          parkingLotSystem.park(car1);
          let ans = parkingLotSystem.park(car2);
            assert.equal(ans, false);
      } catch (error) {
          
      }
  });

  it('should return exception when parking lot is full and notify to airport security.', function () {
      try {
          let car = new Object();
          let car1 = new Object();
          let car2 = new Object();
          let car3 = new Object();
          parkingLotSystem.park(car);
          parkingLotSystem.park(car1);
          parkingLotSystem.park(car2)
          let ans = parkingLotSystem.park(car3);
            assert.equal(ans, false);
      } catch (error) {
         
      }
  });

  it('should return exception when parking lot is full and again is available then notify to parking lot owner.', function () {
      try {
          let car = new Object();
          let car1 = new Object();
        
          parkingLotSystem.park(car);
          parkingLotSystem.park(car1);
          // parkingLotSystem.park(car2);

          parkingLotSystem.unPark(car1);
         
      } catch (error) {
          assert.equal(error.message, 'lot is full.');
      }
  });

  it('should return exception when parking lot is full and again is available then notify to parking lot owner .', function () {
    try {
        let car = new Object();
        let car1 = new Object();
        let car2 = new Object();
        let car3 = new Object();
        parkingLotSystem.park(car);
        parkingLotSystem.park(car1);
        parkingLotSystem.park(car2);
        // parkingLotSystem.park(car3);
        parkingLotSystem.unPark(car2);
    } catch (error) {
        assert.equal(error.message, 'lot is full.');
    }
  });

}); 