import React from "react";

class ApiComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(a => a.json())
            .then(b => this.setState({ data: b }));
    }
    render() {
        return (<>
            {
                this.state.data.map(n => <div key={n.id} className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{n.userId}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{n.id}</h6>
                        <p className="card-text">{n.title}</p>
                        <a href="#" className="card-link">Visit Us</a>
                        <a href="#" className="card-link">Recommend Us</a>
                    </div>
                </div>)
            }
        </>)
    }
}

export default ApiComp;