  
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if (!date) return 'Unable to determine the time of year!';
    if (typeof date !== "object" || date == 'Invalid Date' || Object.prototype.toString.call(date) !== "[object Date]") throw new Error('Invalid number error. Please insert correct date.');

    const month = date.getMonth();

    if (month <= 1 || month === 11) return 'winter'
    else if (month <= 2 || month <= 4) return 'spring';
    else if (month <= 5 || month <= 7) return 'summer';
    else if (month <= 8 || month <= 10) return 'autumn';

    return month;

}
