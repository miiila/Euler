function quadr(a, b, c) {
    const D = b*b - (4*a*c);
    if (D < 0) {return null}
    if (D == 0) { return -b/(2*a)}
    return ((-b + Math.sqrt(D)) / (2 * a));
}

function getPent(n) {
    return (n*(3*n-1))/2
}

console.time('pent')
pents = [null, 1, 5, 12, 22, 35, 51, 70, 92, 117, 145];

let i = 10;
while (true) {
    if (!pents[i]) {
        pents[i] = getPent(i);
    }

    for (let j=i-1; j > 0; j--) {
        // sum
        const s = pents[i] + pents[j];
        const r = quadr(3, -1, -s*2);
        if (r%1!=0) {
            continue;
        }
        // save new one
        pents[r] = s; 
        //diff
        const d = pents[i] - pents[j];
        if (quadr(3, -1, -d * 2)%1 == 0) {
            console.log(d);
            console.timeEnd('pent')
            return;
        }
    }
    i++;
}