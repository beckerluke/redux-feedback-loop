import axios from 'axios';

// in case we need to get feedback data from the database 
const getFeedback = () => {
    return axios({
        method: 'GET',
        url: '/feedback'
    })
}

const postFeedback = (feedback) => {
    return axios({
        method: 'POST',
        url: '/feedback',
        data: feedback
    })
}

export {
    getFeedback,
    postFeedback
}