import {
  UPDATE_MESSAGE,
  ADD_MESSAGE,
  DELETE_MESSAGE
} from '../constants/Message'

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