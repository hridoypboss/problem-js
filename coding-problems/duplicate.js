//* duplicate সংখ্যা বাদ দিয়ে একটি array তৈরি করো।  */

var num = [5, 6, 9, 2, 4, 1, 3, 2, 5, 1, 3, 6, 5, 1];
var uniqueNum = [];                                   // এখানে অনন্য সংখ্যা গুলো রাখা হবে।

for (var i = 0; i < num.length; i++) {               // প্রতিটি সংখ্যার জন্য লুপ চালাও।
    var element = num[i];                           // বর্তমান সংখ্যাটি নাও।
    var index = uniqueNum.indexOf(element);         // চেক করো সংখ্যাটি uniqueNum এ আছে কিনা।
    if (index == -1) {                            // যদি না থাকে,
        uniqueNum.push(element);                 // তাহলে সেটি uniqueNum এ যোগ করো।
    }
}
console.log(uniqueNum);                        // output: [5, 6, 9, 2, 4, 1, 3]