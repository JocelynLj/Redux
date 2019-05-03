// 代码封装成类似组件形式

let titleState = { text: 'Jocelyn', color: 'red' };
let contentState = { text: 'HTML,CSS,JS.NODE,VUE,REACT', color: 'green' };

function Title(){
    let title = document.getElementById("title");
    title.innerHTML = titleState.text;
    title.style.color = titleState.color;
}

function Content(){
    let content = document.getElementById('content');
    content.innerHTML = contentState.text;
    content.style.color = contentState.color;
}

function render() {
    Title();
    Content();
}

render();