/*import React from 'react';
const Names=(props)=>{
    console.log(props)
    return(
        <div>
         <h1>Hello {props.name}</h1>
         <h1>{props.children}</h1>
        </div>
    );
}
export default Names*/
import React from 'react';
function Names(){
const names=["bruce","clark","diana"]
const namelist=names.map(name=>(<h1 key={name}>{name}</h1>))
return <div>{namelist}</div>
}
export default Names