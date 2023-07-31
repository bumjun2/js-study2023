
// com 숫자 랜덤숫자 배열에 넣기
let comNum = [] 

// plyer숫자 입력값 배열에 넣기
let player = []

let ball = 0;
let strike = 0;

// com 숫자 랜덤 배열 완
for(let i = 0; i < 10; i++){
    let random = Math.floor(Math.random()*9)+1;



    if(comNum.includes(random)){
        continue;
    }else{
        comNum.push(random);
    }

    if(comNum[3]){
        break;
    }
}