function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// kt số đối xứng
function symmetry(num) {
  var str = num.toString();
  return str === str.split("").reverse().join("");
}

//kiểm tra số nguyên tố đối xứng
function checkNumber(n) {
  let number = n + 1;
  while (true) {
    if (isPrime(number) && symmetry(number)) {
      return number;
    }
    number++;
  }
}

let n = 13;
let result = checkNumber(n);
document.write(`Input: ${n} <br> Output: ${result}`);
