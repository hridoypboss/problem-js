//* (max number বের করার প্রথম উপায়)

var menester = 450;
var bisginsMan = 480;

if (menester > bisginsMan) {      // যদি মেনেস্টার বেশি হয়
    console.log("Menester has more money");
} else {                         // নাহলে বিসগিন্সম্যান বেশি
    console.log("BisginsMan has more money");
    // output: BisginsMan has more money

    //* (max number বের করার দ্বিতীয় উপায়)

    var menester = 520;
    var bisginsMan = 480;
    var sojibaje = 500;
    if (menester > bisginsMan && menester > sojibaje) {   // যদি মেনেস্টার বেশি হয়
        console.log("Menester has more money");
    } else if (bisginsMan > sojibaje) {                  // যদি বিসগিন্সম্যান বেশি হয়
        console.log("BisginsMan has more money");
    } else {                                            // নাহলে সজিবাজে বেশি
        console.log("Sojibaje has more money");
        // output: The maximum amount of money is: 520

        //* (max number বের করার তৃতীয় উপায়) */

        var menester = 520;
        var bisginsMan = 480;
        var sojibaje = 500;
        var max = Math.max(menester, bisginsMan, sojibaje)  // Math.max() ফাংশন ব্যবহার করে সর্বোচ্চ মান বের করা
        console.log("The maximum amount of money is: " + max);   // output: The maximum amount of money is: 520