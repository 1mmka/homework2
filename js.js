/*  ЗАДАНИЕ 1   */



// 1
// let age = prompt("введите ваш возраст : ");
// if (age >= 0 && age < 2) {
//     alert("ребенок")
// }
// else if (age >= 12 && age < 18) {
//     alert("подросток")
// }
// else if (age >= 60){
//     alert("пенсионер")
// }


// 2
// let x = 0
// if (x >= 0 && x <= 9) {
//     switch(x) {
//         case 0: console.log(")"); break;
//         case 1: console.log("!"); break;
//         case 2: console.log("@"); break;
//         case 3: console.log("#"); break;
//         case 4: console.log("$"); break;
//         case 5: console.log("%"); break;
//         case 6: console.log("^"); break;
//         case 7: console.log("&"); break;
//         case 8: console.log("*"); break;
//         case 9: console.log("("); break;
//     }
// }
// else {
//     console.log("error")
// }


// 3
// let number = prompt("Введите трёхзначное число : ");
// let number1 = (number /100);
// let number2 = (number /10)%10;
// let number3 = (number %10);

// if (number1 === number2 && number2 === number3  number1 === number3) {
//     alert("ДА")
// }
// else {
//     alert("НЕТ")
// }

// 4
// let year = 2000
// if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//     console.log("да")
// }
// else {
//     console.log("нет")
// }





/*  ЗАДАНИЕ 2   */




// 1
// function just_func(num1,num2) {
//     if (num1 < num2) {
//         console.log(-1)
//     }
//     else if (num1 > num2) {
//         console.log(1)
//     }
//     else if (num1 === num2) {
//         console.log(0)
//     }
// }
// just_func(10,20)


// 2
// function fact_function(x_arg) {
//     return (x_arg != 1) ? x_arg * fact_function(x_arg - 1) : 1
// }
// console.log(fact_function(5))

//3
// function my_function(a,b,c) {
//     console.log(String(a) + String(b) + String(c))
// }
// my_function(1,4,9)

//4
// function fig(a,b) {
//     if (a === undefined || b === undefined) {
//         console.log(a * a)
//     }
//     else {
//         console.log(a * b)
//     }
// }
// fig(10,20)