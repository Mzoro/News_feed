export const updateMessage = (messageId, title, desc, time) => {
  return {
    type: 'UPDATE_MESSAGE',
    messageId,
    title,
    desc,
    time
  }
}

export const addMessage = (title, desc, time) => {
  return {
    type: 'ADD_MESSAGE',
    title,
    desc,
    time
  }
}

export const deleteMessage = (messageId) => {
  return {
    type: 'DELETE_MESSAGE',
    messageId
  }
}