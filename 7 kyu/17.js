// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  let x = s.length;
  let p1 = s.charAt(x/2 - 1);
  let p2 = s.charAt(x/2);
  
  if (x%2 === 0) {
   return p1.concat(p2);
  }return p2;
}