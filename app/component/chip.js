/**
 * 可点选的标签   Chips
 */
import React, {Component} from 'react';
import {ChipSet, Chip} from '@material/react-chips';
import MaterialIcon from '@material/react-material-icon';
const setTestArr = (num)=>{
  let arr = [];
  for(let i = 0;i<num;i++){
      arr.push({
        label:`用户${i+1}`,
        id:`id${i+1}`
      })
  }
  return arr;
}
class ChipComponent extends Component{
  constructor(){
      super();
      this.state = {chips: setTestArr(2)};
      this.onKeyDown = this.onKeyDown.bind(this);
      this.handleTrail = this.handleTrail.bind(this);
  }

  handleTrail(id){
    console.log('取消标签。。。')
    console.log(id)
  }
  //输入框输入事件，自动生成标签
  onKeyDown(e){
    let label = e.target.value;
    if (!!label && e.key === 'Enter') {
      const chips = [...this.state.chips];
      const id = `id${chips.length+1}`
      chips.push({label, id});
      this.setState({chips});
      e.target.value = '';
    }
  }
  render(){
    return(
      <div>
        <input type="text" onKeyDown={this.onKeyDown}/>
      <ChipSet
      input
      updateChips = {(chips)=>{this.setState({chips})}}
      >
        {
          this.state.chips.map((item)=>
            <Chip 
            leadingIcon = {<MaterialIcon icon='face'/>}
            key={item.id} 
            id={item.id}
            label={item.label}
            trailingIcon = {<MaterialIcon icon='cancel'/>}
            handleTrailingIconInteraction = {this.handleTrail}
            /> 
          )
        }
      </ChipSet>
      </div>
    )
  }
}
export default function MyChip() {
  return(
    <ChipComponent />
  )
}