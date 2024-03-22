import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer"
import { addLocalStorage, readLocalStorage } from "../08-useReducer/localStogeCrud";


export const useTodos = () => {
    const init = () => {
        return readLocalStorage("todos")
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        addLocalStorage("todos", todos)
    }, [todos])

    const onNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    };
    const onDeleteTodo = (todo) => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: todo
        }
        dispatch(action)
    };
    const onToggleTodo = (todo) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: todo
        }
        dispatch(action)
    };

    const allTodo = () =>{
        return todos.length;
    }
    const pendingTodo = () =>{
        return todos.filter ( tod => !tod.done).length;
    }

    return {

        todos,
        allTodo,
        pendingTodo,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo
    }
}