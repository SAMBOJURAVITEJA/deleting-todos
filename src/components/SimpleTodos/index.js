import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {initialTodosList1: initialTodosList}

  deleting = id => {
    this.setState(prevState => ({
      initialTodosList1: prevState.initialTodosList.filter(
        each => each.id !== id,
      ),
    }))
  }

  render() {
    const {initialTodosList1} = this.state

    return (
      <div className="bg-container">
        <div className="list-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="list-container">
            {initialTodosList1.map(each => (
              <TodoItem key={each.id} value={each} deleting={this.deleting} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
