import React, { useState, useEffect } from 'react';
import Mybot from './Mybotbckend';
import './App.css'

const App = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [localAssistantId, setLocalAssistantId] = useState('');

  useEffect(() => {
    // 1. Get the script tag element
    const scriptTag = document.querySelector('script[src*="BotEmbed.js"]');
  
    // 2. Extract configuration attributes
    // 3. Initialize the chat bot with the extracted configuration
    // Update the state accordingly
    // setLocalAssistantId(props.symbol);
  
    // ...
  
  }, []);
//my new comment
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  console.log(`${props.symbol} ${props.uid} ${props.theme}`);
  return (
    
    <div >
      <Mybot symbol={props.symbol} uid={props.uid} theme={props.theme}/>
    </div>
  );

};


export default App;
