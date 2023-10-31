/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const newArr = [];

    const countBits = str => {
        let count = 0;
        str.split('').forEach(x => {
            if(x == '1') {
                count++;
            }
        })
        return count;
    }
    let sortedArr = arr.sort((a, b) => {
        const aBit = countBits((a >>> 0).toString(2));
        const bBit = countBits((b >>> 0).toString(2))
        return aBit - bBit;
    })
    return sortedArr;
};

console.log(sortByBits([0,1,2,3,4,5,6,7,8]))