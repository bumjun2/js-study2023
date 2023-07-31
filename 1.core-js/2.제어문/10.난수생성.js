
// 1~10사이의 랜덤 정수를 생성

// Math.random() : 0.0이상 ~ 1.0미안의 랜덤실수 생성
// Math.random() * 10 : 0.0 < ~ < 10.0
// Math.floor(Math.random() * 10) -> 0 < ~ < 10


// x 이상 y이하의 랜덤 정수 생성 공식
// Math.floor(Math.random() * (y-x+1)) + x
let rn = Math.floor(Math.random() * 10) + 1;
console.log(rn);