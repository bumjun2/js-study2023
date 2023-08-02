
// index.html에서 횔용할 이벤트처리, 핸들러...

// 현재 계산기에 그려질 숫자
let currentResult = 0;






// 더하기 버튼 이벤트 핸들러
const addHandler = () =>{
    console.log('+ button click !');
    // 입력창에 입력한 숫자를 읽기
    const enterdNumber = +$userInput.value;
    
    // 로그를 생성
    const calcDescritionLog = `${currentResult} + ${enterdNumber}`;
    // 실제 계산 결과 반양
    currentResult += enterdNumber;

    // 화면에 렌더링
    outputResult(currentResult, calcDescritionLog);
};
const substractHandler = () =>{
    console.log('- button click !');
    // 입력창에 입력한 숫자를 읽기
    const enterdNumber = +$userInput.value;
    
    // 로그를 생성
    const calcDescritionLog = `${currentResult} - ${enterdNumber}`;
    // 실제 계산 결과 반양
    currentResult -= enterdNumber;

    // 화면에 렌더링
    outputResult(currentResult, calcDescritionLog);
};
const multiplyHandler = () =>{
    console.log('* button click !');
    // 입력창에 입력한 숫자를 읽기
    const enterdNumber = +$userInput.value;
    
    // 로그를 생성
    const calcDescritionLog = `${currentResult} * ${enterdNumber}`;
    // 실제 계산 결과 반양
    currentResult *= enterdNumber;

    // 화면에 렌더링
    outputResult(currentResult, calcDescritionLog);
};
const divideHandler = () =>{
    console.log('/ button click !');
    // 입력창에 입력한 숫자를 읽기
    const enterdNumber = +$userInput.value;
    
    // 로그를 생성
    const calcDescritionLog = `${currentResult} / ${enterdNumber}`;
    // 실제 계산 결과 반양
    currentResult /= enterdNumber;

    // 화면에 렌더링
    outputResult(currentResult, calcDescritionLog);
};


// ==================== 이벤트 핸들러 바인딩 ===========================//
$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', substractHandler);
$multiplyBtn.addEventListener('click', multiplyHandler);
$divideBtn.addEventListener('click', divideHandler);