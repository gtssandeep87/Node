function LogComp(props) {
    return (<>
        <h1 style={{ backgroundColor: 'blue', color: 'yellow' }}>Log({props.num})={Math.log(props.num)}</h1>
    </>)
}

export default LogComp;