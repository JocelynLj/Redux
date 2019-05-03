function createStore(reducer) {
    let state, listeners = [], dispatch, subscribe, getState;

    dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(item => item());
    }

    dispatch({});

    subscribe = (fn) => {
        listeners = [...listeners, fn];
        return () => { listeners = listeners.filter(item => item != fn) };
    }

    getState = () => (JSON.parse(JSON.stringify(state)));

    return { dispatch, subscribe, getState };
}