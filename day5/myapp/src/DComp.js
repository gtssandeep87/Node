import React from "react";
import EComp from "./EComp";

class DComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { a: 'Iam a value from parent', b: 9878 }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ a: 'Iam modified value' })
        }, 5000);
    }

    render() {
        return (<>
            <h1>Iam a parent Component</h1>
            <br />
            <EComp a={this.state.a} b={this.state.b} />
        </>)
    }
}

export default DComp;
