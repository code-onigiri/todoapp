const todo = [];

function addTodo() {
    const input = document.getElementById("input");
    const value = input.value;
    todo.push(value);
    const addtododom = document.getElementById("todo");
    DOMaddTodo(value, addtododom);
}

function DOMaddTodo(value , addtododom){
    // 要素を作成
    const liElement = document.createElement('li');
    const divElement = document.createElement('div');
    const spanElement = document.createElement('span');
    const buttonElement = document.createElement('button');
    
    // 要素にクラスを追加
    divElement.className = 'todo_item_index';
    spanElement.className = 'todo_item';
    buttonElement.className = 'todo_item';
    
    // テキストを追加
    spanElement.textContent = value;
    buttonElement.textContent = '削除';

    //CSSを追加
    liElement.style.listStyleType = 'disc';

    //data-indexを追加
    liElement.dataset.index = todo.length;
    
    // 要素の階層を構築
    divElement.appendChild(spanElement);
    divElement.appendChild(buttonElement);
    liElement.appendChild(divElement);
    
    // 親要素に要素を追加
    addtododom.appendChild(liElement);
    
}