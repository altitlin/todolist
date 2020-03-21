import Utils from '../Utils';

const ADD_TODO = 'ADD-TODO';
const UPDATE_NEW_TODO_TEXT = 'UPDATE-NEW-TODO-TEXT';
const REMOVE_TODO = 'REMOVE-TODO';
const DONE_TODO = 'DONE-TODO';

const initialState = {
  todos: [],
  newTodoText: ''
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
  case REMOVE_TODO: {
    const { todoId } = action;

    return {
      ...state,
      todos: state.todos.filter(({ id }) => id !== todoId)
    };
  }
  case DONE_TODO: {
    const { todoId } = action;

    return {
      ...state,
      todos: state.todos.map(todo => {
        return todo.id === todoId
          ? { ...todo, isDone: true }
          : todo;
      })
    };
  }
  case UPDATE_NEW_TODO_TEXT: {
    return {
      ...state,
      newTodoText: action.newText
    };
  }
  case ADD_TODO: {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: Utils.getId(state.todos),
          text: state.newTodoText,
          isDone: false
        }
      ],
      newTodoText: ''
    };
  }

  default:
    return state;
  }
};

export const removeTodoCreator = id => ({
  type: REMOVE_TODO,
  todoId: id
});

export const doneTodoCreator = id => ({
  type: DONE_TODO,
  todoId: id
});

export const addTodoCreator = () => ({ type: ADD_TODO });

export const updateNewTodoTextCreator = text => ({
  type: UPDATE_NEW_TODO_TEXT,
  newText: text
});
