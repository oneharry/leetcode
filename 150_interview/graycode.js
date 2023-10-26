/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const arr = [];
    const num = 2**n - 1;
    for(let i = 0; i <= num; i++) {
        arr.push(i)
    }

    return arr;
};

console.log(grayCode(2));