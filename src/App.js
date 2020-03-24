import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'
import SideBar from './SideBar'
import MenuBar from './MenuBar'

function App() {
  return (
    <div className="App">
      {/*<Button variant="contained" color="primary">
        Hello World
  </Button>*/}
      <MenuBar></MenuBar>
    </div>
  );
}

export default App;
