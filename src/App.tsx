import React, {useState} from 'react';
import Header from './components/Header/Header';
import BodyM from './components/BodyM/BodyM';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const [title, setTitle] = useState<string>('');

  const inputHandler = (event: any) => {
    setTitle(event.target.value);
  };

  return (
    <div className="container">
      <Header/>
      <BodyM/>
      <Footer/>
    </div>
  );
}

export default App;
