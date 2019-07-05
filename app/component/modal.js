import React,{ Component } from 'react';

class Modal extends Component{
  constructor(config){
    super(config);
    this.state = {visible: false}
  }
  onConfirm(){
    this.setState({visible: false})
  }
  onCancel(){
    this.setState({visible: true})
  }
  render(){
    const {text,btnArr,show} = this.props; 
    let visible = this.state.visible || show;
    let newStyles = Object.assign({},{display:'none'},{display:visible?'block':'none'});
    return (
      <div className="u3compo-popup" style={newStyles}>
         <div className="u3-popup-cont">{text}</div>
         <div className="u3-button-list">
           {btnArr.map(item=>(
              <button key={item.type} onClick={ () => {item.type == 1?this.onConfirm:this.onCancel}}>{item.btnText}</button>
           ))}
         </div>
      </div>
    )
  }
}

export default Modal;