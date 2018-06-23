'use strict';
const word = 'やくこみがんきいばていんるよは'
let out = '';
for (let i = 1; i <= word.length; i++) {
    if (0 === i % 3) {
        out += word[i - 1];
    }
}
console.log(out);