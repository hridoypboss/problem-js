//* (array এর মধ্যে সর্বোচ্চ সংখ্যা বের করা)

var mark = [45, 78, 89, 90, 23, 67, 56, 88, 99, 100, 34];
var max = mark[0];                        // প্রথম উপাদানকে সর্বোচ্চ ধরে নেওয়া
for (var i = 0; i < mark.length; i++) {  // প্রতিটি উপাদান পরীক্ষা করা
    var element = mark[i];              // বর্তমান উপাদান
    if (element > max) {               // যদি বর্তমান উপাদান সর্বোচ্চ হয়
        max = element;                // সর্বোচ্চ মান আপডেট করা
    }
}
console.log("The maximum number is: " + max);  // output: The maximum number is: 100