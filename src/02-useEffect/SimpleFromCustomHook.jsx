import { useEffect, useState } from "react"

export const SimpleFormCustomHook = () => {


    const [formState, setFormState] = useState({
        username: 'Alexander',
        email: 'alexander@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value })

    }
    const onReset = () => {

        setFormState({
            username: '',
            email: ''
        })

    }
    useEffect(() => {
        console.log('called');
    }, [email])

    return {
        username,
        email,
        onInputChange,
        onReset
    };
}