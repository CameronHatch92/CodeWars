function anagrams(word, words) {
  let alphaWord = word.split('').sort().join('');
  let answer = [];
  for (let i=0; i<words.length; i++){
    if(words[i].split('').sort().join('') === alphaWord){
      answer.push(words[i]);
    }
  }
  return answer;
}

console.log(anagrams('basdf', []));