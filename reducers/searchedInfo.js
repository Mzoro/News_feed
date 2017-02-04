import {
  SET_SEARCHED_INFO
} from '../constants/Messages'

const searchedInfo = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCHED_INFO:
      return action.info
    default:
      return state
  }
}

export default searchedInfo