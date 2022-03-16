//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {

    let reverse_string = [];

    for(let i = str.length; i >= 0; i--) {
        reverse_string.push(str[i]);
    }

    return reverse_string.join('');
}

console.log(reverseStringIterative('yoyo mastery'));


function reverseStringRecursive(str) {

    if (str === "") {
        return "";
      } 
      else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
      }
}

console.log(reverseStringRecursive('car'));




