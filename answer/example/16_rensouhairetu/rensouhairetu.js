'use strict';
var a = {
    'color': 'red',
    'size': '100'
};
a.count = '5';
var keys = Object.keys(a);
var values = Object.values(a);
for (var i = 0; i < keys.length; i++) {
    console.log("keyは: ", keys[i], "valueは: ", values[i]);
}