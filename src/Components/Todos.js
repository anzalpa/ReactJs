import React from 'react'

import TodoItems from './TotoItems'
import TodoDetails from '../data/TodoDetails.js'

class Todos extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: TodoDetails
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(e){
    const id = e.target.id
    this.setState(prevState => (
      prevState.todos.map(state => {
        if(state.id == id){
          state.isCompleted = !state.isCompleted
        }
        return state
      })
    ))
  }
  render(){
    const TodoList = this.state.todos.map(todos =>
      <TodoItems key={todos.id} todoItem={todos} handleOnChange={this.handleOnChange}/>);
    return (
      <div>
        {TodoList}
      </div>
    )
  }
}

export default Todos
