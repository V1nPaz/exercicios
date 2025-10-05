let t0 = Date.now();
console.log(t0);

for (let i = 0; i < 1000000; i++){
    console.log(i);
}
console.log((Date.now() - t0)/1000);