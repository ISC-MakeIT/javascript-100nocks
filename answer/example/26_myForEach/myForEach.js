var animals = ["micropig", "lion", "dog"];
var barks = ["oinkoink!!", "growwwl!!", "bowbow!!"]
for(let animal=0; animal<animals.length; animal++){
  for(let bark=0; bark<barks.length; bark++){
    console.log(animals[animal],barks[bark]);
  }
}

animals.forEach(function(animal){
  barks.forEach(function(bark){
    console.log(animal, bark);
  });
});

// When writing like ES6
// const animals = ["micropig", "lion", "dog"];
// const barks = ["oinkoink!!", "growwwl!!", "bowbow!!"]
// animals.forEach((animal)=>{
//   barks.forEach((bark)=>{
//     console.log(animal,bark);
//   });
// });
