class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = new Set()
        for(let n of nums) {
            if(hash.has(n)) {
                return true
            } else {
                hash.add(n)
            }
        }
        return false
    }
}
