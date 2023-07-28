// console.log(`김철수님 안녕하세요~~~`);
// console.log(`오늘도 즐거운 하루되세요~`);

// console.log(`박영희님 안녕하세요~~~`);
// console.log(`오늘도 즐거운 하루되세요~`);

// console.log(`홍길동님 안녕하세요~~~`);
// console.log(`오늘도 즐거운 하루되세요~`);



// 함수의 정의 - make
function sayHello(name, isMorning){
    console.log(`${name}님 안녕하세요~~~`);
    if(isMorning){
        console.log(`오늘도 즐거운 하루되세요~`);
    }else{
        console.log(`오늘도 수고하셨습니다.`);
    }
    
}

// 힘수의 호출 - use
sayHello('박지성',true);

function makeLine(){
    console.log('--------------------------')
}


for(let i=0; i<4;i++){
    makeLine();
}

// input이 주어졌을 때 output데이터가 나와야 함.

// 원이 넓이를 자주 구하는 상황
function calcAreaCircle(r){
    console.log('원의 넓이 구하는 중 ...');
    const PI = 3.14159265;
    const area = PI * r ** 2;

    return area;
}


let result = calcAreaCircle(5);
console.log(`result : ${result}`);
