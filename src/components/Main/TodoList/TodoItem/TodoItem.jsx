import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.less';

const TodoItem = props => {
  const { id, text, isDone, removeTodo, doneTodo } = props;

  const onRemoveTodo = () => removeTodo(id);
  const onDoneTodo = () => doneTodo(id);

  return (
    <li className='list__item'>
      <p className={isDone ? 'list__text list__text_done' : 'list__text'}>
        {text}
      </p>
      <div className="list__btns">
        <span className='list__btn' ocClick={onDoneTodo}></span>
        <span className='list__btn' ocClick={onRemoveTodo}></span>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  isDone: PropTypes.bool,
  removeTodo: PropTypes.func,
  doneTodo: PropTypes.func
};

export default TodoItem;
