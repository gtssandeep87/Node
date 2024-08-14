import React from "react";
import Portal from "./Portal";

class PortalTester extends React.Component {
    state = {
        on: false
    }
    toggle = () => {
        this.setState({ on: !this.state.on });
    }
    render() {
        const { on } = this.state;
        return (<>
            <header>Welcome to React Portals!</header>
            <React.Fragment>
                <button onClick={this.toggle}>Toggle Portals</button>
                <Portal>
                    {
                        on ? <h1>This is portal</h1> : null
                    }
                </Portal>
            </React.Fragment>
        </>)
    }

}

export default PortalTester;
