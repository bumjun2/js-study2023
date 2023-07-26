
let num = 1234567;

num = num.toString(); //숫자를 문자로 변환
console.log(`자리수 : ${num.length}`);


// let count = 0;

// while(true){
//     num = Math.floor(num/10);
//     count++;
//     let rest = num % 10;
//     if(rest === 0){
//         break;
//     }
// }


// 문자로 변환
let x = 30, y=40;

let result = String(x) + y.toString();
console.log(result);

// 숫자로 변환
let z = '100';
let rseult2 = +z + 200;
console.log(`result: ${rseult2}`);

// 논리로 변환
let money = 4000;
let hasMoney = !!money;

console.log(`돈이 있는가 ? ${hasMoney}`);