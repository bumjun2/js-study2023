/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
 나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/

// 호출부

function calcDivisor(n){
    let cnt = 0;
    let a = [];
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            a += i + ",";
            
            cnt++;
        }
    }
    console.log(`${n}에 약수 : ${a}`);
    return cnt;
}

let divCount = calcDivisor(20);
console.log(`약수의 개수: ${divCount}개`);

/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
function calcNumbersTotalAndAverage(...number){
    let sum = 0;
    for(let n of number){
        sum += n;
    }
    let s = sum / 4;
    return{
        total : sum,
        avg : s,
    }
}

let result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total},평균: ${result.avg}`);


/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
 18.5이하면 "당신은 저체중입니다." 
 나머지는 "당신은 정상체중입니다."를 출력하는 
 CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
*/
function calcBMI(cm, kg){
    let m = cm / 100;
    let bmi = kg / (m * m);
    if(bmi >= 25){
        console.log('당신은 과체중입니다');
    }else if(bmi < 18.5){
        console.log('당신은 저체중입니다.');
    }else{
        console.log('당신은 정상입니다.');
    }
    return bmi;
}
let h = 178.4;
let w = 78.2;
let myBmi = calcBMI(h, w);


console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${myBmi}입니다.`);


