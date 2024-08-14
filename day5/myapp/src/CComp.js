import { useEffect, useState } from "react";

const CComp = (props) => {
    const [a, SetA] = useState(1009);
    const [b, SetB] = useState('This is a string');
    const [c, SetC] = useState(false);
    const [d, SetD] = useState({ id: 10, name: 'sanjay' });
    useEffect(() => {
        SetA(9001);
        SetB('Iam a new string');
        SetC(true);
        SetD({ id: 101, name: 'Mukesh', email: 'mukesh@yahoo.com' });
    }, []);
    return (<>
        <p>{a}</p>
        <p>{b}</p>
        <p>{c ? <p>True</p> : <p>False</p>}</p>
        <p>{JSON.stringify(d)}</p>
    </>)
}

export default CComp;
