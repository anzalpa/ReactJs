import React from 'react'

function TotoItems(props){

  const todoItem = props.todoItem
  const listStyle = {
    color: todoItem.isCompleted ? '#999': '#000',
    textDecoration : todoItem.isCompleted ? "line-through" : "none"
  }
  return (
      <div>
        <input
          id={todoItem.id}
          type="checkbox"
          defaultChecked = {todoItem.isCompleted ? 'checked' : ''}
          onChange = {props.handleOnChange}
          value={todoItem.isCompleted}
        />
        <label htmlFor={todoItem.id} style = {listStyle} >
          {todoItem.todo}
        </label>
      </div>
  )
}

export default TotoItems
