const userFeedback = {
    feeling:'',
    understanding: '',
    support: '',
    comments: ''
};

const addFeedbackReducer = (state = userFeedback, action) => {
    console.log(action.payload);
    
    // set state with what user inputs in the Feeling form
    if (action.type === 'ADD_FEELING') {
        return {
            ...state,
            feeling: action.payload
        }
    }
    // set state with what user inputs in the Understanding form
    if (action.type === 'ADD_UNDERSTAND') {
        return {
            ...state,
            understanding: action.payload
        }
    }
    // set state with what user inputs in the support form
    if (action.type === 'ADD_SUPPORT') {
        return {
            ...state,
            support: action.payload
        }
    }
    // set state with what user inputs in the comment form
    if (action.type === 'ADD_COMMENT') {
        return {
            ...state,
            comments: action.payload
        }
    }
    return state;
}

export default addFeedbackReducer;