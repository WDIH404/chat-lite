import React from 'react';
import socket from './socket';
import JoinBlock from './components/JoinBlock';
import reducer from './reducer';

import './index.css';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  });

  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    });
    socket.emit('ROOM:JOIN', obj);
  };

  return <div className="wrapper">{!state.isAuth && <JoinBlock onLogin={onLogin} />}</div>;
}

export default App;
