// Given an array of integers, return a new array with each value doubled.

function maps(x){
    let m = x;
    let i = 0;
    let n = x.length;
    let o = [];

    // console.log(m);
    
    while (i < n) {
      let sq = m[i]*2;
      o.push(sq);
      i++;
    }return  o;
}