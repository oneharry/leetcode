/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let count = 0;
    nums.forEach(el => {
        if(el !== val) {
            nums[count] = el
            count++;
        } 
    })
    return count;
};

const nums = [3,2,2,3]
const val = 3;
console.log(removeElement(nums, val));