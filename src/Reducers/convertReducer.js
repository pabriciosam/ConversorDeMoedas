import { CONVERTE_MOEDAS } from './../Actions'

const INITIAL_STATE = {}

export default function conversor(state = INITIAL_STATE, action) {
    if (action.type === CONVERTE_MOEDAS){
        const result = action.payload
       
        return result
    } else {
        return state
    }
}