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
  case ADD_TODO:

    return state;
  case UPDATE_NEW_TODO_TEXT:

    return state;
  case REMOVE_TODO:

    return state;
  case DONE_TODO:

    return state;

  default:
    state;
  }
};

export const addTodoCreator = () => ({ type: ADD_TODO });

export const updateNewTodoTextCreator = text => ({
  type: UPDATE_NEW_TODO_TEXT,
  newText: text
});

export const removeTodoCreator = id => ({
  type: REMOVE_TODO,
  idTodo: id
});

export const doneTodoCreator = id => ({
  type: DONE_TODO,
  idTodo: id
});
