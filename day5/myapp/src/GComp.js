function GComp(props) {
    return (<>
        <h1>Iam Child</h1>
        <br />
        <h1>{props.a}</h1>
        <br />
        <h1>{props.b}</h1>
    </>)
}

export default GComp;