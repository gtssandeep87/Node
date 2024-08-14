function AComp(props) {
    const i = true;
    return (<>
        <p>{i ? <span>Hello</span> : <span>False</span>}</p>
        <ul style={{ listStyleType: 'none' }}>
            {
                ['Newton', 'Raman', 'Ramanujam', 'Bose', 'Chandra']
                    .map(n => <li key={n}>{n}</li>)
            }
        </ul>
        <br />
        <select>
            {
                ['Nuclear Physics', 'Electronics', 'Geo Physics', 'Nano Technology', 'AI&ML']
                    .map(n => <option key={n}>{n}</option>)
            }
        </select>
        <table border="1">
            {
                [
                    { id: 1, name: 'Jeevan' },
                    { id: 2, name: 'John' },
                    { id: 3, name: 'Kiran' },
                    { id: 4, name: 'Ali' },
                    { id: 5, name: 'Markus' }
                ].map(n => <tr key={n.id}><td><button style={{ backgroundColor: 'ButtonShadow' }}>{n.id}</button></td><td>{n.name}</td></tr>)
            }
        </table>
        <br />
        <ol style={{ accentColor: 'red', color: 'red', backgroundColor: 'black' }}>
            {
                ['Nuclear Physics', 'Electronics', 'Geo Physics', 'Nano Technology', 'AI&ML']
                    .map(n => <option key={n}>{n.toUpperCase()}</option>)
            }
        </ol>

    </>)
}

export default AComp;