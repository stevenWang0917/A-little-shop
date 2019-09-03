const isPromise = (payload) => 
    (typeof(payload) === 'object' || typeof(payload) === 'function') 
    && typeof(payload.then) === 'function';

export const asyncActions = () => /* (next) */ dispatch => (action) => {
    if(isPromise(action.payload)){
        action.payload.then(result=>/* next */dispatch({...action, payload: result}))
    }
    else /* next */dispatch(action);
}