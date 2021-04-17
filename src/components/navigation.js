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
        <header className = "App-header">
  <button className ="navButton" onClick={goBack}>
    ←   
  </button>
  <button className ="navButton" onClick={goNext}>
  →
  </button>
  </header>
  </div>
);

}


  

export default Navigation;
