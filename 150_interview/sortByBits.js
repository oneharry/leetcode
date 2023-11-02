/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const newArr = arr.sort((a, b) => a-b);
    const countBits = str => {
        let count = 0;
        str.split('').forEach(x => {
            if(x == '1') {
                count++;
            }
        })
        return count;
    }
    let sortedArr = newArr.sort((a, b) => {
        const aBit = countBits((a >>> 0).toString(2));
        const bBit = countBits((b >>> 0).toString(2))
        return aBit - bBit;
    })
    return sortedArr;
};
const myArr = [1024,512,256,128,64,32,16,8,4,2,1];
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]))