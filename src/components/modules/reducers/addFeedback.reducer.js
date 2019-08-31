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

    if (action.type === 'ADD_SUPPORT') {
        return {
            ...state,
            support: action.payload
        }
    }

    if (action.type === 'ADD_COMMENT') {
        return [
            {...action.payload}
        ]
    }
    return state;
}

export default addFeedbackReducer;