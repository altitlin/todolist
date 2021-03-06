import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';

import './TodoList.less';

const TodoList = props => {
  const { items, removeTodo, doneTodo } = props;

  return (
    <>
      {items.length === 0 && 'Task list is empty.'}
      <ul className='list'>
        {items.map(item =>
          <TodoItem
            key={item.id}
            todo={item}
            removeTodo={removeTodo}
            doneTodo={doneTodo}
          />)
        }
      </ul>
    </>
  );
};

TodoList.propTypes = {
  items: PropTypes.array,
  removeTodo: PropTypes.func,
  doneTodo: PropTypes.func
};

export default TodoList;
