/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const arr = [];
    let count = 0;
    nums.forEach(num => {
        if(!arr.includes(num)) {
            arr.push(num);
            nums[0] = num;
            count++;
        }
    })
    return count;
};

console.log(removeDuplicates([1,1,2]));