// ChatApp.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pusher from 'pusher-js';
import axios from "axios";


const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const ChatContainer = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const Message = styled.div`
  padding: 5px;
  border-bottom: 1px solid #ddd;
`;

const ChatInputContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const Chat = () => {
  const [message, setMessage] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async () => {

     console.log(message)
    if (message.trim() !== '') {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/chat/${3}`,{
          message: message
         },
        {
           headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
             }
          }
        );
        console.log('Message sent successfully:', response.data);

      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    var pusher = new Pusher('52b2018288eee427f38d', {
      authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',
      cluster: 'sa1',
      encrypted: false,
      auth: {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    });

    var channel = pusher.subscribe(`private-conversation.${user.id}`);

    channel.bind('message.posted', function (data) {
      console.log(data);
    });
  }, []);

  return (
    <CenteredContainer>
      <ChatContainer>
        <ChatHeader>Slack Chat</ChatHeader>
        <ChatMessages>
          {/* {messages.map((message, index) => (
            <Message key={index}>{message}</Message>
          ))} */}
        </ChatMessages>
        <ChatInputContainer>
          <Input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </ChatInputContainer>
      </ChatContainer>
    </CenteredContainer>
  );
};

export default Chat;
