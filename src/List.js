import React from 'react'

const List=(props)=>{
    const MyArray=[ 'Apple','Orange','Banana','Avacado' ];
  return (
    <div>
        <h2>Implementation of unordered list using react:</h2>
        <li>
            {MyArray[0]}
        </li>
        <li>
            {MyArray[1]}
        </li>
        <li>
            {MyArray[2]}
        </li>
        <li>
            {MyArray[3]}
        </li>
        <h2>Dynamic implementation of List:</h2>
        {MyArray.map(v=><li>{v}</li>)}
    </div>
        
        
    
  );
}

export default List