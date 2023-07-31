const userList = [
    {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스']
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스']
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상']
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스']
  },
];

// 4명의 회원 중 취미가 딱 2개인 사람들만 필터링해주세요.
// 취미가 2개인 사람만 모아서 배열에 다시 담아줘

// function filterByHas2Hobby(){
//     const filteredArray = [];
//     for (let user of userList){
//         if(user.hobbys.length === 2){
//             filteredArray.push(user);
//         }
//     }
//     return filteredArray;
// }

// const hobby2 = filterByHas2Hobby();
// console.log(hobby2);

// 콜백을 이용한 필터링 함수
function filter(code){
    const filterd = [];
    for(user of userList){
        if(code(user)){
            filterd.push(user);
        }
    }
    return filterd;
}

const rs2 = filter(user => user.address === '서울' && user.job === '게이머');
console.log(rs2);



// 회원정보중에 회원 이름만 전부 모아서 배열에 담아줘
// 매핑
function map(condition){
    // 이름을 담을 배열
    const s = [];
    for(user of userList){
        s.push(condition(user));
    }
    return s;
    
}

let u = map(a =>user.address);
console.log(u);
