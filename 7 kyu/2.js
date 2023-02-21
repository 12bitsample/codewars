// Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x){
    let i = 0;
    let b = x;
    let y = x.length;
    let z = 1;
    
   
  
    while (i<y) {
      z *= b[i];
      i++;
    }
    return z;
  }