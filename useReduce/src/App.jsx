import { useReducer, useState } from "react"
import TodoElement from "./TodoElement"

const ACTIONS = {
    ADD_TODO: 'add_todo',
    TOGGLE_TODO: 'toggle'
}

function App() {
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)]
      case ACTIONS.TOGGLE_TODO:
        return 
    }
  }

  function newTodo(name) {
    return {
      id: Date.now(),
      name: name,
      completed: false 
    }
  }

  const[todos, dispatch] = useReducer(reducer, [])
  const[name, setName] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name}})
    return setName('')
  }
 
  console.log(todos);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </form>

    {todos.map(todo => 
    <TodoElement 
    id={todo.id}
    key={todo.id}
    name={todo.name}
    completed={todo.completed}/>)
    }
    </>
  )
}

export default App
