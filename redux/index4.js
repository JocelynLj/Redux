// state目前为全局变量，不可允许直接修改，闭包进行保护
// 防止store的内存泄漏，封装方法获取state
function createStore() {
    let state = {
        titleState: { text: 'Jocelyn', color: 'red' },
        contentState: { text: 'HTML,CSS,JS.NODE,VUE,REACT', color: 'green' }
    }

    let dispatch = (action) => {
        switch (action.type) {
            case TITLE_CHANGE_TEXT:
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

    let getState = () => (JSON.parse(JSON.stringify(state)));

    return { dispatch, getState };
}


const TITLE_CHANGE_TEXT = 'title_change_text';
const TITLE_CHANGE_COLOR = 'title_change_color';
const CONTENT_CHANGE_TEXT = 'content_change_text';

let store = createStore();

function Title() {
    let title = document.getElementById("title");
    title.innerHTML = store.getState().titleState.text;
    title.style.color = store.getState().titleState.color;
}

function Content() {
    let content = document.getElementById('content');
    content.innerHTML = store.getState().contentState.text;
    content.style.color = store.getState().contentState.color;
}

setTimeout(function () {
    store.dispatch({ type: TITLE_CHANGE_TEXT, text: 'JocelynLj' });
    store.dispatch({ type: TITLE_CHANGE_COLOR, color: 'blue' });
    store.dispatch({ type: CONTENT_CHANGE_TEXT, text: 'html+css+js+node+vue+react' });
    render();
}, 3000);

function render() {
    Title();
    Content();
}

render();