// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    let initialValue = 0;
    let them = classPoints;
    let classmates = classPoints.length + 1;
    let me = yourPoints;
    
    let sum = them.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue
    ) / classmates;
    
    if (sum > me) {
      return false;
    } return true;
    
}
