import { useState } from "react";
import { UserContext } from "./UserContext"

// const user = {
//     id: 12,
//     name: 'Alexnader',
//     lastname: "Polanco Moreno"
// }
export const UserProvider = ({ children }) => {

    const [user, setuser] = useState();

    // const loginUser
    return (
        <UserContext.Provider value={{ user,setuser }}>
            {children}
        </UserContext.Provider>
    );
};

