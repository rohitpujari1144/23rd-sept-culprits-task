// 1. Find the culprit

// Answer:
// alert("I’m JavaScript!");

// ---------------------------------------------------------------------

// 2. Find the culprit and invoke the alert

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// scripts.js
// alert(“I’m invoked!”);

// Answer: src attribute in script tag should be like src=”script.js”

// ---------------------------------------------------------------------

// 3. Explain the below how it works

// script.js
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working

// Answer: output flow: I'm JavaScript! => Hello => World => 6

// ---------------------------------------------------------------------

// 4. Fix the below to alert Guvi geek

// script.js
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

// Answer:  
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+" "+lname;
// alert( admin ); // "Guvi geek"

// ---------------------------------------------------------------------

// 5. Fix the below to alert hello Guvi geek

// script.js
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

// Answer:
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+" "+lname;
// alert( `hello ${name}` );

// ---------------------------------------------------------------------

// 6. Fix the below to alert sum of two numbers

// script.js
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b); 

// Answer: 
// let a = parseInt(prompt("First number?"));
// let b = parseInt(prompt("Second number?"));
// alert(a + b);

// ---------------------------------------------------------------------

// 7. Fix the below to alert sum of two numbers

// script.js
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

// Answer:
// let a = parseInt(prompt("First number?"));
// let b = parseInt(prompt("Second number?"));
// alert(a + b);

// ---------------------------------------------------------------------

// 8. If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else{
//   console.log("Diffused") 
// }

// Answer:
// var a = "2" < "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else{
//   console.log("Diffused") 
// }

// ---------------------------------------------------------------------

// 9. How to get the success in console.

// let a = prompt("Enter a number?");
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// Answer:
// let a = false;
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else{
//  console.log( "Success" );
// }

// ---------------------------------------------------------------------

// 10. How to get the correct score in console.

// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// Answer:
// let value = parseInt(prompt('How many runs you scored in this ball'));
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// ---------------------------------------------------------------------

// 11. Fix the code to welcome the Employee

// let login = 'Employee';
// let message = (login == 'Employee') ? : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
// console.log(message);

// Answer:   
// let login = 'Employee';
// var message = (login === 'Employee') ? (login === 'Director') ? 'Greetings' : (login === 'Employee') ? 'Welcome' : 'No login' : 'No login'
// console.log(message);

// ---------------------------------------------------------------------

// 12. Fix the code to welcome the boss

// You cant change the value of the msg
// let message;
// if (null || 2 || undefined) {
//     let message = "welcome boss";
// }
// else {
//     let message = "Go away";
// }
// console.log(message);

// Answer:
// let message;
// if (message === undefined) {
//     message = "welcome boss";
// }
// else {
//     message = "Go away";
// }
// console.log(message);

// ---------------------------------------------------------------------

// 13. Fix the code to welcome the boss

// let message;
// let lock = 2;
// //Dont change any code below this 
// if (null || lock || undefined) {
//     message = "Go away";
// }
// else {
//     message = "welcome";
// }
// console.log(message);

// Answer:
// let message;
// let lock;
// //Dont change any code below this 
// if (null || lock || undefined) {
//     message = "Go away";
// }
// else {
//     message = "welcome";
// }
// console.log(message);

// ---------------------------------------------------------------------

// 14. Fix the code to welcome the boss

// let message;
// let lock = 2;
// //Dont change any code below this
// if (lock && " " || undefined) {
//     message = "Go away";
// }
// else {
//     message = "welcome";
// }
// console.log(message);

// Answer:
// let message;
// let lock;
// //Dont change any code below this
// if (lock && " " || undefined) {
//     message = "Go away";
// }
// else {
//     message = "welcome";
// }
// console.log(message);

// ---------------------------------------------------------------------

// 15. Change the code to print
// 3

// 2

// 1

//You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( --i );
// }

// Answer:
// let i = 3;
// while (i) {
//     console.log(i--);
// }

// ---------------------------------------------------------------------

// 16. Change the code to print 1 to 10 in 4 lines

// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

// Answer:
// let num = 1
// console.log(num, num + 1, num + 2)
// console.log(num + 3, num + 4, num + 5, num + 6)
// console.log(num + 7, num + 8)
// console.log(num + 9);

// ---------------------------------------------------------------------

// 17. Change the code to print even numbers

//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//     console.log(num)
// }.

// Answer:
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
// }

// ---------------------------------------------------------------------

// 18. Change the code to print all the gifts

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
// }

// Answer:
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }

// ---------------------------------------------------------------------

// 18. Fix the code to disarm the bomb.

// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }

// Answer:
// let countdown = 100;
// while (countdown > 1) {
//     countdown--;
//     if (countdown == 0) {
//         console.log("bomb triggered");
//     }
//     else {
//         console.log("bomb disarmed");

//     }
// }

// ---------------------------------------------------------------------

// 19. Whats the msg printed and why?

// var lemein = "0";
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += 'Hello';
// }
// console.log(msg);

// Answer: hii will get printed because lemein variable has value "0" so first if condition gets true and we'll get output as hi

// ---------------------------------------------------------------------

// 20. Whats the msg printed and why? Guess you answer before running it.

// var lemein = "0";
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += "Hello";
// }
// console.log(msg);

// Answer: hii will get printed because lemein variable has value "0" so first if condition gets true and we'll get output as hi
