// 状态统一管理
// 状态不可以直接修改，调用专门的dispatch方法进行修改

let state = {
    titleState: { text: 'Jocelyn', color: 'red' },
    contentState: { text: 'HTML,CSS,JS.NODE,VUE,REACT', color: 'green' }
}

// 修改标记定义为常量
const TITLE_CHANGE_TEXT = 'title_change_text';
const TITLE_CHANGE_COLOR = 'title_change_color';
const CONTENT_CHANGE_TEXT = 'content_change_text';


// 传入action对象
// 对象格式为{type:'修改state中某个值的标记',其他参数是修改后的值}
function dispatch(action) {
    switch (action.type) {
        case TITLE_CHANGE_TEXT:
            //注意深浅拷贝的区别：
            state = { ...state, titleState: { ...state.titleState, text: action.text } };
            break;
        case TITLE_CHANGE_COLOR:
            state = { ...state, titleState: { ...state.titleState, color: action.color } };
            break;
        case CONTENT_CHANGE_TEXT:
            state = { ...state, contentState: { ...state.contentState, text: action.text } };
            break;
    }
}

function Title() {
    let title = document.getElementById("title");
    title.innerHTML = state.titleState.text;
    title.style.color = state.titleState.color;
}

function Content() {
    let content = document.getElementById('content');
    content.innerHTML = state.contentState.text;
    content.style.color = state.contentState.color;
}

setTimeout(function () {
    dispatch({ type: TITLE_CHANGE_TEXT, text: 'JocelynLj' });
    dispatch({ type: TITLE_CHANGE_COLOR, color: 'blue' });
    dispatch({ type: CONTENT_CHANGE_TEXT, text: 'html+css+js+node+vue+react' });
    render();//数据修改之后重新渲染页面
}, 3000);//3s后执行页面更新

function render() {
    Title();
    Content();
}

render();