import { useState } from "react";
import authContext from "./AuthContext";
import Login from "./Login";
import Logout from "./Logout";

function MyLoginComp(props) {
    const [auth, SetAuth] = useState(false);
    const login = () => {
        SetAuth(true);
    }
    const logout = () => {
        SetAuth(false);
    }


    return (<>
        <authContext.Provider value={{ auth: auth, login: login, logout: logout }}>
            <p>{auth ? <Logout /> : <Login />}</p>
        </authContext.Provider>
    </>)
}

export default MyLoginComp;