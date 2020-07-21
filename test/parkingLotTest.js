var assert = require('assert');
var ParkingLotSystem = require('../main/ParkingLotSystem');

describe('describe Mocha Test for parking lot', function () {
    
  it('should return true when park their car to catch the flight.', function () {
        let parkingLotSystem = new ParkingLotSystem();
        let car = new Object();
        let answser = parkingLotSystem.park(car);
        assert.equal(answser, true);
    });

  it('should return true when Unpark their car to go home.', function () {
      let parkingLotSystem = new ParkingLotSystem();
      let car = new Object();
      let car1 = new Object();
      parkingLotSystem.park(car);
      let answser = parkingLotSystem.unPark(car);
      assert.equal(answser, true);
    });

  it('should return false when no vehicle park.', function () {
      let parkingLotSystem = new ParkingLotSystem();
      let car = new Object();
      let answser = parkingLotSystem.park();
      assert.equal(answser, false);
    });

  it('should return throw an exception when UnPark unknown vehicle.', function () {
    try {
        let parkingLotSystem = new ParkingLotSystem();
        let car = new Object();
        let car1 = new Object();
        parkingLotSystem.park(car);
        parkingLotSystem.park(car1);
        let ans = parkingLotSystem.unPark(new Object());
    } catch (error) {
        // assert.equal(error.message, 'unknown vehicle unParked.');
    }
    });

    it('should return throw an exception when null vehicle unPark.', function () {
      try {
          let parkingLotSystem = new ParkingLotSystem();
          let car = new Object();
          let car1 = new Object();
          parkingLotSystem.park(car);
          parkingLotSystem.park(car1);
          let ans = parkingLotSystem.unPark();
          assert.equal(ans, false);
      } catch (error) {
      }
    });

  it('should return exception when parking lot is full.', function () {
      try {
          let parkingLotSystem = new ParkingLotSystem();
          let car = new Object();
          let car1 = new Object();
          let car2 = new Object();
          parkingLotSystem.park(car);
          parkingLotSystem.park(car1);
          parkingLotSystem.park(car2);
      } catch (error) {
          assert.equal(error.message, 'lot is full.');
      }
    }); 

    it('should return exception when parking lot is full and notify to parking lot owner.', function () {
      try {
          let parkingLotSystem = new ParkingLotSystem();
          let car = new Object();
          let car1 = new Object();
          let car2 = new Object();
          parkingLotSystem.park(car);
          parkingLotSystem.park(car1);
          parkingLotSystem.park(car2);
      } catch (error) {
          assert.equal(error.message, 'lot is full.');
      }
  });

  it('should return exception when parking lot is full and notify to airport security.', function () {
      try {
          let parkingLotSystem = new ParkingLotSystem();
          let car = new Object();
          let car1 = new Object();
          let car2 = new Object();
          parkingLotSystem.park(car);
          parkingLotSystem.park(car1);
          parkingLotSystem.park(car2);
      } catch (error) {
          assert.equal(error.message, 'lot is full.');
      }
  });

  it('should return exception when parking lot is full and again is available then notify to parking lot owner.', function () {
      try {
          let parkingLotSystem = new ParkingLotSystem();
          let car = new Object();
          let car1 = new Object();
          let car2 = new Object();
          parkingLotSystem.park(car);
          console.log('a1')
          parkingLotSystem.park(car1);
          console.log('a2')
          parkingLotSystem.park(car2);
          console.log('a3')
          // parkingLotSystem.unPark(car2);
          console.log('b1')
      } catch (error) {
          console.log('ccccccc')
          assert.equal(error.message, 'lot is full.');
      }
  });

}); 