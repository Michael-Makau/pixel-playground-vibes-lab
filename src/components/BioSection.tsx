
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart, Zap, Sparkles } from 'lucide-react';

const BioSection = () => {
  return (
    <div className="creative-card mb-12 relative overflow-hidden group">
      <div className="absolute -right-4 -top-4 text-8xl opacity-10 transition-all duration-500 group-hover:scale-125 group-hover:opacity-20 group-hover:rotate-12">
        🧑‍🎨
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 items-center z-10 relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-hotPink via-electricBlue to-violet flex items-center justify-center p-1 animate-pulse">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl">
            👋
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-display font-bold mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-hotPink" />
            <span>Hey, I'm Michael!</span>
          </h2>
          
          <p className="text-lg leading-relaxed mb-3">
            Creative coder, vibe curator, and pro-level emoji dropper. 
            I make pixels dance, pages pop, and ideas come to life. 
            Let's get weird—in a good way.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {['creative', 'coder', 'design', 'vibes'].map((tag, i) => (
              <span 
                key={i} 
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium",
                  i % 4 === 0 ? "bg-hotPink/20 text-hotPink" : 
                  i % 4 === 1 ? "bg-electricBlue/20 text-electricBlue" : 
                  i % 4 === 2 ? "bg-sunshineYellow/20 text-sunshineYellow" :
                  "bg-violet/20 text-violet"
                )}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex items-center gap-2 text-muted-foreground">
        <Zap className="w-4 h-4 text-sunshineYellow" />
        <span className="text-sm">Currently bringing good vibes to the digital world</span>
      </div>
    </div>
  );
};

export default BioSection;
