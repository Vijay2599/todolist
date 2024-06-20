import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = event => {
    // const {todoDetails} = this.props
    this.setState({editing: false})
    // Call a function to save updated title (not implemented in this code)
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    const vijay = updatedTitle === '' ? todoDetails.title : updatedTitle
    return (
      <li className="todo-item">
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSave} type="button">
              Save
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleComplete(todoDetails.id)}
            />
            <div className="title-container">
              <p
                className={todoDetails.completed ? 'title completed' : 'title'}
              >
                {vijay}
              </p>
            </div>
            <div>
              <button
                onClick={this.handleEdit}
                type="button"
                className="edit-buts"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todoDetails.id)}
                type="button"
                className="edit-buts"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
