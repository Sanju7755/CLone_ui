// components/ChatBox.js

import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function ChatBox() {
    return (
      <div className="bg-black flex flex-col  justify-center p-8">
        {/* First Message */}
        <div className="flex items-start mb-4 space-x-4 w-1/2">
          {/* Emoji outside */}
          <span role="img" aria-label="angel-face" className="text-3xl">🦖</span>
          {/* Message */}
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-full">
                <TextGenerateEffect words="🤔 Imagine having an assistant with memory, how cool would that be? And that's just the beginning. We are also working on enabling the assistant to learn and evolve autonomously." className="text-white font-normal"/>         
          </div>
        </div>
  
        {/* Second Message */}
        <div className="flex items-start mb-4 space-x-4 w-1/2">
          {/* Emoji outside */}
          <span role="img" aria-label="angel-face" className="text-3xl">🦖</span>
          {/* Message */}
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-full">
          <TextGenerateEffect words="Sounds crazy, right? 😎😋 The upcoming features will change the way you interact with AI, making it an exciting journey" className="text-white font-normal"/>    
          </div>
        </div>
      </div>
    );
  }