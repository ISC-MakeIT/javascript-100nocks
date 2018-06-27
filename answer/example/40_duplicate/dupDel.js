/**
 * 
 * @param {number} len 
 * @param {number} max 
 * @returns {array} in 1~max 
 */
function randomization(len, max) {
    if (len <= max) {
        let d = [];
        let num = 0;
        let res = 0;
        while (d.length < len) {
            num = Math.floor(Math.random() * max);
            res = isExistArray(d, num);
            if (!res) {
                d.push(num);
            }
        }
        let e = d.sort(function (a, b) {
            return (a < b ? -1 : 1);
        });
        return d;
    }


    /**
     * 
     * @param {Array} ar 
     * @param {number} x 
     * @returns {number} res
     */
    function isExistArray(ar, x) {
        let res = ar.some(function (v) {
            return v === x;
        });
        return res;
    }