import { useState } from 'react';
import Protypes from "prop-types"

export const AddTodo = ({ onNewTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue.length <= 1)  return;
        const newTodo = {
            id: new Date().getTime(),
            desciption: inputValue,
            done: false,
        };
       
        onNewTodo(newTodo);
        setInputValue(''); // Limpiamos el input después de enviar
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="form-control"
                placeholder="¿Qué hay que hacer?"
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    );
};

AddTodo.propTypes = {
    onNewTodo: Protypes.func.isRequired
}
