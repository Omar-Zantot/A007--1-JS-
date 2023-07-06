/*
? { 1- Write a program that allow to user enter number then printit ?}
Example
Input: 5
Output: 5
*/
// & Answer

// var num = Number(prompt("Enter a number:"));
// console.log(num);

/*
? 2- Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no
Example1
Input: 12 Output Yes 
Example 2
Input: 9 Output No

*/

// & Answer

// var num = Number(prompt("Enter a number:"));
// if(num%3==0 && num%4==0){
//     console.log("Yes");
// }else{
//     console.log("No");
// }

/*

? 3- Write a program that allows the user to insert 2 integers then print the max
Example1
Input: 3 5
Output: 5
Example 2
Input: 10 7
Output: 10


*/

// & Answer

// var n1 = 1*prompt("Enter N1:");
// var n2 = 1*prompt("Enter N2:");
// if(n1>n2){
//     console.log(n1);
// }else{
//     console.log(n2);
// }

/*

? 4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.
Example 1
Input: -5
Output negative 
Example2
Input: 10 
Output positive


*/
// & Answer

// var i = 1*prompt("Enter integer:");
// if(i<0){
//     console.log("negative");
// }else{
//     console.log("positive");
// }

/*
? 5- Write a program that take 3 integers from user then print the max element 
and the min element.
Example 1
 Input:7,8,5
Output:
max element = 8 
min element = 5 
Example2
Input: 3 6 9 
Outputs:
Max element = 9 
Min element = 3

*/

// & answer

// var n1 = 1*prompt("Enter N1:");
// var n2 = Number(prompt("Enter N2:"));
// var n3 = 1*prompt("Enter N3:");
// var min=0;
// var max =0;

// if(n1>n2 && n1>n3){
//     max=n1;
//     if(n2>n3){
//         min=n3;
//     }else{
//         min=n2;
//     }

// }else if(n2>n1 && n2>n3){
//     max=n2;
//     if(n1>n3){
//         min=n3;
//     }else{
//         min=n1;
//     }
// }else{
//     max=n3;
//     if(n1>n2){
//         min=n2;
//     }else{
//         min=n1;
//     }
// }
// console.log(`Max element = ${max}`);
// console.log(`Min element = ${min}`);

/*
? 6- Write a program that allows the user to insert integer number then 
check If a number is oven or odd
Example 1
Input: 8 
Output: even
Example 2
Input: 7
Output: odd

*/

// & answer

// var num = Number(prompt("Enter a number:"));
// if(num%2==0){
//     console.log("even");8
// }else{
//     console.log("odd");
// }
/*

? 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant
Example1
Input: O
Output: vowel 
Example 2
Input: b
Output:
Consonant

*/

// & answer

// var ch = prompt("Enter a character");
// if(ch=='a'|| ch=='A'||ch=='e'|| ch=='E'||ch=='i'|| ch=='I'||ch=='o'|| ch=='O'||ch=='u'|| ch=='U'){
//     console.log("vowel");
// }else{
//     console.log("Consonant");
// }

// ^ answer++

// var vowels="aeiouAeIOU";
// var ch = prompt("Enter ch");
// var b = true;
// for(var i =0 ; i<vowels.length ; i++){
//     if(vowels[i]===ch){
//          b = false;
//         console.log("vowel");
//     }
// }
// if(b){
//     console.log("consonant");
// }

/*
? 9- Write a program that allows user to insert integerthen print all numbers between 1 to
that's number
Example Input 5
Output 1, 2, 3, 4, 5


*/
// & answer

// var n = 1*prompt("Enter n");
// for(var i =1;i<=n;i++){
//     console.log(i)
// }

/*
? 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
Example 
Input: 5 
Outputs:
5 10 15 20 25 30 35 40 45 50 55 60
*/

// & answer

// var n = 1*prompt("Enter n");
// for(var i =1;i<=12;i++){
//     console.log(n*i)
// }

/*
11- Write a program that allows to user to insert number then print all even numbers 
between 1 to this number
Example:
Input: 15
Output: 2 4 6 8 10 12 14
*/

// &Answer

// var n = 1*prompt("Enter n");
// for(var i =2;i<=n;i+=2){
//     console.log(i)
// }

// ^ anthor Answer
// var n = 1 * prompt("Enter n");
// for (var i = 2; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

/*
? 12- Write a program that take two integers then print the power
Example:
Input: 4 3
Output: 64
Hint how to calculate 4^3 = 4 * 4 * 4 =64

*/

// &Answer

// var n = 1 * prompt("Enter n");
// var p = 1 * prompt("Enter p");
// var output = 1;

// for(var i=1; i<=p;i++){
//   output *= n;
// }
// console.log(output);

/*
? 12- Write a program to enter marks of five subjects and calculate total, average and 
percentage.
 Example
Input: - Enter Marks of five subjects:
95
76
58
90
89
Output:-.Total marks = 435
Average Marks =87
Percentage =87

*/
// &Answer

// var sum = 0;

// for(var i=1; i<=5;i++){
//   sum += Number(prompt("Enter marks"));
// }
// var Avg = sum / 5  ;
// console.log(`Total marks = ${sum}\nAverage Marks = ${Avg}\nPercentage = ${Avg}`);

/*
? 13-Write a program to input month number and print number of days in that 
month.
Example:
Input: - Month Number: 1
 Output:-. Days in Month: 31
*/

// &Answer

// ^ hints
// There are 7 months that have 31 days and they can be listed as January, March, May, July, August, October, and December.
// 1,3,5,7,8,10,12
// There are 4 months that have 30 days and they can be listed as April, June, September, and November.
// 4,6,9,11
// feb 28 days or 29

// var monthNumber = 1 * prompt("Enter a month number:");
// if (
//   monthNumber == 4 ||
//   monthNumber == 6 ||
//   monthNumber == 9 ||
//   monthNumber == 11
// ) {
//   console.log("Days in Month: 30");
// } else if (monthNumber == 2) {
//   console.log("Days in Month: 28 or 29");
// }else{
//   console.log("Days in Month: 31");

// }

/*

? 14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade 
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F
*/

// &Answer

// var sum = 0;

// for (var i = 1; i <= 5; i++) {
//   sum += Number(prompt("Enter marks"));
// }
// var Avg = sum / 5;

// if (Avg >= 90) {
//   console.log(`Percentage >= 90%  and = ${Avg}% : Grad A`);
// } else if (Avg >= 80) {
//   console.log(`Percentage >= 80%: and = ${Avg}% :Grad B`);
// } else if (Avg >= 70) {
//   console.log(`Percentage >= 70%: and = ${Avg}% :Grad C`);
// } else if (Avg >= 60) {
//   console.log(`Percentage >= 60%: and = ${Avg}% :Grad D`);
// } else if (Avg >= 40) {
//   console.log(`Percentage >= 40%: and = ${Avg}% :Grad E`);
// } else {
//   console.log(`Percentage <  40%: and = ${Avg}% :Grad F`);
// }

// ? 15- Write a program to print total number of days in month

// ^ hints
// There are 7 months that have 31 days and they can be listed as January, March, May, July, August, October, and December.
// 1,3,5,7,8,10,12
// There are 4 months that have 30 days and they can be listed as April, June, September, and November.
// 4,6,9,11
// feb 28 days or 29

// & Answer

// var n = 1 * prompt("Enter number of month: ");

// switch (n) {
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 days");
//     break;
//   case 2:
//     console.log("28 or 29 days");
//     break;
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 days");
//     break;
//   default:
//     console.log("Enter number between 1 : 12 !");
// }

//?16- Write a program to check whether an alphabet is vowel or consonant

// & Answer

// var ch = prompt("Enter alphabet");
// switch (ch) {
//   case "a":
//   case"i":
//   case"o":
//   case"u":
//   case"e":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }

//?17- Write a program to find maximum between two numbers

// var num1=1*prompt("Number 1");
// var num2=1*prompt("Number 2");
// var b = num1>num2;
// switch (b) {
//   case true:
//     console.log(`${num1}>${num2} --> max is ${num1}`);
//     break;
//   default:
//     console.log(`${num1}<${num2}--> max is ${num2}`);
// }

//?18- Write a program to check whether a number is even or odd

// var n = 1*prompt("Enter Number");
// b = (n%2==0);
// switch (b) {
//   case true:
//     console.log(`${n} is even`);
//     break;
//   default:
//     console.log(`${n} is odd`);
// }

//?19- Write a program to check whether a number is positive or negative or zero

// var n = 1 * prompt("Enter Number");
// b = n >= 0;
// switch (b) {
//   case true:
//     if (n == 0) {
//       console.log(`${n} : zero`);
//     } else {
//       console.log(`${n} : positive`);
//     }
//     break;
//   default:
//     console.log(`${n} : negative`);
// }

//?20- Write a program to create Simple Calculator

// n1 = 1 * prompt("Enter Number 1");
// n2 = 1 * prompt("Enter Number 2");
// op = prompt("Enter operator {+,-,*,/}");
// switch (op) {
//   case "+":
//     console.log(`${n1}+${n2} = ${n1 + n2}`);
//     break;
//   case "-":
//     console.log(`${n1}-${n2} = ${n1 - n2}`);

//     break;
//   case "*":
//     console.log(`${n1}*${n2} = ${n1 * n2}`);

//     break;
//   case "/":
//     console.log(`${n1}/${n2} = ${n1 / n2}`);
//     break;
//   default:
//     console.log("Enter a valid operation");
// }
