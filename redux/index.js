function createStore(reducer) {
    let state, listeners = [], dispatch, subscribe, getState;
    
    let dispatch = (action) => {
        reducer(state, action);
        listeners.forEach(item => item());
    }

    dispatch({});

    let subscribe = (fn) => {
        listeners = [...listeners, fn];
        return () => { listeners = listeners.filter(item => item != fn) };
    }

    let getState = () => (JSON.parse(JSON.stringify(state)));

    return { dispatch, subscribe, getState };
}