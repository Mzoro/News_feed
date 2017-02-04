import {
  UPDATE_MESSAGE,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  SET_SEARCHED_INFO
} from '../constants/Messages'

export const updateMessage = (data) => {
  return {
    type: UPDATE_MESSAGE,
    data
  }
}

export const addMessage = (data) => {
  return {
    type: ADD_MESSAGE,
    data
  }
}

export const deleteMessage = (messageId) => {
  return {
    type: DELETE_MESSAGE,
    messageId
  }
}
export const setSearchedInfo = (info) => {
  return {
    type: SET_SEARCHED_INFO,
    info
  }
}