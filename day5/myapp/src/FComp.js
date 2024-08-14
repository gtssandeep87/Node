import { useEffect, useState } from "react";
import GComp from "./GComp";

function FComp(props) {
    const [a, SetA] = useState('Iam Coming from par fun comp');
    const [b, SetB] = useState(10);
    useEffect(() => {
        setTimeout(() => {
            SetA("Well Iam Still from parent");
            SetB(20);
        }, 5000);
    }, []);

    return (<>
        <h1>Iam a parent function</h1>
        <br />
        <GComp a={a} b={b} />
    </>)
}

export default FComp;