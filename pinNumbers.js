function getPINs(observed) {
  const pinArr = observed.toString().split('');
  const pinAdj = {
    '1': ['1', '2', '4'],
    '2': ['1', '5', '3', '2'],
    '3': ['2', '6', '3'],
    '4': ['4', '5', '7', '1'],
    '5': ['2', '4', '6', '8', '5'],
    '6': ['3', '5', '9', '6'],
    '7': ['4', '8', '7'],
    '8': ['7', '5', '0', '9', '8'],
    '9': ['6', '8', '9'],
    '0': ['0', '8']
  };
  let startArr = pinAdj[pinArr[0]];
  function getCombos(arr1, arr2){
    let answer = [];
    for(let i=0; i<arr1.length; i++){
      for(let j=0; j<arr2.length; j++){
        answer.push(arr1[i]+arr2[j]);
      }
    }
    return answer;
  }

  for(let i=1; i<pinArr.length; i++){
    startArr = getCombos(startArr, pinAdj[pinArr[i]]);
  }
  return startArr;
}

console.log(getPINs('123'));