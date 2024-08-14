import React from "react";

class BComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1009,
            b: 'This is a string',
            c: false,
            d: { id: 1019, name: 'Satish', email: 'sat@yahoo.com' },
            e: ['Newton', 'Raman', 'Ramanujam', 'Bose', 'Chandra']
        }
    }
    componentDidMount() {
        this.setState({ a: 9001 });
        this.setState({ b: 'Godzilla Vs Kingkong' });
        this.setState({ c: true });
        this.setState({ d: { id: 1119, name: 'Sakshi', email: 'sakshi@yahoo.com' } })
    }
    render() {
        return (<>
            <p>{this.state.a}</p>
            <p>{this.state.b}</p>
            <p>{this.state.c ? <span>True</span> : <span>False</span>}</p>
            <p>{JSON.stringify(this.state.d)}</p>
            {
                this.state.e.map(n => <div style={{ borderWidth: '2px' }} key={n}>{n}</div>)
            }
        </>)
    }
}

export default BComp;