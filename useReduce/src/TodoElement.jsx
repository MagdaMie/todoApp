import { ACTIONS } from './App.jsx'

const TodoElement = ({name, completed, id, dispatch}) => {
    return(
        <div>
             <h4 style={{color: completed? '#AAA' : 'white'}}>{name}</h4>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload:{id: id}})}>Toggle</button>
            <button>Delete</button>
        </div>
    ) 
}

export default TodoElement