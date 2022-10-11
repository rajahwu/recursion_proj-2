/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  // debugger
  // let letters = str.split('')
  // if(letters.length === 0) return reverse(word);
  // debugger

  // let first = letters.pop()

  // letters.unshift(first)
  // let word = letters.join('')
  //  debugger
  // return reverse(word)
  if(str.length === 0) return str

  return reverse(str.slice(1)) + str[0]
}
console.log(reverse("house")); // "esuoh"

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
