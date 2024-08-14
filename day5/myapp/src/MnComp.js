import React from "react";
import LogComp from "./LogComp";
import RootComp from "./RootComp";
import PowComp from "./PowComp";

class MnComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num: 0 }
    }

    render() {
        return (<>
            <select onChange={(e) => this.setState({ num: e.target.value })}>
                {
                    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
                        .map(n => <option key={n} value={n}>{n}</option>)
                }
            </select>
            <br />
            <LogComp num={this.state.num} />
            <RootComp num={this.state.num} />
            <PowComp num={this.state.num} />

        </>)
    }
}

export default MnComp;