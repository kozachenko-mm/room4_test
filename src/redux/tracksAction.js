import {Types} from './actionsTypes'

export const tracksAction = value =>({
type: Types.FETCH_START,
payload: value
}) 
