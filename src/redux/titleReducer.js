import { types } from "./types"

const initialState = {
    preloader: false
   
}

export default function titleReducer(state = initialState, action) {
  if (action.type === 'PRELOADER_ON') {
    return {...state, preloader: true}
  } else if (action.type === 'PRELOADER_OFF') {
    return {...state, preloader: false}
  }
  return state
    
}