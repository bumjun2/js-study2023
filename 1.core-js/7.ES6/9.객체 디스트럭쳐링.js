
const emp = {
    empName : '뽀로로',
    age : 4,
    hireDate : '2021-01-01',
    birthDay : '2020-01-01'
};

const { empName, birthDay, age} = emp;

console.log(`내 이름은 ${empName}이고, 나이는 ${age}살입니다. 그리고 생일은 ${birthDay}이다.`);

const { empName: en, birthDay:b, age:a} = emp;

console.log(`제 이름은 ${en}이고, 나이는 ${a}살입니다. 그리고 생일은 ${b}이다.`);

const {birthDay : bDay, ...othors} = emp;
console.log('----------------------------------------------------------------------------------------');
console.log(othors);

// 객체 복사
console.log('----------------------------------------------------------------------------------------');

const copyEmp = {...emp};
copyEmp.empName = '정범준'
console.log(copyEmp);
