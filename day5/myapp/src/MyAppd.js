import React, { useContext } from "react";

const BContext = React.createContext();
function MyAppd(props) {
    return (
        <BContext.Provider value="This is using hooks">
            <User />
        </BContext.Provider>
    )
}

function User(props) {
    const val = useContext(BContext);
    return <h1>{val}</h1>
}

export default MyAppd;