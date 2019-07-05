import React, {Component} from 'react';
import Drawer,{
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent} from '@material/react-drawer';
import  MyChip from './chip';

class MyDrawer extends Component {
  render() {
    return (
      <Drawer>
        <DrawerHeader>
          <DrawerTitle tag='h2'> {/*defaults to h3*/}
              Inbox
            </DrawerTitle>
            <DrawerSubtitle> {/*defaults to h6*/}
              matt@email.com
            </DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent tag='main'> 
             <MyChip />
        </DrawerContent>
      </Drawer>
    );
  }
}
export default function App() {
  return(
    <MyDrawer />
  )
}