import React from "react";
import authContext from "./AuthContext";

class Logout extends React.Component {
    static contextType = authContext;
    render() {
        return (<>
            <h1>Thanks for visiting our website click on logout to go out of our site</h1><br />
            <button onClick={this.context.logout}>Logout</button>
        </>)
    }
}

export default Logout;