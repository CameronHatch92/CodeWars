function permutations(string) {
  let perms = {};
  function perm(str, newStr=''){
    if(str.length === 0){
      if(!perms[newStr]){
        perms[newStr] = 'a';
      }
      return;
    }
    let arr = str.split('');
    for(let i=0; i<str.length; i++){
      let newWord = arr.filter((letter, index) => index !== i).join('');
      perm(newWord, newStr+str[i]);
    }
  }
  perm(string);
  return Object.keys(perms);

}

console.log(permutations('car'));