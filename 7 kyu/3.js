// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    let len = l;
    let wid = w;
    
    if (len == wid) {
      return l * w;
    } else return (len * 2) + (wid * 2)
  };