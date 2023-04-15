import { useState } from "react"
import TodoListItem from "./TodoListItem/TodoListItem"


const TodoList = (props) => {
    const { list, deleteItem } = props
    
    if(list.length <=0) {
        return(
            <center>No item to display!</center>
        )
    }
    
    return(
        <>
            {list.map((item, index) => (
                <TodoListItem
                    key={index}
                    item={item}
                    index={index}
                    onDelete={deleteItem}
                />
            ))}
        </> 
    )
}

export default TodoList