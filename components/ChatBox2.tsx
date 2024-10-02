// components/ChatBox.js

import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function ChatBox2() {
    return (
      <div className="bg-black flex flex-col  justify-center p-8">
        {/* First Message */}
        <div className="flex items-start mb-4 space-x-4 w-1/2">
          {/* Emoji outside */}
          <span role="img" aria-label="angel-face" className="text-3xl">😇</span>
          {/* Message */}
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-full">
                <TextGenerateEffect words="🕊️ We aim to forge a user-centric community dedicated to tech sharing, and to actively engage with this community in probing and pioneering future work paradigms" className="text-white font-normal"/>         
          </div>
        </div>
  
        {/* Second Message */}
        <div className="flex items-start mb-4 space-x-4 w-1/2">
          {/* Emoji outside */}
          <span role="img" aria-label="angel-face" className="text-3xl">😇</span>
          {/* Message */}
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-full">
          <TextGenerateEffect words="With the relentless progression of artificial intelligence capabilities, we are convinced that the communal exchange of knowledge and expertise can unlock the utmost potential for creativity and productivity in everyone. 👯👭🏻🧑‍🤝‍🧑👫🧑🏿‍🤝‍🧑🏻👩🏾‍🤝‍👨🏿👬🏿" className="text-white font-normal"/>    
          </div>
        </div>
      </div>
    );
  }