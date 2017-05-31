import undoable from 'redux-undo';

const todo = (state, { payload, type }) => {
  switch (type) {
    case 'ADD_TODO':
      return {
        id: payload.id,
        text: payload.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== payload.id) {
        return state;
      }

       return Object.assign({}, state, {
        completed: !state.completed
      })
       
    default:
      return state;
  }
}

const todos = (state = [], { payload, type }) => {

  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, { payload, type })
      ]
    case 'TOGGLE_TODO':

      return state.map(t =>
        todo(t, { payload, type })
      )
    default:
      return state
  }
}

const undoableTodos = undoable(todos)

export default undoableTodos
