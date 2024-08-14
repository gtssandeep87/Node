function PowComp(props) {
    return <>
        <h1 style={{ backgroundColor: 'black', color: 'red' }}>Pow({props.num},2)={Math.pow(props.num, 2)}</h1>
    </>
}

export default PowComp;