'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, Image, X, Link } from 'lucide-react';
import { useRouter } from "next/navigation";

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
      image: 'im1.jpg',
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

  const router = useRouter();

  const handleClick = () => {
    router.push("/Home");
  };

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRandomResponse = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    switch(randomNum) {
      case 1:
        return "oh good";
      case 2:
        return "thats interesting";
      case 3:
        return "i will look into it";
      default:
        return "ok";
    }
  };

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

    // Simulate a response with randomized replies
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        sender: 'Jane',
        text: getRandomResponse(),
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
            src="im1.jpg" 
            alt="Profile" 
            className="rounded-full w-10 h-10"
          />
          <div>
            <div className="text-white font-semibold">John Doe</div>
            <div className="text-gray-400 text-xs">Online</div>
          </div>
        </div>

        <button className="text-white" onClick={handleClick}>
          <X size={24} />
        </button>
        
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
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
                ? 'bg-green-600 text-white' 
                : 'bg-[#2C2C2C] text-white'}
              p-3 rounded-xl
              text-base  // Increased text size
            `}>
              {message.image ? (
                <img 
                  src={message.image} 
                  alt="Shared" 
                  className="max-w-full rounded-lg mb-3"
                />
              ) : null}
              <div className="text-lg">{message.text}</div>
              <div className="text-sm text-gray-300 text-right mt-2">
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
            p-3 
            rounded-lg 
            text-base
            focus:outline-none
          "
        />
        <button 
          onClick={handleSendMessage}
          className="bg-green-600 text-white p-2 rounded-full"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatMessenger;