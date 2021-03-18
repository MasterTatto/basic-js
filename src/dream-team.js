const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members ) {
  let name = "";
  members.forEach((el) => {
      if (typeof el === "string") {
          el.trim();
          name += el[0];
      }
  });
  name.toUpperCase().split("").sort().join("");
  return name;
};

