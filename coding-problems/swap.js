//TODO: Swap the values of two variables nomber 1 methods
var a = 5;
var b = 7;
var temp = a;       //* temp বিতর a এর মান সংরক্ষণ করো হয়েছে
a = b;             // a এর মান b এর মান দিয়ে প্রতিস্থাপন করো হয়েছে
b = temp;         // b এর মান temp এর মান দিয়ে প্রতিস্থাপন করো হয়েছে

console.log("After swap: a =", a, "b =", b);    // Output: After swap: a = 7 b = 

//TODO: nomber 2 methods
var x = 5;
var y = 7;
console.log("Before swap: x =", x, "y =", y);    // Output: Before swap: x = 5 y = 7
x = x + y;
y = x - y;
x = x - y;
console.log("After swap: x =", x, "y =", y);      // Output: After swap: x = 7 y = 5
//TODO: nomber 3 methods
var p = 5;
var q = 7;
[p, q] = [q, p];           //* P এবং Q এর মান একে অপরের সাথে বিনিময় করা হয়েছে
console.log(p, q);        // Output: 7 5