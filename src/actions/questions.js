import {addAnswer,addQuestion} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {saveAnswerToUser} from './users'
import {handleInitialData} from './shared'



export const RECEIVE_QUESTIONS ="RECEIVE_QUESTIONS";
export const SAVE_ANSWER_TO_QUESTION= 'SAVE_ANSWER_TO_QUESTION'
export const SAVE_QUESTION= 'SAVE_QUESTION'



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
        if(answer!==""){
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
}

export function handleSaveQuestion(question){
    return (dispatch, getState)=>{
        const {authedUser}= getState()
        dispatch(showLoading)
        return addQuestion({
            authedUser,
            ...question,
            author: question.authedUser
        })
        .then((quest)=>{
            dispatch(handleInitialData(quest.author))            
        })

        .then(()=>{
            dispatch(hideLoading())
        })
    }
}
