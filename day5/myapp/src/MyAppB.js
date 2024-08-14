import React from "react";

const Link = () => (<div>This is a Link Component</div>)

class MyAppB extends React.Component {
    state = {
        change: true
    }
    handleChange = (e) => {
        this.setState({ change: !this.state.change })
    }
    render() {
        const { change } = this.state;
        return (<>
            <div>
                <button onClick={this.handleChange}>Change</button>
                {
                    change ? <>                <div>This div is visible bcoz the change is true</div>
                        <h1>This is H1 element in the true part</h1>
                        <Link /></>
                        :
                        <p>
                            This p element bcoz the change is false
                            <p>This yet another para in false part</p>
                            <Link />
                        </p>
                }
            </div>
        </>)
    }
}

export default MyAppB;
