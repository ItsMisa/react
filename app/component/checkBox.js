/**
 * 复选框
 */

import React,{Component} from 'react';
import CheckBox from '@material/react-checkbox';
function getDateArr(num) {
  let arr = [];
  num = num || 7;
  for(let i = 1;i<num+1;i++){
    arr.push({
      id: i,
      date: `星期${i}`
    })
  }
  return arr;
}
class CheckBoxComponent extends Component{
  constructor(config){
    super(config);
    this.state = {checked:false}
    this.change = this.change.bind(this);
  }
  componentWillMount(){
  }

  change(e){
    console.log(e.target.id)
    console.log(e.target.checked)
    this.setState({
    checked: e.target.checked,
    indeterminate: e.target.indeterminate
   })
   this.props.onChange({checkId:e.target.id,checked:e.target.checked})
  }
  render(){
    return(
      <React.Fragment>
        <li>
        <CheckBox 
        checked = {this.state.checked}
        indeterminate = {false}
        nativeControlId={this.props.id}
        onChange = {this.change}
        />
        <label htmlFor={this.props.id}>{this.props.data}</label>
        </li>
      </React.Fragment>
    )
  }
}

export default class App extends Component{
  constructor(){
    super();
    this.state = {checkArr:[]};   // 1,2,3,4,5
    this.getCheckDetail = this.getCheckDetail.bind(this);
    this.dataList = getDateArr();
  }
  //获取选择的选项
  getCheckDetail(value){
    this.setState(({checkArr})=>{
      if(value.checked && !checkArr.includes(value.checkId)){
        checkArr.push(value.checkId)
      }else if(!value.checked){
        checkArr.splice(checkArr.indexOf(value.checkId));
      }
    })
  }
  render(){
    return(
      <div>
        <ul>
        {this.dataList.map((data)=>
        <CheckBoxComponent data={data.date} key={data.id} id={data.id}
          onChange={value=>{this.getCheckDetail(value)} }
          />
        )}
        </ul>
      </div>
    )
  }
}
