// 将createStore封装成一个库，将需要用户定义的东西提取出来

function createStore() {
    let state;
    // 初始化给state赋值，{}为防止action.type报错，此时action.type为undefined
    dispatch({});
    function dispatch(action) {
        state = reducer(state, action);
    }

    let getState = () => (JSON.parse(JSON.stringify(state)));

    return { dispatch, getState };
}


const TITLE_CHANGE_TEXT = 'title_change_text';
const TITLE_CHANGE_COLOR = 'title_change_color';
const CONTENT_CHANGE_TEXT = 'content_change_text';

let initalState = {
    titleState: { text: 'Jocelyn', color: 'red' },
    contentState: { text: 'HTML,CSS,JS.NODE,VUE,REACT', color: 'green' }
};
let store = createStore();

function reducer(state = initalState, action) {
    switch (action.type) {
        case TITLE_CHANGE_TEXT:
            return { ...state, titleState: { ...state.titleState, text: action.text } };
            break;
        case TITLE_CHANGE_COLOR:
            return { ...state, titleState: { ...state.titleState, color: action.color } };
            break;
        case CONTENT_CHANGE_TEXT:
            return { ...state, contentState: { ...state.contentState, text: action.text } };
            break;
    }
    // 初始化时候的返回
    return state;
}

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