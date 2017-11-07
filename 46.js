// generate primes
const primes = [2];
const limit = 10000;

// adjusted erathosten sieve

let sieve = [0,0,1];

for (let i = 2; i < limit; i++) {
    if (sieve[i] != 0 && sieve[i] != 2) {
        sieve[i] = 1;
        for (let j = i; j < (limit / i); j++) {
            const n = i * j;
            if (n % 2 == 1) {
                sieve[i * j] = 2;    
            } else { sieve[i * j] = 0;}
        }
    }
}

// generate goldbach number and remove it from array
sieve.forEach(function (v, i) {
    if (v == 1) {
        for (let j = 1; j <= Math.sqrt(limit); j++) {
            const goldbach = i + 2 * (Math.pow(j,2));
            if (sieve[goldbach] == 2) {
                sieve[goldbach] = 0;
            }
        }
    }
})

sieve.forEach(function (v, i) {
    if (v == 2) {console.log(i)}
});