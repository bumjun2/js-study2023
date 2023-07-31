/*
const increase = (() => {
    let count = 0
    return() => ++count;
})();



const dicrease = (() => {
    let count = 0
    return() => --count;
})();



console.log(increase);
console.log(dicrease);
console.log(dicrease);
console.log(increase);
console.log(increase);



const countClosure = () => {
    let count = 0;

    const increase = () => ++count;
    const dicrease = () => --count;

    return{
        increase,
        dicrease
    };
};

const counter = countClosure();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.dicrease());
console.log(counter.increase());
console.log(counter.increase());
*/

const {increase, decrease} = (() =>{
    let count = 0;
    return {
        increase : () => ++count,
        decrease : () => --count
    };
})();

console.log(increase());
console.log(increase());
console.log(decrease());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());