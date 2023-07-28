
let phone = {
    company : '삼성',
    color : '펄 화이트', 
    model : '갤럭시 s23',
    price : 1200000
};

// 프로퍼티 값 수정
phone.company = 'apple';
phone['model'] = '아이폰 14';

console.log(phone);

// 프로퍼티 동적 추가
phone.madeDate = '2023-03-05';

console.log(phone);

// 프로퍼티 동적 삭제
delete phone.price;
console.log(phone);

// 객체의 반복문 for ~ in
console.log('-----------------');

for(let x in phone){
//    console.log(typeof x);
    console.log(`key: ${x}`);
    console.log(`value: ${phone[x]}`);
}

console.log('------------------');

// 객체 key 존재 유무 확인
let flag = 'model' in phone;
console.log(flag);

let key = 'com';

if(key in phone){
    console.log('수정하는거 맞죠??');
}
else{
    console.log('추가하는거 맞죠??');
}