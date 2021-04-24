import React from "react";
import {useHistory} from "react-router-dom";


function Navigation ()  
{
const history = useHistory()

const goBack = () =>
 { history.goBack() }

 const goNext = () =>
 { history.push() }

return (
    <div>
        <header className = "top-Header">
  <button className ="navButton" onClick={goBack}>
   <strong> ← </strong> 
  </button>
  <button className ="navButton" onClick={goNext}>
   <strong> → </strong> 
  </button>
  </header>
  </div>
);

}


  

export default Navigation;
