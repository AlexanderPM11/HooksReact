import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setuser } = useContext(UserContext);
    console.log(user)
    return (
        <>
            <h1>LoginPage </h1>
            <pre>
                {JSON.stringify(user)}
            </pre>

            <button
                onClick={() => {
                    setuser(
                        {
                            id: 12,
                            name: 'Alexnader',
                            lastname: "Polanco Moreno"
                        }
                    );

                }}
                className="btn btn-primary"
            >
                Set User

            </button>
        </>
    )
};