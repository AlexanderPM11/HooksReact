
import { SimpleFormCustomHook } from "./SimpleFromCustomHook"

export const SimpleFrom = () => {


    const { username, email, onInputChange, onReset } =
        SimpleFormCustomHook();



    return (
        <>
            <h1>Formu simle</h1>
            <hr />

            <input
                className="form-control"
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                className="form-control mt-2"
                type="text"
                placeholder="alexander@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <button className="btn btn-primary mt-2" onClick={onReset}>Reset</button>
        </>
    )
}