class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];
        for (let idx = 1; idx < intervals.length; idx++) {
            if (intervals[idx][0] <= res[res.length - 1][1]) {
                res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[idx][1]);
            } else {
                res.push(intervals[idx]);
            }
        }
        return res;
    }
}
