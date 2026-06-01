class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const l = nums.length;
        const prefix = new Array(l).fill(1);
        const suffix = new Array(l).fill(1);
        const res = new Array(l);

        for (let i = 1; i < l; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }
        for (let j = l - 2; j >= 0; j--) {
            suffix[j] = suffix[j + 1] * nums[j + 1];
        }
        for (let t = 0; t < l; t++) {
            res[t] = prefix[t] * suffix[t];
        }
        return res;
    }
}
