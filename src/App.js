import React from 'react';
import './index.css';
import JoinBlock from './components/JoinBlock';
import socket from './socket';


function App() {
  const [state, dispatch] = React.useReducer(first, second, third)
  return (
    <div className="wrapper">
      <JoinBlock />
    </div>
  );
}

export default App;
