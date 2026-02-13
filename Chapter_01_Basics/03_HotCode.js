// Profiler - checks whether this code need to be 
// This is not Hot Code as there is no repelative code / optimization of code required
console.log("Hello");


// This is Hot Code as there is repelative code / optimization of code required
function add(a, b) {
    return a + b;
}

let result;
for (let i = 0; i < 1000; i++) {
    result = add(i, i + 1);
}

console.log("After 1000 iterations: " + result);
