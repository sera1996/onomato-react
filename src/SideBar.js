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
const Component = () => {
  const {height,width} = useWindowDimensions();
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
class SideBar extends React.Component{
  componentDidMount(){
    this.props.readEvents()
  }
  renderEvents(){
    return _.map(this.props.events,event => (
      console.log(event.id)
    ))
  }
  render(){
    const props = this.props;
    return(
      <div>
        <VerticalTabs props = {props}></VerticalTabs>
      </div>
    )
  }
}
function VerticalTabs(props){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //console.log(props.props.events);
    return (
      <Grid>
          <div className={classes.root}>
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={2}
              indicatorColor="secondary"
              textColor="secondary"
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
          >
            {_.map(props.props.events,event=>(
              <Tab label={event.name} {...a11yProps(event.id)} />
            ))}
            {_.map(props.props.events,event=>(

              <TabPanel value={value} index = {0}>
                <Grid container spacing = {3}>
                  {_.map(event.onomatopoeium,onomato => (
                    console.log(onomato.name)
                  ))}
                </Grid>
              </TabPanel>
            ))}
            {/*{console.log(props.props.events)}*/}
          </Tabs>
            {/*<TabPanel value={value} index={0}>
                <Grid container spacing = {3}>
                    <Grid item xs={3}>
                        <MediaCard title="さらさら" description = "湿り気や粘り気がない様子。滑らかで好ましい程度に乾燥している様子。"/>
                    </Grid>
                    <Grid item xs={3}>
                        <MediaCard title="すべすべ"/>
                    </Grid>
                    <Grid item xs={3}>
                        <MediaCard title="つるつる"/>
                    </Grid>
                </Grid>
            </TabPanel>
            */}
          </div>
      </Grid>
    );
}
const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = ({readEvents})
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);