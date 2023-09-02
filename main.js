let todoaddbutton = document.getElementById('todoadd');
let todocontainer = document.getElementById('todocontainer');
let todoitem = document.getElementById('todoitem');
let todoclearbutton = document.getElementById('todoclear');

todoaddbutton.addEventListener('click', function(){
    let write = document.createElement('p');
    todocontainer.appendChild(write);
    write.innerHTML = todoitem.value;
    todoitem.value = '';

    write.addEventListener('click', function(){
        write.style.textDecoration = 'line-through';
    });

    write.addEventListener('dblclick', function(){
        todocontainer.removeChild(write);
    });

    todoclearbutton.addEventListener('click', function(){
        write.remove();
    });
});