
function addNumber(n1,n2){
    // 반환값 : 함수 호출이 끝나면 함수 호출부로 전달될 값
    return n1 + n2;

    // 반환문은 함수의 탈출문
    let n3 = 50;
    console.log('dkdkdkdkdk');
}

let r1 = addNumber(5,7);
console.log(`r1${r1}`);

// 함수의 중첩 호출
// let r2 = addNumber(addNumber(addNumber(3,2),10),addNumber(5,8))
let r2 = addNumber(addNumber(addNumber(3,2),10),addNumber(5,8))


// 리턴이 없는 함수 : void 함수
// 다른 함수의 매개값으로 스지도 말아라
function multi(n1,n2){
    let result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}

let r3 = multi(3,5);


function callName(nickName){
    let pro = ['돌아이', '멍청이', '빠가'];
    if(pro.includes(nickName){
        console.log('고운말을 쓰렴');
    })
    console.log(`${nickName}님 하이 ~`);
}



function stopLoop(){

    while(true){
        let flag = prompt('명령어를 입력하세요!');
        if (flag === '스톱') {
            break;
        }
        alert(flag);
    }
    alert('수고수고링');
}

stopLoop();