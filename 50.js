const primes = []
const res = []
const limit = 1000000

let max = 0
let num = 0

let sieve = [0, 0, 1];
for (let i = 2; i < limit; i++) {
    if (sieve[i] != 0) {
        primes.push(i)
        sieve[i] = 1;
        for (let j = i; j < (limit / i); j++) {
            sieve[i * j] = 0;
        }
    }
}

primes.forEach((val, index) => {
    let sum = val;
    for(let j = index+1; j < primes.length; j++) {
        sum += primes[j];
        if (sum > limit) {break}
        if (sieve[sum] == 1) {
            const newMax = j - index + 1;
            if ((newMax) > max) {
                max = newMax;
                num = sum; 
            }
        }
    }
})

console.log(max, num)