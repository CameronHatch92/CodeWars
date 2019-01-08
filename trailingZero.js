function zeros (n) {
  let count = 0;
  let i=1;
  while(n>=Math.pow(5, i)){
    count += Math.floor(n/Math.pow(5, i));
    i++;
  }
  return count;
}

console.log(zeros(658238736));
// console.log(zeros(200));
// console.log(zeros(300));
// console.log(zeros(400));