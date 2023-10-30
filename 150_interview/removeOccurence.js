/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    nums
    for(let i = 0; i < nums.length; i++) {
        let el = nums[i];
        if(el === val) {
            nums.splice(i, 1);
        } else {
            count++;
        }
    }
    console.log(count);
    return count;
};

const nums = [0,1,2,2,3,0,4,2], val = 2;

console.log(removeElement(nums, val));