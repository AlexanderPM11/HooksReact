import PropTypes from 'prop-types';

export const Item = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <li 
             onClick={() => {
                onToggleTodo(todo)
            }}
                className={"list-group-item  d-flex justify-content-between Container-todo-description" +
                (todo.done ? " doneTodo" : "")
                }>
                <div className=''>
                    <span
                       
                        className={"align-self-center " + (todo.done ? " text-decoration-line-through " : "")}

                    >{todo.desciption}</span>
                </div>

                <button
                    onClick={() => {
                        onDeleteTodo(todo)
                    }}
                    className="btn btn-outline-danger">
                    Borrar
                </button>
            </li>
        </>
    )
};

Item.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired

};