import React from "react";
import AComp from "./AComp";
import BComp from "./BComp";
import MyLoginComp from "./MyLoginComp";

class NApp extends React.Component {
    render() {
        return(<>
            <h1>New Entry point</h1>
            {/* <br/>
            <AComp />
            <br/>
            <BComp /> 
            <br/>
            <CComp/> */}
             {/* <mythemeContext.Provider value={mytheme.light}>
                <Menu />
            </mythemeContext.Provider> */}

            {/* <MyLoginComp /> */}
        </>)
    }
}

export default NApp;