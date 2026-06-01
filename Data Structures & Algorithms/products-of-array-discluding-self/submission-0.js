class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const preProduct = [1]
        const sufProduct = [1]
        const res = []
        for(let i = 0; i < nums.length; i++) {
            preProduct.push(nums[i] * preProduct[i])
        }

        for(let j = nums.length - 1; j >=0; j--) {
            sufProduct.unshift(nums[j] * sufProduct[0])
        }

        for(let t = 0; t < nums.length; t++) {
            res.push(preProduct[t] * sufProduct[t+1])
        }
        return res
    }
}
