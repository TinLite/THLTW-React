import React, { useEffect } from "react";
import { getProfile } from "../repositories/authentication-repository";

export const UserContext = React.createContext({
    user: null,
    setUser: () => { }
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState(undefined);
    useEffect(() => {
        getProfile().then((res) =>
            setUser(res.data.data))
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}