class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = []
        for(let interval of intervals) {
            if(interval[1] < newInterval[0]){
                res.push(interval)
            } else if (interval[0] > newInterval[1]) {
                res.push(newInterval)
                newInterval = interval
            } else {
                newInterval[0] = Math.min(newInterval[0], interval[0])
                newInterval[1] = Math.max(newInterval[1], interval[1])
            }
        }
        res.push(newInterval);
        return res
    }
}
