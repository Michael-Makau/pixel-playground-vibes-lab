
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

const AnimatedHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  const letters = "MICHAEL MAKAU".split('');
  
  return (
    <div className="relative flex flex-col items-center mb-8">
      <h1 
        className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {letters.map((letter, index) => (
          <span 
            key={index}
            className={cn(
              "inline-block transition-all", 
              letter !== " " ? "hover:text-hotPink hover:animate-bounce" : "",
              isHovered && letter !== " " ? 
                index % 3 === 0 ? "text-hotPink" : 
                index % 3 === 1 ? "text-electricBlue" : "text-sunshineYellow"
              : ""
            )}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>

      <p className="gradient-text text-xl md:text-3xl font-semibold mt-2 flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-sunshineYellow animate-sparkle" />
        Creative Universe
        <Sparkles className="w-6 h-6 text-hotPink animate-sparkle" />
      </p>

      {/* Floating emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["✨", "🎨", "💻", "🚀", "💡"].map((emoji, index) => (
          <div
            key={index}
            className="emoji-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              opacity: 0.6,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedHeader;
