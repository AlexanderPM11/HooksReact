import { UserContext } from "./context/UserContext";
import { useContext } from "react";
export const AboutPage = () => {

     const { user, setuser } = useContext(UserContext);
    return (
        <>
            <h1>AboutPage</h1>
            <pre>
                {JSON.stringify(user)}
            </pre>
        </>
    )
};