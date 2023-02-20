// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


function repeatStr (n, s) {
    let x = 0;
    let y = n;
    let string = s;
    let strings = '';
    
    while (x < y) {
      strings += string;
      x++;

    } 
    return strings;
}
  