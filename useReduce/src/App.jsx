import { useReducer, useState } from "react"

const ACTIONS = {
    ADD_TODO: 'add_todo'
}

function App() {
  function reducer(state, action) {

  }

  const[todos, dispatch] = useReducer(reducer, [])
  const[name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault
    dispatch({ type: ACTIONS.ADD_TODO})
    return setName('')
  }
 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </form>
    </>
  )
}

export default App
