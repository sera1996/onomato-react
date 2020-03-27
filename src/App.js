import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'
import SideBar from './SideBar'
import MenuBar from './MenuBar'
import {connect} from 'react-redux'
import {readEvents} from './actions'
class App extends React.Component {
  componentDidMount(){
    this.props.readEvents()
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

const mapStateToProps = state => ({})
const mapDispatchToProps = ({readEvents})
export default connect(mapStateToProps, mapDispatchToProps)(App);
