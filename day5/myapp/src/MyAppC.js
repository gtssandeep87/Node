import React from "react"

//without using hooks
const AContext = React.createContext();
function MyAppC(props) {
    return (
        <AContext.Provider value="My Value From Parent">
            <User />
        </AContext.Provider>
    )
}

function User(props) {
    return (
        <AContext.Consumer>
            {val => <h1>{val}</h1>}
        </AContext.Consumer>
    )
}

export default MyAppC;