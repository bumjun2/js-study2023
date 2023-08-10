const $btn = document.querySelector('button');

let trackHandler = () => console.log('Click');

$btn.addEventListener('click', trackHandler);

// let total = 0;
// for(let i=0; i<1000000000; i++){
//     total += i;
// }

// console.log(total);


setTimeout(() => {
    console.log('1번 코드!');
}, 5000);
setTimeout(() => {
    console.log('2번 코드!');
}, 3000);
setTimeout(() => {
    console.log('3번 코드!');
}, 1000);
