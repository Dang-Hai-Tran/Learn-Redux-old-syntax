export const markComplete = (id) => {
  const markCompleteAction = dispatch => {
    dispatch({
      type: 'MARK_COMPLETED',
      payload: id
    })
  }

  return markCompleteAction
}