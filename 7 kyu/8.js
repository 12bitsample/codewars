// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    let x = str;
     x = x.slice(0, x.length-1);
     x = x.slice(1);
     return x;
   };