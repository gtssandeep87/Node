import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"


const VehComp = () => {
    const [data, SetData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(a => a.json())
            .then(b => SetData(b));
    }, []);


    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    return (<>
        <button onClick={() => dispatch({ type: "car", val: data })}>Cars</button>
        <button onClick={() => dispatch({ type: "bike" })}>Bikes</button>
        <br /><hr /><br />
        <pre>{JSON.stringify(counter.vehicle)}</pre>
        <br /><hr /><br />
    </>)
}

export default VehComp;