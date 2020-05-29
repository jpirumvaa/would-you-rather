import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion
} from './_DATA.js'

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function addAnswer(answer){
    return _saveQuestionAnswer(answer)
}

export function addQuestion(question){
    return _saveQuestion(question)
}

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}
