factors = {};

const limit = 200000;
let sieve = [0, 0, 1];
const chain = 4;

for (let i = 2; i < limit; i++) {
    if (!factors[i]) { factors[i] = {}; factors[i][i] = 1;};
    if (Object.keys(factors[i]).length == chain) {
        if (compareFactors(i, chain)) {
            console.log(i - chain + 1);
            return;
        }
    }
    for (let j = 2; j <= i && (i*j)<limit; j++) {
        if (factors[i * j]) { continue }
        factors[i * j] = {}
        for (let key in factors[i]) {
            if (factors[i].hasOwnProperty(key)) {
                factors[i * j][key] = factors[i][key];
            }
        }
        for (let key in factors[j]) {
            if (factors[j].hasOwnProperty(key)) {
                if (factors[i * j][key]) { factors[i * j][key] += factors[j][key]}
                else { factors[i * j][key] = factors[j][key];}
            }
        }
    }
}

function compareFactors(start, len) {
    if (len == 1) { return true}

    for(let i = start-1; i > start-len; i--) {
        if (Object.keys(factors[i]).length != chain) {
            return false;
        }
        for (let key in factors[start]) {
            if (factors[start].hasOwnProperty(key)) {
                if (factors[start][key] == factors[i][key]) {return false}
            }
        }
    }

    return compareFactors(start-1, len-1);
}