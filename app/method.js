export  const yell = (PassedComponent) =>
    ({children,...props}) =>{
       <PassedComponent {...props}>children.toUpperCase()</PassedComponent>
    }
