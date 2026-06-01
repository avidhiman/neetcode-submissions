class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0
        let right = numbers.length - 1
        while(left < right) {
            const need = target - numbers[left]
            if(need === numbers[right]) {
                return [left + 1, right + 1]
            } else if(need > numbers[right]) {
                left++
            } else {
                right--
            }
        }
        return -1
    }
}
