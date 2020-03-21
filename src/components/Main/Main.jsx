import React from 'react';
import TodoListContainer from './TodoList/TodoListContainer';

import './Main.less';

const Main = () => {
  return (
    <main className='main'>
      <TodoListContainer />
    </main>
  );
};

export default Main;
