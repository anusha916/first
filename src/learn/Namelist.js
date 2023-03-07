/*import React from 'react';
function Namelist(){
    const names=["clark","diana","bruce"]
    const nameslist=names.map(name=><h1>{name}</h1>)
    return (
        <div>
            {nameslist}
        </div>
    )
}
export default Namelist*/
import React from 'react';
import Person from './Person';
function Namelist()
{
    const names=[
        {
            id:1,
            name:"clark",
            age:25,
            skill:"html"
        },
        {
            id:2,
            name:"diana",
            age:22,
            skill:"css"
        },
        {
            id:3,
            name:"bruce",
            age:30,
            skill:"js"
        }
    ]
    const personlist=names.map(person =><Person key={names.id} person={person}/>)
    return <div>{personlist}</div>
}
export default Namelist;
