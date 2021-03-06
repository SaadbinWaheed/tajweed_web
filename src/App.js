
import quran from "./quran.jpg";
import './App.css';
import React from "react"
import QaidaTable from "./components/qaidaTable"
import ArabicButton from './components/arabicButton';
import Navigation from "./components/navigation";
import ReactRoundedImage from "react-rounded-image";


function App() {

  return (

    <div className="App">
      <Navigation/> 
      <header className="App-header">
      <h1 style={{marginRight: "-0.6in"}}/> 
      <ReactRoundedImage  image={quran}  imageWidth="60"  imageHeight="60"  roundedSize="5.9"/>  
      <h1 style={{marginLeft: ".1in"}}/> 
      <strong> DIGITAL QAIDA </strong>
      </header>
     <QaidaTable/>
    </div>
    
  );
}

export default App;
