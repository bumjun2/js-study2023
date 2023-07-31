let a = +prompt('첫번째 숫자를 입력!');
let b = +prompt('두번째 숫자를 입력!');
let sum = 0;

if(a>b){
    let t = a;
    a = b;
    b = t;
}

for(let i=a;i<=b;i++){
    sum += i;
}

alert(`합계${sum}`);