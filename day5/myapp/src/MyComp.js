import React from "react";

class MyComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true }
    }

    del = () => {
        this.setState({ show: false });
    }

    render() {
        let myHead;
        if (this.state.show) {
            myHead = <Child />
        }
        return (<>
            {myHead}
            <button onClick={this.del}>Delete</button>
        </>)
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert('Unmounted');
    }
    render() {
        return (<>
            <h1>Test Component</h1>
        </>)
    }
}

export default MyComp;