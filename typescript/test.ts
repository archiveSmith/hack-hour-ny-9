/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

const array = [1, 2, 3];
//output = [3,2,1]

function reverseInPlace(array: number[]) {
  let lo = 0;
  let hi = array.length - 1;
  while (lo < hi) {
    let tempLo = array[lo];
    let tempHi = array[hi];
    array[lo] = tempHi;
    array[hi] = tempLo;
    lo += 1;
    hi -= 1;
  }
}
