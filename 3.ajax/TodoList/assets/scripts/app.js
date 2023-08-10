const URL = 'http://localhost:8282/todes';
const $ul = document.querySelector('.todo-list');

fetch(URL)
    .then(res => res.json())
    .then((postlist) => {
        for(let i=0; i<postlist.length; i++){
            // li
            const $newLi = document.createElement('li');
            $newLi.dataset.Id = postlist[i].id;
            $newLi.classList.add('todo-list-item');
            $ul.appendChild($newLi);
            

            // label
            const $newLabel = document.createElement('label');
            $newLabel.classList.add('checkbox');
            $newLi.appendChild($newLabel);
            

            // input
            const $newInput = document.createElement('input');
            $newInput.setAttribute('type', 'checkbox');
            $newLabel.appendChild($newInput);
            $newInput.addEventListener('click', e =>{
                
                if($newInput.checked){
                    fetch(`${URL}/${postlist[i].id}`,{
                        method : "PATCH",
                        headers : {
                            "content-type" : "application/json"
                        },
                        body: JSON.stringify({
                            done : true
                        })
                    });
                }
            });
            
            // span
            const $span = document.createElement('span');
            $span.classList.add('text');
            $span.textContent = postlist[i].text;
            $newLabel.appendChild($span);

            // div
            const $div1 = document.createElement('div');
            $div1.classList.add('modify');
            $newLi.appendChild($div1);

            const $span1 = document.createElement('span');
            $span1.classList.add('lnr');
            $span1.classList.add('lnr-undo');
            $div1.appendChild($span1);
            $span1.addEventListener('click', e =>{
                
                const $newinput = document.replaceChild('input');
                $newinput.classList.add('modify-input');
                documentreplaceChild($newinput, $span);
                
            });

            const $div2 = document.createElement('div');
            $div2.classList.add('remove');
            $newLi.appendChild($div2);

            $div2.addEventListener('click', e =>{
                fetch(`${URL}/${postlist[i].id}`,{
                    method : 'DELETE'
                })
            });

            const $span2 = document.createElement('span');
            $span2.classList.add('lnr');
            $span2.classList.add('lnr-cross-circle');
            $div2.appendChild($span2);
        }
    });

 

const $addButton = document.getElementById('add');
$addButton.addEventListener('click', e => {
    const $Input = {
        text : document.getElementById('todo-text').value,
        done : false
    };
    fetch(URL, {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify($Input),
    });
});
