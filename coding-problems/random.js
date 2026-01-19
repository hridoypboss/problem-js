//* Math.floor -একটি দশমিক সংখ্যাকে নীচের পূর্ণসংখ্যায় রূপান্তর করে।

var num = 20.20;
var rasal = Math.floor(num);     // এখানে num এর মান 20.20, Math.floor ফাংশনটি এটি নীচের পূর্ণসংখ্যা 20 এ রূপান্তর করবে।
console.log(rasal);             //output: 20

//* Math.ceil -একটি দশমিক সংখ্যাকে উপরের পূর্ণসংখ্যায় রূপান্তর করে।
var num = 20.20;
var resa1 = Math.ceil(num);  // এখানে num এর মান 20.20, Math.ceil ফাংশনটি এটি উপরের পূর্ণসংখ্যা 21 এ রূপান্তর করবে।
console.log(resa1);          //output: 21
//* Math.round -একটি দশমিক সংখ্যাকে নিকটস্থ পূর্ণসংখ্যায় রূপান্তর করে।
var num = 20.50;
var rasa2 = Math.round(num);  // এখানে num এর মান 20.50, Math.round ফাংশনটি এটি নিকটস্থ পূর্ণসংখ্যা 21 এ রূপান্তর করবে।
console.log(rasa2);          //output: 21

//* Math.random -0 এবং 1 এর মধ্যে একটি র্যান্ডম দশমিক সংখ্যা তৈরি করে।

var randomenum = Math.random() * 100       // 0 থেকে 100 এর মধ্যে একটি র্যান্ডম দশমিক সংখ্যা তৈরি করবে;
randomenum = Math.floor(randomenum);       // দশমিক সংখ্যাটিকে নীচের পূর্ণসংখ্যায় রূপান্তর করবে
console.log(randomenum);     //output: র্যান্ডম পূর্ণসংখ্যা 0 থেকে 99 এর মধ্যে

//* উদাহরণ: Math.random() ব্যবহার করে ১০টি র্যান্ডম পূর্ণসংখ্যা তৈরি করা

var randomenum1 = Math.random() * 100;    // 0 থেকে 100 এর মধ্যে একটি র্যান্ডম দশমিক সংখ্যা তৈরি করবে;
randomenum1 = Math.floor(randomenum1);   // দশমিক সংখ্যাটিকে নীচের পূর্ণসংখ্যায় রূপান্তর করবে
console.log(randomenum1);     //output: র্যান্ডম পূর্ণসংখ্যা 0 থেকে 99 এর মধ্যে

//* console.log("10 টি র্যান্ডম পূর্ণসংখ্যা 0 থেকে 9 এর মধ্যে:");
//* var output;

for (var i = 0; i < 10; i++) {            // 10 টি র্যান্ডম পূর্ণসংখ্যা তৈরি করার জন্য লুপ
    var randomenum2 = Math.random() * 10;   // 0 থেকে 10 এর মধ্যে একটি র্যান্ডম দশমিক সংখ্যা তৈরি করবে;
    output = Math.round(randomenum2);     // দশমিক সংখ্যাটিকে নিকটস্থ পূর্ণসংখ্যায় রূপান্তর করবে
    console.log(output);   //output: র্যান্ডম পূর্ণসংখ্যা 0 থেকে 9 এর মধ্যে
}