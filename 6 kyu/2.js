// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  let final = [];
  let numLocate = words.match(/1-9/g);
  let wordArray = words.split('');

  if (words.length === 0) return words;

  wordArray.map((item, i) => {
    let index = numLocate.indexOf(i+1);
    final.push(wordArray[index]);
  })
  return final.join(' ');
  
}