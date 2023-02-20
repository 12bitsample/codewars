

function maps(x){
    let firstArray = x;
    
    let secondArray = firstArray.map(function(e) {
      e.data = (e.data*e.data);
      return e;
    })
    console.log(secondArray);
  }