function RootComp(props) {
    return <>
        <h1 style={{ backgroundColor: 'yellow', color: 'red' }}>Sqrt({props.num})={Math.sqrt(props.num)}</h1>
    </>
}

export default RootComp;
