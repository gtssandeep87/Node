// Mount
// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()

// Update
// getDerivedStateFromProps()
// shouldComponentUpdate()
// render
// getSnapShotBeforeUpdate()
// componentDidUpdate()

// Unmount phase
// componentWillUnmount()

////////////
import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fav: 'red' }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ fav: 'blue' });
        }, 5000);
    }

    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log(prevstate.fav);
        return null;
    }

    componentDidUpdate() {
        console.log(this.state.fav);
    }

    render() {
        return (<>
            <div style={{ backgroundColor: this.state.fav }}>Favorite color is {this.state.fav}</div>
        </>)
    }

}





export default Header;
