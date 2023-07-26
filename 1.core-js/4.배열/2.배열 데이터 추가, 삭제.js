let pets = ['멍멍이', '야옹이', '태용이'];

console.log(pets);

// 배열 맨 끝에 데이터 추가
pets.push('규호');
pets.push('어흥이', '거부기', '컹컹이')
console.log(pets);

// 배열 맨 끝에 지우기
let r1 = pets.pop();
pets.pop();
let r3 = pets.pop();
pets.pop();
pets.pop();
console.log(pets);

// 배열의 맨 첫 위치에 데이터 추가
pets.unshift('비둘긔');
console.log(pets);

// 맨 첫 데이터 제게
pets.shift();
console.log(pets);