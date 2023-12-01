import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';

const OpenChat = () => {
  const [messages, setMessages] = useState([]);
 

  


  useEffect(() => {
    const pusher = new Pusher('52b2018288eee427f38d', {
        cluster: 'sa1',
        encrypted: true,
        logToConsole: true,
      });
    const channel = pusher.subscribe('chat');

    pusher.connection.bind('connected', () => {
        console.log('Pusher connected');
    });

   
    
    channel.bind('message.sent', (data) => {
        console.log(data);
    });

    return () => {
        // pusher.unsubscribe('chat');
        // pusher.disconnect();
    };
});


  return (
    <div>
     hello
    </div>
  );
};

export default OpenChat;
