'use strict';
<<<<<<< HEAD
let res = randomization(10, 10);
console.log(res);
console.log('length ' + res.length);

/**
 * 
 * @param {number} has_order 
 * @param {number} max 
 * @returns {array} this one has has_order in 1 ~ max
 */
function randomization(has_order, max) {
    // if (!has_order <= max) {
    //     return 0;
    // }
    let data = [];
    let num = 0;
    while (data.length < has_order) {
        num = ~~(Math.random() * max);
        if (!isExistArray(data, num)) {
            data.push(num);
        }
    }
    return data;
=======
randomization(25, 75);

/*
 * @param {number} has_order
 * @param {number} max
 */
function randomization(has_order, max) {
    let data = [];
    while (data.length < has_order) {
        let n = ~~(Math.random() * (max + 1));
        if (!(0 === n)) {
            if (!isExistArray(n, data)) {
                data.push(n);
            }
        }
    }
    console.log(data);
>>>>>>> master
}

/**
 * 
<<<<<<< HEAD
 * @param {Array} ar 
 * @param {number} x 
 * @returns {boolean} existed => true
 */
function isExistArray(ar, x) {
    if (x === 0) {
        return 'ture';
    }
=======
 * @param {number} x 
 * @param {Array} ar 
 */
function isExistArray(x, ar) {
>>>>>>> master
    let res = ar.some(function (v) {
        return v === x;
    });
    return res;
<<<<<<< HEAD
}


// function randomization_old(len, max) {
//     if (len <= max) {
//         let d = [];
//         let num = 0;
//         let res = 'false';
//         while (d.length < len) {
//             num = Math.floor(Math.random() * max);
//             res = isExistArray(d, num);
//             if (!res) {
//                 d.push(num);
//             }
//         }
//         // let e = d.sort(function (a, b) {
//         //     return (a < b ? -1 : 1);
//         // });
//         return d;
//     }
// }
=======
}
>>>>>>> master
