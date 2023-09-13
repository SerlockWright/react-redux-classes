import { CLASSES_SELECTED } from './classes.action'

// initial State
const inititalState = {
  classesItem: null
}

// Reducer
export default function classesReducer(state = inititalState, action) {
  switch (action.type) {
    case CLASSES_SELECTED:
      return {
        ...state,
        classesItem: action.payload
      }
    default:
      return state
  }
}