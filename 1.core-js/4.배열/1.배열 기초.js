// 배열 : 순서가 있는 집합 자료형
let numbers = [10, 20, 30, 40];
console.log(typeof numbers);
console.log(numbers);
console.log(numbers[0]);
console.log(numbers.length);

console.log(`첫번째 데이터 : ${numbers[0]}`);
console.log(`첫번째 데이터 : ${numbers[numbers.length-1]}`);

let foods = ['오렌지' , '짬뽕' , '포도'];
console.log('--------------------------');
console.log(foods);

foods[1] = '파인애플';
console.log(foods);

// foods[4] = '자몽';
// console.log(foods);

// 배열 내부 데이터 전체 참초 (순회)

// for(let i=0;i<foods.length; i++){
//     console.log(`${i+1}번째 요소 : ${foods[i]}`);
// }


// for(let f of foods){
//     console.log(`저장 된 괴일 : ${f}`);
// }

// ES6 : 모던(신규) 자바스크립트 문법
foods.forEach((f,i) => {
    console.log(`${i+1}과일 과일 : ${f}`);
});