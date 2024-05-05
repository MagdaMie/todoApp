const TodoElement = ({name, completed}) => {
    return(
        <div>
             <h4 style={{color: completed? '#AAA' : 'white'}}>{name}</h4>
            <button>Toggle</button>
            <button>Delete</button>
        </div>
    ) 
}

export default TodoElement