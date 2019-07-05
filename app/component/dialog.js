import React, {Component} from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@material/react-dialog';
import MySwitch from './switch';
import MySnackBar from './snackBar';
class MyDialog extends Component{
  constructor(config){
    super(config);
    this.state = {value:'父文本',error:''}

  }
  componentDidCatch(error, info){
    this.setState({value: '文本不能被子容器改变',error:'文本不能被子容器改变'});
  }
  render(){
    return(
          <Dialog open={true}>
          <DialogTitle>My Dialog</DialogTitle>
          <DialogContent>
            <MySwitch />
            <MySnackBar />
          </DialogContent>
          <DialogFooter>
            <DialogButton action='dismiss'>Dismiss</DialogButton>
            <DialogButton action='accept' isDefault>Accept</DialogButton>
          </DialogFooter>
        </Dialog>
    )
  }
}

export default function App() {
  return (
   <MyDialog /> 
  )
}