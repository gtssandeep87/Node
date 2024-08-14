import React from "react";

var newData = {
    data: 'This is some data injected by HOC!....'
}

var myHOC = ComposedComponent =>
    class extends React.Component {
        componentDidMount() {
            this.setState({ data: newData.data });
        }
        render() {
            return (<>
                <ComposedComponent {...this.props} {...this.state} />
            </>)
        }
    }

class MyComponent extends React.Component {
    render() {
        return (<>
            <h1>{this.props.data}</h1>
        </>)
    }
}

export default myHOC(MyComponent);