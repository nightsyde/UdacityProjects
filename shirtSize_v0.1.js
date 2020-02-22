/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// Write your if/else code here
var widthSize = "";
var lengthSize = "";
var sleeveSize = "";

if (shirtWidth >= 18 && shirtWidth < 20) {
  widthSize = "S";
} else if (shirtWidth >= 20 && shirtWidth < 22) {
  widthSize = "M";
} else if (shirtWidth >= 22 && shirtWidth < 24) {
  widthSize = "L";
} else if (shirtWidth >= 24 && shirtWidth < 26) {
  widthSize = "XL";
} else if (shirtWidth >= 26 && shirtWidth < 28) {
  widthSize = "2XL";
} else if (shirtWidth >= 28 && shirtWidth < 30) {
  widthSize = "3XL";
} else {
  widthSize = "N/A";
}

if (shirtLength >= 28 && shirtLength < 29) {
  lengthSize = "S";
} else if (shirtLength >= 29 && shirtLength < 30) {
  lengthSize = "M";
} else if (shirtLength >= 30 && shirtLength < 31) {
  lengthSize = "L";
} else if (shirtLength >= 31 && shirtLength < 33) {
  lengthSize = "XL";
} else if (shirtLength >= 33 && shirtLength < 34) {
  lengthSize = "2XL";
} else if (shirtLength >= 34 && shirtLength < 36) {
  lengthSize = "3XL";
} else {
  lengthSize = "N/A";
}

if (shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
  sleeveSize = "S";
} else if (shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
  sleeveSize = "M";
} else if (shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
  sleeveSize = "L";
} else if (shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
  sleeveSize = "XL";
} else if (shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
  sleeveSize = "2XL";
} else if (shirtSleeve >= 10.13 && shirtSleeve < 10.50) {
  sleeveSize = "3XL";
} else {
  sleeveSize = "N/A";
}

if (widthSize == lengthSize && lengthSize == sleeveSize && sleeveSize == widthSize) {
  console.log(widthSize);
} else {
  console.log("N/A");
}
