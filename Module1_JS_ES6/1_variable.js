// Khai báo biến trong JS
var x = 30; // Phạm vi toàn cục. Hạn chế: Không tường minh trong quá trình sử dụng
let y = 20; // Phạm vi sử dụng trong khối {}
let z = "Hello";
let k = false;
let m = 3.5;

// Cấu trúc điều kiện
// if(x>y){
//     console.log("x > y");
// }else if(x<y){
//     console.log("x < y");
// }else{
//     console.log("x = y");
// }

// Sử dụng toán tử 3 ngôi để kiểm tra biểu thức có 2 trường hợp xảy ra
// console.log(x > y ? "x > y" : "x < y");

// Cấu trúc lặp: for, while, do ... while
// for(let x = 0; x < 100; x++){
//     console.log(x + ", ");
// }

let i = 1;
do{
    console.log(i);
    i++;
}while(i<=10)

// Constant (Hằng)
const PI = 3.14;
const URL_BASE = "http://localhost:3000";

console.log(PI);
console.log(URL_BASE);

