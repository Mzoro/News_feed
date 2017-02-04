import {
  UPDATE_MESSAGE,
  ADD_MESSAGE,
  DELETE_MESSAGE
} from '../constants/Messages'

const messages = (state = [], action) => {

  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return [
        ...state.slice(0,action.data.index), 
        { title: action.data.title, desc: action.data.desc, time: action.data.time },
        ...state.slice(action.data.index + 1), 
      ]
    case 'ADD_MESSAGE':
      return [...state,{
        title: action.data.title,
        desc: action.data.desc,
        time: action.data.time
      }];
    case 'DELETE_MESSAGE':
      return [
        ...state.slice(0,action.messageId),
        ...state.slice(action.messageId + 1)
      ]
    default:
      return state;
  }
}
export default messages