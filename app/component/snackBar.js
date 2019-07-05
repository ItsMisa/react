import React,{Component} from 'react';
import {Snackbar} from '@material/react-snackbar';
export default class MySnackBar  extends Component{
  render(){
    return(
      <Snackbar message="Click me" actionText="confirm"/>
    )
  }
}