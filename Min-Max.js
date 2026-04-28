
function minMax(a, b) {
 if (a < b) {
    return { min: a, max: b };
  } else {
    return { min: b, max: a };
  }
}


const result = minMax(5, 10);
console.log(`Min: ${result.min}, Max: ${result.max}`); // Output: Min: 5, Max: 10