const userFeedback = {
    feeling:'',
    understanding: '',
    support: '',
    comments: ''
};

const addFeedbackReducer = (state = userFeedback, action) => {
    
    // set state with what user inputs in the Feeling form
    if (action.type === 'SET_FEELING') {
        return {
            ...state,
            feeling: action.payload
        }
    }
    // set state with what user inputs in the Understanding form
    if (action.type === 'SET_UNDERSTAND') {
        return {
            ...state,
            understanding: action.payload
        }
    }
    // set state with what user inputs in the support form
    if (action.type === 'SET_SUPPORT') {
        return {
            ...state,
            support: action.payload
        }
    }
    // set state with what user inputs in the comment form
    if (action.type === 'SET_COMMENT') {
        return {
            ...state,
            comments: action.payload
        }
    }
    return state;
}

export default addFeedbackReducer;