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
            nums[count] = num;
            count++;
        }
    })
    console.log(nums);
    return count;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));