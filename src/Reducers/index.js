import { combineReducers } from 'redux'

import convertReducers from './convertReducer'

const rootReducers = combineReducers({
    conversor: convertReducers
})

export default rootReducers