const feedbackReducer = (state = [], action) => {
    console.log(action.payload);
    
    if (action.type === 'SET_FEEDBACK') {
        return [
            ...action.payload
        ]
    }
    return state;
}

export default feedbackReducer;