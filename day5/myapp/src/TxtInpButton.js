import { useRef } from "react";

function TxtInpButton(props) {
    const inp = useRef(null);
    const onButtonClick = () => {
        inp.current.focus();
    }
    return (
        <>
            Name:<input type="text" placeholder="enter name" onBlur={onButtonClick} /><br />
            Email:<input type="text" placeholder="enter email" /><br />
            Mobile:<input type="text" ref={inp} placeholder="enter mobile" /><br />
            SSN:<input type="text" placeholder="enter ssn" /><br />
            Passport ID:<input type="text" placeholder="enter passportid" /><br />
            <button onClick={onButtonClick}>Test Ref</button>
        </>
    )
}

export default TxtInpButton;