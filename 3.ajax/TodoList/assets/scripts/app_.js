const URL = 'http://localhost:8282/todes'
// step1. db.json에 있는 todos를 화면에 렌더링하기

const $todoList = document.querySelector('.todo-list');

const fetchTodos = (url, method = 'GET', payload = null) => {
    const requestInit ={
        method : method,
        heders : { 'content-type' : 'application/json'}
    };
    if(payload) requestInit.body = JSON.stringify(payload);

    return fetch(url, requestInit);
};

// 화면에 todos를 렌더링하는 함수
const renderTodos = (todoList) =>{
    // li태그의 템플릿을 가져오기
    const $liTemplate = document.getElementById('single-todo');

    todoList.forEach(({id, text, done})=> {
        // console.log(todo);
        const $newLi = document.importNode($liTemplate.content, true);
        $newLi.querySelector('li').dataset.id = id; //data-id속성 부여
        $newLi.querySelector('.text').textContent = text;

        // 체크박스 가져오기
        const $checkbox = $newLi.querySelector('.checkbox input[type=checkbox]');
        // console.dir($checkbox);
        $checkbox.checked = done;
        if(done) 

        $todoList.appendChild($newLi);
    });
};

// ============ 앱 실행 =================//
const init = () =>{
    fetchTodos(URL)
        .then(res => res.json())
        .then(todos => {
            renderTodos(todos);
        });
};

init();