import React, {useState} from 'react';
import './App.css';
import Message from './components/Message'
import Title from './components/Title';

function App() {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="App">
      <div className= {hovered ? 'card2': 'card'} onMouseEnter={() => {setHovered(true)}} onMouseLeave ={() => {
        setHovered(false)
      }}>
        <Title/>  
        <Message/>
      </div>
    </div>
  );
}

export default App;
