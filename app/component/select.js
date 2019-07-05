import React,{Component} from 'react';
// const chosen = require('../../lib/chosen/chosen.jquery');
class Chosen extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.$el = $(this.el);
    console.log('el....')
    console.log(this.$el)
    this.$el.chosen();
    this.handleChange = this.handleChange.bind(this);
    this.$el.on('change',this.handleChange);
  }
  componentWillUnmount()      {
    this.$el.off('change', this.handleChange);
    this.$el.chosen('destroy');
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render(){
    return(
      <div>
        <select ref={el=> this.el = el}></select>
      </div>
    )
  }
}
export default function Example() {
  return(
    <Chosen onChange={value=>{console.log(value)}}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </Chosen>
  )
  
}