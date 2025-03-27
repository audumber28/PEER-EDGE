import React, { useState, useEffect, useRef } from 'react';
import { Send, Image, X } from 'lucide-react';

const ChatMessenger = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John',
      text: 'Hey Jane, it\'s me in the prod!',
      timestamp: '17:20',
      avatar: null
    },
    {
      id: 2,
      sender: 'Jane',
      text: 'heyy john!',
      timestamp: '17:21',
      avatar: null
    },
    {
      id: 3,
      sender: 'Jane',
      text: 'this is me irl',
      timestamp: '17:21',
      image: '/api/placeholder/200/200',
      avatar: null
    },
    {
      id: 4,
      sender: 'Jane',
      text: 'hey john!',
      timestamp: '17:21',
      avatar: null
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      sender: 'John',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: null
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate a response
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        sender: 'Jane',
        text: `You said: ${newMessage}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: null
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col">
      {/* Header */}
      <div className="bg-[#1E1E1E] p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/api/placeholder/40/40" 
            alt="Profile" 
            className="rounded-full w-10 h-10"
          />
          <div>
            <div className="text-white font-semibold">Jane Doe</div>
            <div className="text-gray-400 text-xs">Online</div>
          </div>
        </div>
        <button className="text-white">
          <X size={24} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${
              message.sender === 'John' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className={`
              max-w-[70%] 
              ${message.sender === 'John' 
                ? 'bg-blue-600 text-white' 
                : 'bg-[#2C2C2C] text-white'}
              p-2 rounded-lg
            `}>
              {message.image ? (
                <img 
                  src={message.image} 
                  alt="Shared" 
                  className="max-w-full rounded-lg mb-2"
                />
              ) : null}
              <div>{message.text}</div>
              <div className="text-xs text-gray-300 text-right mt-1">
                {message.timestamp}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-[#1E1E1E] p-4 flex items-center space-x-2">
        <button className="text-gray-400">
          <Image size={24} />
        </button>
        <input 
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="
            flex-grow 
            bg-[#2C2C2C] 
            text-white 
            p-2 
            rounded-lg 
            focus:outline-none
          "
        />
        <button 
          onClick={handleSendMessage}
          className="bg-blue-600 text-white p-2 rounded-full"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatMessenger;