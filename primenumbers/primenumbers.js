
function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function getPrimes(limit) {
    if (limit === 1) {
        return true;
    }
    let sieve = [];
    for (let i = 2; i < Math.sqrt(limit); i++) {
        // construct sieve
    }
    return true;
}

console.log(getPrimes(10));