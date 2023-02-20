// Very simple, given an integer or a floating-point number, find its opposite.

 function opposite(number) {
  let x = number;
   let y = x+x;
   x -=  y;
   return x;
}