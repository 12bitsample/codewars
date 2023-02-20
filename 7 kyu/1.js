// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

    let x = name;
    
    let y = x.split(' ');
    let a = y[0];
    let b = y[1]; 
    let initials =a.charAt(0).toUpperCase() + '.' + b.charAt(0).toUpperCase();
    
    return initials;
  }