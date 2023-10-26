/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //     if(m === 0 && n > 0) {
    //     nums1[0] = nums2[0];
    //     return nums1;
    // }
    
    const num = nums1.length - n;

    for(let i = 0; i < nums1.length; i++) {
        if(nums1[i] === 0) {
            nums1[i] = nums2.shift();
           
        }
    }
    nums1.sort();
    return nums1;
};

console.log(merge([0,0,0,0,0] ,0 ,[1, 2, 3, 5, 6] ,5));