

let num = [];
let num2 = [];

let supNum = 0;


// 1번째 공
for(let i=0; i<10; i++){
    num[i] = Math.floor(Math.random() * 9) +1;
    if(num[3]){
        console.log(num);
        break;
    }
    
}








// 두번째 공
for(let i=0; i<4; i++){
    num2[i] = Math.floor(Math.random() * 9) +1;
    
    // 숫자 4개만 출력
    if(num2[3]){
        console.log(num2);
    }
}







// 스트라이크 여부 확인
if(num[0]===num2[0]){
    console.log('원 스트라이크');
}


