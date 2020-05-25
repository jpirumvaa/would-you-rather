import {addAnswer} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {saveAnswerToUser} from './users'

export const RECEIVE_QUESTIONS ="RECEIVE_QUESTIONS";
export const SAVE_ANSWER_TO_QUESTION= 'SAVE_ANSWER_TO_QUESTION'



export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions,

    }
}

function saveAnswerToQuestion(authedUser, qid, answer){
    return{
        type: SAVE_ANSWER_TO_QUESTION,
        authedUser,
        qid,
        answer,
    }
}
    

export function handleSaveAnswer( qid,answer){
    return(dispatch, getState)=>{
        const {authedUser}= getState()
        dispatch(showLoading())
        return addAnswer({
            authedUser,
            qid, 
            answer,             
        })
        .then(()=>{
            dispatch(saveAnswerToQuestion(authedUser, qid, answer))
            dispatch(saveAnswerToUser(authedUser, qid, answer))
        })        
        .then(()=>dispatch(hideLoading()))
    }
}
