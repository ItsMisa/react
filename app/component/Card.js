import React,{Component} from 'react';

import Card,{CardMedia,CardPrimaryContent,CardActionIcons,CardActions,CardActionButtons} from '@material/react-card';
export default class MyCard extends Component{
  render(){
    return(
      <React.Fragment>
      <Card>
        <CardPrimaryContent>
        <CardMedia square>
        <span>Fancy Image</span>
        </CardMedia>
        <CardActions>
        <CardActionButtons>
          <button>button1</button>
          <button>button2</button>
        </CardActionButtons>
        </CardActions>
        </CardPrimaryContent>
        <CardActionIcons>
          <i>stub1</i>
          <i>stub2</i>
        </CardActionIcons>
    </Card>
    </React.Fragment>
  )
  }
}