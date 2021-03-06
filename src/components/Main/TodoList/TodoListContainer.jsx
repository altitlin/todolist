import { connect } from 'react-redux';
import TodoList from './TodoList';
import {
  removeTodoCreator,
  doneTodoCreator
} from '../../../redux/todolist-reducer';

const mapStateToProps = state => ({ items: [...state.todolist.todos] });

const mapDispathToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodoCreator(id)),
  doneTodo: id => dispatch(doneTodoCreator(id))
});

export default connect(mapStateToProps, mapDispathToProps)(TodoList);
