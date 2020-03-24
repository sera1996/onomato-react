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
export default function VerticalTabs(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      <Grid>
          <div className={classes.root}>
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={50}
              indicatorColor="secondary"
              textColor="secondary"
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
          >
              <Tab label="Smoothness" {...a11yProps(0)} />
              <Tab label="Roughness" {...a11yProps(1)} />
              <Tab label="Softness" {...a11yProps(2)} />
              <Tab label="Hardness" {...a11yProps(3)} />
              <Tab label="Wetness" {...a11yProps(4)} />
              <Tab label="Dryness" {...a11yProps(5)} />
              <Tab label="Viscosity" {...a11yProps(6)} />
              <Tab label="Oiliness" {...a11yProps(7)} />
          </Tabs>
              <TabPanel value={value} index={0}>
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
              <TabPanel value={value} index={1}>
              <Grid container spacing = {3}>
                    <Grid item xs={3}>
                        <MediaCard title="がさがさ" description = "湿り気や粘り気がない様子。滑らかで好ましい程度に乾燥している様子。"/>
                    </Grid>
                    <Grid item xs={3}>
                        <MediaCard title="ざらざら"/>
                    </Grid>
                    <Grid item xs={3}>
                        <MediaCard title="でこぼこ"/>
                    </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                  Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                  Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                  Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                  Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                  Item Seven
              </TabPanel>
          </div>
      </Grid>
    );
}