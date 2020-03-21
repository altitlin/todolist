import React from 'react';
import PropTypes from 'prop-types';

import './Footer.less';

const Footer = props => {
  const { value, addTodo, updateNewTodoText  } = props;

  const onAddTodo = () => addTodo();
  const onChangeNewTodoText = e => updateNewTodoText(e.target.value);

  return (
    <footer className='footer'>
      <input type='text' placeholder='What need to do?' value={value} onChange={onChangeNewTodoText} className='footer__input-text' />
      <button className='btn footer__btn' onClick={onAddTodo}>Add a task</button>
    </footer>
  );
};

Footer.propTypes = {
  value: PropTypes.string,
  addTodo: PropTypes.func,
  updateNewTodoText: PropTypes.func
};

export default Footer;
