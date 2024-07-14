import { createSlice } from "@reduxjs/toolkit";


// creates action and reducers
// takes in an object with the slice name and initital state

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action) => {
            const newTodo:Todo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }

            return [...state, newTodo]
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.title !== action.payload.title);
        },
        markComplete: (state, action) => {
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        },

    }
})

// 
export const { addTodo, removeTodo, markComplete } = todoSlice.actions;


// export the reducer created from the slice to use in the store configuration 

export default todoSlice.reducer; 