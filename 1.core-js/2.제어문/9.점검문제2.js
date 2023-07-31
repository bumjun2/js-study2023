// // 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// // 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// // 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// // 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// // 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// // 사용자들은 입력 기회가 5번으로 제한된다. 
// // 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// // 사용자는 게임 시작전에 난이도를 설정할 수 있다. 
// // 난이도는 상, 중, 하 난이도가 존재하며 
// // 난이도별 입력 횟수제한이 다르다.



// // let score = Math.floor(Math.random() * 50) + 1;
// // let min = 1, max = 50;

// // while(true){
// //     let cnt = +prompt(`[숫자를 맞춰 보세요] ${min} ~ ${max}`);
// //     if(cnt === score){
// //         alert('딩동댕 ~!');
// //         break;
// //     }
// //     else if(cnt <= score){
// //         alert('up ~!');
// //         min + 1;
// //     }
// //     else if(cnt >= score){
// //         alert('down ~!');
// //         max - 1;
// //     }
// // }

// // let score2 = Math.floor(Math.random() * 50) + 1;
// // for(let i = 5; i >= 0; i--){
// //     let cnt2 = +prompt('[1~50사이의 무작위 숫자를 5번 안에 맞춰보세요!]')
// //     if(cnt2 >= 51){
// //         alert('병신인가');
// //     }
// //     if(cnt2 === score2){
// //         alert('딩동댕 ~!');
// //         break;
// //     }
// //     if(cnt2 <= score2){
// //         alert('up ~!');
// //         alert(`기회가 ${i}번 남았습니다`);
// //     }
// //     if(cnt2 >= score2){
// //         alert('down ~!');
// //         alert(`기회가 ${i}번 남았습니다`);
// //     }
// //     if(i===0){
// //         alert(`기회를 모두 소진했습니다.`);
// //     }
// // }



// // let score2 = Math.floor(Math.random() * 50) + 1;
// // let txt = +prompt(`-----------재미있는 UP&DOWN 게임------------ \n [난이도를 설정하세요 ~~~!] \n [1.상 (기회3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)] ${score2}`);
    
// // if(txt === 1){
// //     let txt2 = +prompt('[1-50사이의 무작위 숫자를 3번 안에 맞춰보세요!!!]');
// //     for(let i =3; i>= 0; i--){
// //         if(txt2 === score2){
// //             alert('맞춤!');
// //             break;
// //         }
// //         else if(txt2 < score2){
// //             alert('up!');
// //             +prompt(`기회가 ${i}번 남았다`);
// //         }
// //         else if(txt2 > score2){
// //             alert('down!');
// //             +prompt(`기회가 ${i}번 남았다`);
            
// //         }

// //         if(i === 0){
// //             alert('기회가 모두 소진입니다')
// //         }
// //     }
// // }


// // if(txt === 2){
// //     let txt2 = +prompt('[1-50사이의 무작위 숫자를 6번 안에 맞춰보세요!!!]');
// //     for(let i =3; i>= 0; i--){
// //         if(txt2 === score2){
// //             alert('맞춤!');
// //             break;
// //         }
// //         else if(txt2 <= score2){
// //             alert('up!');
// //             +prompt(`기회가 ${i}번 남았다`);
// //         }
// //         else if(txt2 >= score2){
// //             alert('down!');
// //             +prompt(`기회가 ${i}번 남았다`);
            
// //         }

// //         if(i === 0){
// //             alert('기회가 모두 소진입니다')
// //         }
// //     }
// // }

// // if(txt === 3){
// //     let txt2 = +prompt('[1-50사이의 무작위 숫자를 10번 안에 맞춰보세요!!!]');
// //     for(let i =3; i>= 0; i--){
// //         if(txt2 === score2){
// //             alert('맞춤!');
// //             break;
// //         }
// //         else if(txt2 <= score2){
// //             alert('up!');
// //             +prompt(`기회가 ${i}번 남았다`);
// //         }
// //         else if(txt2 >= score2){
// //             alert('down!');
// //             +prompt(`기회가 ${i}번 남았다`);
            
// //         }

// //         if(i === 0){
// //             alert('기회가 모두 소진입니다')
// //         }
// //     }
// // }




// // 실제로 정답으로 사용할 랜덤 정수 만들기
// let secret = Math.floor(Math.random() * 100) + 1;

// // 입력 최소, 최대값
// let min = 1, max = 100;

// while (true) {

//   // 사용자의 정답 입력값
//   let answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

//   // 입력값 유효성 검사
//   // 지금 입력범위 안의 값인가??
//   if (answer < min || answer > max) {
//     alert(`범위 안의 값을 입력하세요!`);
//     continue;
//   }

//   // 업 다운 판단
//   // 정답인 경우
//   if (secret === answer) {
//     alert(`정답입니다!`);
//     break;
//   } else if (secret > answer) {
//     alert(`UP!!`);
//     min = answer + 1;
//   } else {
//     alert(`DOWN!!`);
//     max = answer - 1;
//   }
// }

// alert(`수고하셨습니다!`);


// 강의 썜에 미친 코드

// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며
// 난이도별 입력 횟수제한이 다르다.


// 난이도 상수
const HIGH = 1;
const MIDDLE = 2;
const LOW = 3;

// 초기 난이도 설정 선택창 띄우기
let level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');

// 초기 카운트 수
let initCount;

// 카운트다운 변수


if (level === HIGH) {
  initCount = 3;
  
} else if (level === MIDDLE) {
  initCount = 6;
} else if (level === LOW) {
  initCount = 10;
} else {
  alert('잘못 입력했으니까 난이도 상으로 자동 시작합니다.');
  initCount = 3;
}
let countdown = initCount;
// 실제로 정답으로 사용할 랜덤 정수 만들기
let secret = Math.floor(Math.random() * 100) + 1;

// 입력 최소, 최대값
let min = 1, max = 100;

while (true) {

  // 사용자의 정답 입력값
  let answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

  // 입력값 유효성 검사
  // 지금 입력범위 안의 값인가??
  if (answer < min || answer > max) {
    alert(`범위 안의 값을 입력하세요!`);
    continue;
  }

  countdown--; // 카운트 감소

  // 업 다운 판단
  // 정답인 경우
  if (secret === answer) {
    alert(`정답입니다! ${initCount - countdown}번만에 맞췄습니다!`); // 게임종료 조건 1
    break;
  } else if (secret > answer) {
    alert(`UP!!`);
    min = answer + 1;
  } else {
    alert(`DOWN!!`);
    max = answer - 1;
  }

  // 추가 게임 종료 조건
  if (countdown === 0) {
    alert(`ㅠㅠ 패배하셨습니다! 정답은 ${secret}였지롱 ㅋㅋ`);
    break;
  } else {
    alert(`${countdown}번의 기회가 남았습니다.`);
  }

} // end while loop

alert(`수고하셨습니다!`);
