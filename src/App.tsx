import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import ContentBody from "./components/ContentBody/ContentBody";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="container">
      <Header />
      <ContentBody />
    </div>
  );
}

export default App;
