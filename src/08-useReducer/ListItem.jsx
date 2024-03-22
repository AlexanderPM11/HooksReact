import { Item } from "./Item";
import PropTypes from 'prop-types';

export const ListItem = ({ todos = [] , onDeleteTodo ,onToggleTodo}) => {
    return (
        <>
            <ul className="list-group">
                {
                    todos.map((todo) => {
                        return <   Item
                            onDeleteTodo =  {onDeleteTodo}
                            onToggleTodo =  {onToggleTodo}
                            key={todo.id}
                            todo={todo} />
                    })
                }

            </ul>
        </>
    )
};

ListItem.propTypes = {
    todos: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired
};