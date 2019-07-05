/**
 * switch 开关组件
 */

import React,{Component} from 'react';
import Switch from '@material/react-switch';
export default class MySwitch extends Component{
  render(){
    return(
      <React.Fragment>
        <Switch 
        nativeControlId = 'my-switch'
        checked={true}
        />
        <label htmlFor='my-switch'>My Switch</label>
      </React.Fragment>
    )
  }
}