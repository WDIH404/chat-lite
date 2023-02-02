import axios from 'axios';
import React, { useState } from 'react';
export default function JoinBlock() {
  const [roomId, setRoomId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const onEnter = ({ onLogin }) => {
    if (!roomId || !userName) {
      return alert('Введите ID комнаты и имя');
    }
    axios
      .post('/rooms', {
        roomId,
        userName,
      })
      .then(onLogin);
  };

  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        // Контроль инпута
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        // Контроль инпута
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="btn btn-success" onClick={onEnter}>
        ВОЙТИ
      </button>
    </div>
  );
}
