import React from "react";

class EComp extends React.Component {
    render() {
        return (<>
            <h1 style={{ backgroundColor: 'rebeccapurple', color: 'chartreuse' }}>This is Child Component</h1>
            <br />
            <h1>{this.props.a}</h1>
            <br />
            <h1>{this.props.b}</h1>
        </>)
    }
}

export default EComp;