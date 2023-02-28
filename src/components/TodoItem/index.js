// Write your code here

import './index.css'

const TodoItem = each => {
  const {value, deleting} = each

  const {title, id} = value

  const changing = () => {
    deleting(id)
  }

  return (
    <li>
      <p>
        {title}
        <button className="button" onClick={changing}>
          Delete
        </button>
      </p>
    </li>
  )
}

export default TodoItem
