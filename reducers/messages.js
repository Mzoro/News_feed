
const messages = (state = [], action) => {

  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return [
        ...state.slice(0,action.messageId), 
        { title: action.title, desc: action.desc, time: action.time },
        ...state.slice(action.messageId + 1), 
      ]
    case 'ADD_MESSAGE':
      return [...state,{
        title: action.title,
        desc: action.desc,
        time: action.time
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