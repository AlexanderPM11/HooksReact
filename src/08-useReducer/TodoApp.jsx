import { AddTodo } from "./AddTodo"
import { ListItem } from "./ListItem";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {

    const { todos, allTodo, pendingTodo, onNewTodo, onDeleteTodo, onToggleTodo } = useTodos();




    return (
        <>
            <h1>
                TodoApp: {allTodo()}
                <small> Pendientes: {pendingTodo()}
                </small>
            </h1>

            <div className="row">
                <div className="col-7">
                    <ListItem
                        todos={todos}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <AddTodo onNewTodo={onNewTodo} />
                </div>
            </div>

        </>
    );
}

