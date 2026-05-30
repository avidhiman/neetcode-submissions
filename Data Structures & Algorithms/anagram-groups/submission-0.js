class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // if(strs.length <= 1) return strs
        const map = {}
        for(let s of strs) {
            const key = s.split('').sort().join('')
            if(!map[key]) {
                map[key] = []
            }
            map[key].push(s)
        }
        return Object.values(map)
    }
}
