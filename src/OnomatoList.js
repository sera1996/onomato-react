import React from 'react';
import PropTypes, { resetWarningCache } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dimensions from './Dimensions'
import useWindowDimensions from './Dimensions';
import MediaCard from './MediaCard'
import Grid from '@material-ui/core/Grid';
import { render } from '@testing-library/react';
import {connect} from 'react-redux'
import {readEvents} from './actions'
import _ from 'lodash'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        className = {classes.typography}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 1000,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      width: 200,
    },
    typography:{
      width: 1100
    }
  }));

class OnomatoList extends React.Component{
    componentDidMount(){
        this.props.readEvents()
    }
    render(){
        const props = this.props;
        return(
            <OnomatoComponent props={props.events}/>
        )
    };
}

function OnomatoComponent(props){
    const [value, setValue] = React.useState(0);
    return(
        _.map(props.events,event=>(
            <TabPanel value={value} index={event.id-1}>
              <Grid container spacing ={3}>
                {_.map(event.onomatopoeium,onomato => (
                  <Grid item xs = {3}>
                    <MediaCard title={onomato.name} description = {onomato.description} />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))
    )


}
const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = ({readEvents})
export default connect(mapStateToProps, mapDispatchToProps)(OnomatoList);