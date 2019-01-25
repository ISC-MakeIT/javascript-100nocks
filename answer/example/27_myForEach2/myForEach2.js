function sum(hash, result = 0) {
  for (var subject = 0; subject < hash.length; subject++) {
    result += Object.values(hash[subject])[0];
  }
  return result;
}
var subjects = [{'Japanese': 80}, {'Math': 90}, {'English': 100}];
console.log(sum(subjects));

// When writing like ES6
// const sum = (hash, result = 0) => {
//   for (let subject = 0; subject < hash.length; subject++) {
//     result += Object.values(hash[subject])[0];
//   }
//   return result;
// }
// var subjects = [{'Japanese': 80}, {'Math': 90}, {'English': 100}];
// console.log(sum(subjects));
