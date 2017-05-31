import PropTypes from 'prop-types';
import styles from './todo.css';

const Todo = ({ onClick, completed, text }) => (
  <li 
    className={styles.todo}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
