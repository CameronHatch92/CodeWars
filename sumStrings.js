function sumStrings(a,b) { 
  const length1 = a.length;
  const length2 = b.length;
  let num1 = a;
  let num2 = b;
  if(length1>length2){
    num2 = num2.padStart(length1, 0);
  } else {
    num1 = num1.padStart(length2, 0);
  }
  let answer = '';
  let addition = 0;
  for(let i=num1.length-1; i>=0; i--){
    let sum = parseInt(num1[i])+parseInt(num2[i]) + addition;
    let remainder = sum%10;
    answer += remainder.toString();
    addition = Math.floor(sum/10);
  }
  answer += addition;
  answer = answer.split('').reverse().join('');
  while(answer[0]==='0'){
    answer = answer.slice(1);
  }
  return answer;

}

console.log(sumStrings('800', '9567'));