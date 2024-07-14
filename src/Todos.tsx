import { useDispatch, useSelector } from "react-redux";
import { removeTodo, markComplete } from "./redux/todoSlice";
import { useMemo } from "react";


const TodoList = () => {

    // useSelector hook takes in a function that retrievs the state from store

    const todos = useSelector((state) => state.todos)


    const dispatch = useDispatch();

    const removeSelected = (title: string) => {

        // dispatch takes in the remove todo action which takes a payload of the title string 
        dispatch(removeTodo({
            title: title
        }));
    };

    const completeSelected = (id: string) => {
        dispatch(markComplete({ id }));
    };


    const numberOfCompleted = useSelector((state) =>
        state.todos.filter((todo) => todo.completed === true))

    return (
        <div>
            {
                todos && todos.map((item: itemType) => (
                    <div
                        key={item.id}

                    >
                        <h2
                            onClick={() => removeSelected(item.title)}
                            style={{ cursor: 'pointer' }}
                        >{item.title}


                        </h2>
                        <button
                            onClick={() => completeSelected(item.id)}
                        >{item.completed ? 'Complete' : 'Pending'}</button>
                    </div>
                ))
            }


            <h1
                onClick={() => console.log(numberOfCompleted())}
            >Completed items are : {numberOfCompleted.length}</h1>
        </div>
    )
}

interface itemType {
    id: string,
    title: string,
    completed: boolean
}



export default TodoList; 