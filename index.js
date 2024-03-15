const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2)
};

const returnLastTwoDrivers = function (array) {
    return array.slice(array.length - 2, array.length)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (number) {
      return number * multiplier;
    };
  };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function (arrayOfDrivers, callback) {
    return callback(arrayOfDrivers);
};