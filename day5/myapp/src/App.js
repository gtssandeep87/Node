import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <h1> Welcome to React</h1>
      <br/>
      <CompA />
      <br/>
      <CompB />
      <br/>
      <CompC />
      <br/>
      <CompD />
      <br/>
      <CompE/>
    </div>


  );
}

class CompA extends React.Component{
  render() {
    return(
    <React.Fragment>
      <h1 style={{backgroundColor: 'blue', color:'red'}}>Welcome to class Components.</h1>
    </React.Fragment>)
  }
}

const CompB = class extends React.Component {
  render() {
    const mystyle={
      backgroundColor:'red',
      color:'yellow'
    }
    return(<>
      <h2 style={mystyle}>Second class syntax of component.</h2>
    </>)
  }
}

function CompC(props){
  return(<React.Fragment>
    <h3 className='aa'>First functional Component.</h3>
  </React.Fragment>)
}

const CompD =  function(props) {
  return(<>
    <h4> Second functional Component.</h4>
  </>)
}

const CompE = (props) => {
  return(<>
    <h5>Third functional Component.</h5>
  </>)
}

export default App;
