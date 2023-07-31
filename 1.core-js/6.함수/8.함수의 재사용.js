const NOT_FOUND = -1;

let foods = ['짬뽕', '초밥', '김치찌개', '족발'];

function myIndexof(arry, searchElemnet){
    for(let i =0; i <arry.length; i++){
        if(searchElemnet === arry[i]) return i;
    }

    return NOT_FOUND;
}

// 배열에서 특정 요소가 존재하는지 유무 확인
function myIncludes(arry, searchElement){
    return myIndexof(arry, searchElement) !== NOT_FOUND;
}

let index = myIndexof(foods, '파스타');
console.log(`찾은 인덱스 : ${index}`);

let isPresent = myIncludes(foods, '족발');
console.log(`존재여부 ${isPresent}`);
