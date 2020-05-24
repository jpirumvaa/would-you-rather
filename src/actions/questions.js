import {saveLikeToggle, saveTweet} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading-bar'

export const RECEIVE_QUESTIONS ="RECEIVE_QUESTIONS";


export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions,

    }
}
