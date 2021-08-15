import React, {useState} from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState<string>('');

  const inputHandler = (event: any) => {
    setTitle(event.target.value);
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      <label htmlFor="input-name">Введите имя</label>
      <input id="input-name" onInput={inputHandler} />
    </div>
  );
}

export default App;
