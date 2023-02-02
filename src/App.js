import React from 'react';
import './index.css';
import JoinBlock from './components/JoinBlock';
import reducer from './reducer'


function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    isAuth: false,
  });

  const onLogin = () => {
    dispatch({
      type: 'IS_AUTH',
      payload: true
    });
  }

  console.log(state);

  return (
    <div className="wrapper">
      <JoinBlock onLogin={onLogin}/>
    </div>
  );
}

export default App;
