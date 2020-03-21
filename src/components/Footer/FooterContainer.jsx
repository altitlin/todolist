import { connect } from 'react-redux';
import Footer from './Footer';
import {
  addTodoCreator,
  updateNewTodoTextCreator
} from '../../redux/todolist-reducer';

const mapStateToProps = state => ({ value: state.todolist.newTodoText });

const mapDispathToProps = dispatch => ({
  addTodo: () => dispatch(addTodoCreator()),
  updateNewTodoText: text => dispatch(updateNewTodoTextCreator(text))
});

export default connect(mapStateToProps, mapDispathToProps)(Footer);
