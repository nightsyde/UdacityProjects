/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
var output = "";
while (x <= 20) {
    // check divisibility
    if (x % 3 === 0 && x % 5 !== 0) {
      output = "Julia";
    } else if (x % 3 !== 0 && x % 5 === 0) {
      output = "James";
    } else if (x % 3 === 0 && x % 5 === 0) {
      output = "JuliaJames";
    } else {
      output = x;
    }
    console.log(output);
    x = x + 1;
    // print Julia, James, or JuliaJames
    // increment x
}
