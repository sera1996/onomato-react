import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 250,
    margin: '5px',
    float: 'left'
  },
  media: {
    height: 140
  },
  root2:{
      width: 250,
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root2}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/food_natto.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          詳細
        </Button>
      </CardActions>
    </Card>
  );
}