function render() {
    let titleState = { text: 'Jocelyn', color: 'red' };
    let contentState = { text: 'HTML,CSS,JS.NODE,VUE,REACT', color: 'green' };
    let title = document.getElementById("title");
    title.innerHTML = titleState.text;
    title.style.color = titleState.color;
    let content = document.getElementById('content');
    content.innerHTML = contentState.text;
    content.style.color = contentState.color;
}

render();