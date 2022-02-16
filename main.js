
// Function that takes 1 argument (n) and returns the sum of the total from n until 1

function add(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(add(5));