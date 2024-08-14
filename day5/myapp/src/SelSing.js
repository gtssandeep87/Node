import React from "react";
import { feRecSing } from "./MyFuns";

class SelSing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            data: ''
        }
    }

    render() {
        return (<>
            <select onChange={(e) => {
                this.setState({ a: e.target.value })
                feRecSing(this.state.a, 'dev').then(p => p.json())
                    .then(b => this.setState({ data: b }))
            }
            }>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        .map(n => <option key={n}>{n}</option>)
                }
            </select>
            <br />
            <h1>{JSON.stringify(this.state.data)}</h1>
        </>)
    }
}

export default SelSing;