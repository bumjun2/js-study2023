
// && : 양쪽이 모두 참일 경우 참
// || : 둘 중 하나만 참이어도 참

// 아이디 검증 // 패스워드 검증

let t = true;
let f = false;
console.log(t&&t);
console.log(t&&f);
console.log(f&&t);
console.log(f&&f);

// 논리 반전(not)
console.log('==================');
console.log(!f);


// 조건 연산자 (3항)
console.log('================');
let money = 7000;
// let food; 
// if(money > 6000){
//     food = '돈가스';
// }else{
//     food = '라면';
// }

console.log(`선택된 음식:${money > 6000 ? '돈가스' : '라면'}`);