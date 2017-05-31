import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import styles from './addTodo.css';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className={styles.form} onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input className="input-lg" 
               placeholder="..." 
               ref={node => {
          input = node
        }} />
        <button type="submit" className="btn btn-lg btn-success">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);
