import React from 'react';
import CSSModules from 'react-css-modules'
import Filters from './Filters';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import UndoRedo from '../containers/UndoRedo';
import styles from './app.css';


const App = () => (
  <main className={styles.app}>
    <div className="container">
  	  <div className="jumbotron">
        <AddTodo />
        <VisibleTodoList />
        <Filters />
        <UndoRedo />
      </div>
  	</div>
  </main>
);


export default App;