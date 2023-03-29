import React from 'react'
function Form() {
    
   const handleClick=()=>{
       const a= document.getElementById("entry").value;
       console.log(a);
    }
  return (

    <div>
        <h2>Fill the form:</h2>
        <form>
        <input type="text" placeholder="Name" id="entry"></input>
        <button onClick={handleClick}>Submit</button>
        </form>
        
    
    </div>
  )
}

export default Form