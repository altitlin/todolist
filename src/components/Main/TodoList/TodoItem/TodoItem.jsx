import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.less';

const TodoItem = props => {
  const { todo: { id, text, isDone }, removeTodo, doneTodo } = props;

  const onRemoveTodo = () => removeTodo(id);
  const onDoneTodo = () => doneTodo(id);

  return (
    <li className='list__item'>
      <p className={isDone ? 'list__text list__text_done' : 'list__text'}>
        {text}
      </p>
      <div className="list__btns">
        <span className='list__btn' onClick={onDoneTodo}>&#10004;</span>
        <span className='list__btn' onClick={onRemoveTodo}>&#10006;</span>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  removeTodo: PropTypes.func,
  doneTodo: PropTypes.func
};

export default TodoItem;
