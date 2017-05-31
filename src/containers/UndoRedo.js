import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './undoRedo.css';

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p className={styles.undoredoContainer}>
    <button className="btn btn-danger" onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button className="btn btn-success" onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
)

export default connect(
  state => ({
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  }),
  ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
  })
)(UndoRedo);
