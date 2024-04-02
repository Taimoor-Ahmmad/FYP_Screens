import React from 'react';
import { FaUserCircle, FaPaperPlane } from 'react-icons/fa';

const ChatScreen = () => {
  const chatHistory = [
    { sender: 'John Doe', message: 'Hello there! How can I help you today?' },
    { sender: 'Jane Smith', message: 'Hi John! I have a question about the project deadline.' },
  ];

  const contacts = ['Taimoor Ahmad', 'Muhammad Dawood Rizwan','Ahmad Ali','Maqbool Don','Laraib Don']; // Add more contacts as needed

  return (
    <div className="bg-gray-900 text-gray-300 p-4 h-screen flex">
      {/* Side Panel */}
      <div className="hidden lg:flex w-1/5 rounded-2xl bg-gray-800 p-4 overflow-y-auto">
        {/* <h2 className="text-xl font-bold mb-4 text-gray-100">Contacts</h2> */}
        <ul className="space-y-2">
          {contacts.map((contact, index) => (
            <li key={index} className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer">
              <FaUserCircle className="mr-3" size={24} />
              {contact}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col ml-4">
        {/* Message Display Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`flex flex-col ${chat.sender === 'John Doe' ? 'items-start' : 'items-end'}`}>
              <span className="text-sm font-semibold">{chat.sender}</span>
              <div className={`bg-gray-700 p-3 rounded-xl shadow ${chat.sender === 'John Doe' ? 'rounded-br-none' : 'rounded-bl-none'}`}>
                <p className="text-gray-200">{chat.message}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Message Input Area */}
        <div className="flex items-center p-3">
          <input
            type="text"
            placeholder="Type your message here..."
            className="flex-grow bg-gray-800 p-3 rounded-full text-gray-200 focus:outline-none placeholder-gray-500"
          />
          <button className="ml-3 text-blue-400 hover:text-blue-300">
            <FaPaperPlane size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
