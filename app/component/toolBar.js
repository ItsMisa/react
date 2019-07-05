import React,{Component} from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import TabIndicator from '@material/react-tab-indicator';
import MaterialIcon from '@material/react-material-icon';

 class MyTabBar extends Component{
  constructor(){
    super();
    this.handleActiveIndexUpdate = this.handleActiveIndexUpdate.bind(this);
    this.state = {activeIndex:0}
  }
  handleActiveIndexUpdate(e){
      this.setState({
        activeIndex: e
      })
  }
  render(){
    return(
        <div>
        <TabIndicator active={true} icon fade><MaterialIcon icon='star' /></TabIndicator>
        </div>
        // <TabBar isRtl={false} activeIndex={this.state.activeIndex} handleActiveIndexUpdate={this.handleActiveIndexUpdate}>
        //     <Tab>
        //       <span className="mdc-tab__text-label">tab1</span>
        //     </Tab>
        //     <Tab>
        //       <span className="mdc-tab__text-label">tab2</span>
        //     </Tab>
        // </TabBar>

    )
  }
}


export default function App() {
 return(
   <MyTabBar />
 )   
}