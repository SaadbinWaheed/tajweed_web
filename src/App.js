
import quran from "./quran.jpg";
import './App.css';
import React from "react"
import QaidaTable from "./components/qaidaTable"
import ArabicButton from './components/arabicButton';
import Navigation from "./components/navigation";
import ReactRoundedImage from "react-rounded-image";


function App() {

 var arr = ["A","B","C","D"]
  return (

    <div className="App">
      <Navigation/> 
      <header className="App-header">
      <ReactRoundedImage 
      image={quran} 
      imageWidth="60"
      imageHeight="60"
      roundedSize="5.9"/>
       DIGITAL QAIDA
      </header>
     <QaidaTable/>
    </div>
    
  );
}

export default App;
