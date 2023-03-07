import React from 'react';
function Person({person}){
    return(
        <div>
        <h1>iam {person.name}, iam {person.age} old, and my skill is {person.skill}</h1>
        </div>
    )
}
export default Person