import React from "react";

class Formcomp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            email: '',
            obj: ''
        }
    }
    render() {
        return (<>
            <form onSubmit={(e) => {
                e.preventDefault();

                var obja = {
                    id: this.state.id,
                    name: this.state.name,
                    email: this.state.email
                }
                this.setState({ obj: JSON.stringify(obja) })
                //alert(JSON.stringify(obja));
            }}>
                <table width="100%">
                    <tr><td>Id</td><td><input type="number" name="id" onChange={(e) => this.setState({ id: e.target.value })} /></td></tr>
                    <tr><td>Name</td><td><input type="text" name="name" onChange={(e) => this.setState({ name: e.target.value })} /></td></tr>
                    <tr><td>Email</td><td><input type="email" name="email" onChange={(e) => this.setState({ email: e.target.value })} /></td></tr>
                    <tr><td><input type="submit" value="Send" /></td><td><input type="reset" value="cancel" /></td></tr>
                </table>

            </form>
            <br /><h1>{this.state.obj}</h1>
        </>)
    }
}

export default Formcomp;