const kaidan = (n) => {
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  let result = kaidan(n - 3) + kaidan(n - 2) + kaidan(n - 1);
  return result;
}
const resultDisplay = (n) => {
  console.log(`${n} 段の階段を登る方法は ${kaidan(n)} 通りありました`);
}
resultDisplay(3);
resultDisplay(4);
resultDisplay(20);