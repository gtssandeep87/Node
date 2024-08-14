import React from "react";
import authContext from "./AuthContext";

class Login extends React.Component {
    static contextType = authContext;
    render() {
        return (<>
            <h1>Please Click On Login To Go to our website</h1><br />
            <button onClick={this.context.login}>Login</button>
        </>)
    }
}
export default Login;