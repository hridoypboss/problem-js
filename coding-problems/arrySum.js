//* array এর সব উপাদানের যোগফল নির্ণয় করা
var numbre = [30, 50, 60, 40, 80, 10, 20];
var sum = 0;
for (var i = 0; i < numbre.length; i++) {
    var eliminar = numbre[i];
    sum = sum + eliminar;                   // Adding each element to the sum
}
console.log("La suma de los elementos del array es: " + sum);   // Output: 290

//* Function দিয়ে array এর সব উপাদানের যোগফল নির্ণয় করা

function arraySum(numbre) {     // Function এর নাম arraySum এবং parameter numbre
    var sum = 0;
    for (var i = 0; i < numbre.length; i++) {
        var eliminar = numbre[i];
        sum = sum + eliminar;   // প্রতিটি উপাদানকে sum এ যোগ করা
    }
    return sum;       // Function থেকে sum রিটার্ন করা
}
var numbre = [30, 50, 60, 40, 80, 10, 20];
var result = arraySum(numbre);           // Function কল করে রেজাল্ট পাওয়া
console.log("La suma de los elementos del array es: " + result);  // Output: 290

//* আরও একটি উদাহরণ Function দিয়ে array এর সব উপাদানের যোগফল নির্ণয় করা 

function arraySum(numbre) {
    var sum = 0;
    for (var i = 0; i < numbre.length; i++) {
        var eliminar = numbre[i];
        sum = sum + eliminar;
    }
    return sum;
}
var numbre = [30, 50, 60, 100, 80, 10, 20];
var result = arraySum(numbre);  // Function কল করে রেজাল্ট পাওয়া
console.log("total of numbre: ", result);   // Output: 350
var total = arraySum([30, 50, 60, 40, 80, 300, 20]);  // সরাসরি array পাস করে রেজাল্ট পাওয়া
console.log("La suma de los elementos del array es: " + total);  // Output: 580