let digitExist = "";
let userAttempts = 0;
var secretDigit = "0000";

function setSecret(secret) {
  secretDigit = secret;
}

function getAttempts() {
  return userAttempts;
}

function match(digits) {
  ++userAttempts  
  if (secretDigit === (digits)) {
    return { result: "XXXX", attempts: userAttempts};
  } else {
    for (var i = 0; i < 4; i++) {
      var digit = digits.charAt(i); //Split each entry by digits.
      for (var j = 0; j < 4; j++) {
        var secretNum = secretDigit.charAt(j); //Split each digit of the number to guess.

        if (digit == secretNum && i == j) {
          digitExist += "X";
          j = 4;
        } else if (digit == secretNum) {
          digitExist += "-";
          j = 4;
        } else {
          digitExist += "";
        }
      }
    }
  }
  rta = digitExist;
  digitExist = "";
  return { result: rta, attempts: userAttempts };
}

function resetAttempts() {
  userAttempts = 0;
}

function getSecret() {
  return secretDigit;
}

function getRandom(random) {
  return (
    random ||
    (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)
  );
}

module.exports.getRandom = getRandom;
module.exports.getSecret = getSecret;
module.exports.resetAttempts = resetAttempts;
module.exports.getAttempts = getAttempts;
module.exports.match = match;
module.exports.setSecret = setSecret;