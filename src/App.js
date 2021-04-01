import logo from './logo.svg';
import './App.css';
import React from "react"
import QaidaTable from "./components/qaidaTable"
import ArabicButton from './components/arabicButton';

function App() {

 var arr = ["A","B","C","D"]
  return (
    <div className="App">
      <header className="App-header">
      </header>
    {arr.map((val)=>{
      return <ArabicButton foo={val}/>
    })}
     <QaidaTable/>
    </div>
  );
}

export default App;
