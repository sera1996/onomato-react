import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'
import SideBar from './SideBar'
import MenuBar from './MenuBar'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      category: [],
    }
  }
  componentDidMount(){
    fetch('http://localhost:3030/categories',{
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      return response.json();
    }).then(data => console.log(data)
    );
    /*console.log()*/
  }
  render() {
    return(
    <div className="App">
      {/*<Button variant="contained" color="primary">
        Hello World
  </Button>*/}
      <MenuBar></MenuBar>
    </div>
    )
  }
}

export default App;
