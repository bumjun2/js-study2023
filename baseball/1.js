
let num = [];
let num2 = [];

let random = 0;
let index = 0;

let sup = []; 

// 1번째 공
for(let i=0; i<10; i++){
    random = Math.floor(Math.random() * 9) +1;
    if(num.includes(random)){
        continue;
    }
    else{
        num.push(random);
    }
    
    
    if(num[3]){
        console.log(num);
        break;
    }
}

// 두번째 공
for(let i=0; i<10; i++){
    random = Math.floor(Math.random() * 9) +1;
    if(num2.includes(random)){
        continue;
    }
    else{
        num2.push(random);
    }
    if(num2[3]){
        console.log(num2);
        break;
    }   
}

let st = 0;
let ba = 0;

// 스트라이크 영역과 볼 영역 잡기
for(let i = 0; i < num.length; i++){
    for(let j = 0; j <num2.length; j++){
        if(num[i] === num2[j]){
            ba+=1;
        }
    }
    if(num[i] === num2[i]){
        st++;
        ba -=1;
    }
}

console.log(`${st}스트라이크`);
console.log(`${ba}볼`);


