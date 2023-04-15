import { useState } from "react"
import "./TodoListItem.css"

const TodoListItem = (props) => {
    const { item, onDelete, index } = props
    const { title, priority } = item
    const [isChecked, setChecked] = useState(false)
    
    return(   
        <div className={`item-card ${priority}`}>
            {isChecked ? (
                <span className="material-symbols-outlined pointer" onClick={()=> setChecked(false)}>
                    select_check_box
                </span>
            ) : (
                <span className="checkbox pointer" onClick={() => setChecked(true)} />
            )}

            <div className={`card-title ${isChecked && 'strike'}`}>{title}</div>
            
            <div className="badge">{priority}</div>
            <span className="material-symbols-outlined pointer" onClick={() => onDelete(index)}>
                delete
            </span>
        </div>
    )
}

export default TodoListItem