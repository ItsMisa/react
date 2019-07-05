import React,{Component} from 'react';
import  styles from './stylel.css';
// import Mock from 'mockjs'
// // module.exports = function () {
// //     var greet = document.createElement('div');
// //     greet.textContent = greetText.greenText;
// //     return greet;
// // }
// class Greeter extends Component{
//     render(){
//         var Random  = Mock.Random;
//         var bar1 = Random.string();
//         console.log(bar1)
//         return(
//             <div className={styles.root}>
//             {bar1}
//             </div>
//         );
//        // const yell = (PassedComponent) =>
//        //      ({children, ...props}) =>{
//        //          <PassedComponent {...props}>{children.toUpperCase()}</PassedComponent>
//        //      }
//        //  const Title = (props) => <h1>{props.children}</h1>
//        //  const AngryTitle = yell(Title);
//        //  return <AngryTitle>Whatever</AngryTitle>

// }
// }
// export  default Greeter

// import React,{Component} from 'react';
// import styles from '../stylel.css'
class Dialog extends Component{
  render(){
    console.log(1111111111)
    const bar1 = '123'
    return(
      <div className={styles.root}>{bar1}</div>
    )
  }
}
export default Dialog;