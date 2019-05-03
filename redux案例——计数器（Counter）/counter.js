// 1.定义类型常量

const INCREMENT = 'increment';//加
const DECREMNET = 'decrement';//减

// 2.给state定义初始值，并定义数据处理函数

let initialState = { number: 0 };
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { number: state.number + action.num };
            break;
        case DECREMNET:
            return { number: state.number - action.num };
            break;
    }
    return state;
}

// 3.创建状态统一管理库，将reducer传入

let store = createStore(reducer);

// 4.定义页面渲染函数，进行页面渲染

function render() {
    window.number.innerHTML = store.getState().number;
}
render();

// 5.给页面中的元素绑定操作

window.add.addEventListener('click', function () {
    store.dispatch({ type: INCREMENT, num: 3 });
})
window.minus.addEventListener('click', function () {
    store.dispatch({ type: DECREMNET, num: 1 });
})

// 6.订阅事件处理页面渲染

store.subscribe(render);