function narcissistic(value) {
  const arr = value.toString().split('');
  const numArr = arr.map(num => parseInt(num));
  let test = 0;
  let numLength = numArr.length;
  for (let i=0; i< numLength; i++) {
    test += Math.pow(numArr[i], numLength);
  }
  if(test === value){
    return true;
  }
  return false;
}

console.log(narcissistic(371));