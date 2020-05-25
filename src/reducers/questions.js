import {RECEIVE_QUESTIONS, SAVE_ANSWER_TO_QUESTION} from '../actions/questions'

export default function questions(state={}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER_TO_QUESTION:
            const {qid, answer, authedUser}= action
    
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                    ...state[qid][answer],
                    votes: [...state[qid][answer].votes, authedUser]
                }
                }
            };
        default:
            return state
    }
}