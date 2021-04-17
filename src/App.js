import logo from './logo.svg';
import './App.css';
import React from "react"
import QaidaTable from "./components/qaidaTable"

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} height={100} width={300}/>LEARNING TAJWEED 
      </header>
     <QaidaTable/>
    </div>
  );
}

export default App;
