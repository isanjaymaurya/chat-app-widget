import React, { useState } from 'react';
import './App.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-widget">
      <button className="chat-button" onClick={toggleChat}>
        {isOpen ? "X" : "Chat"}
      </button>
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h2>Chat Widget</h2>
            <button className="close-chat" onClick={toggleChat}>
              X
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
          <input
            type="text"
            value={newMessage}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button className="send-message" onClick={sendMessage}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;