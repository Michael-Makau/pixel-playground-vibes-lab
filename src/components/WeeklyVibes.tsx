
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart, Headphones } from 'lucide-react';

const WeeklyVibes = () => {
  const weeklyItems = [
    { type: "Song", name: "Retrowave Sunset", emoji: "🎵", color: "bg-hotPink/20 text-hotPink" },
    { type: "Tool", name: "Framer Motion", emoji: "🛠️", color: "bg-electricBlue/20 text-electricBlue" },
    { type: "Design", name: "Glassmorphism", emoji: "✨", color: "bg-violet/20 text-violet" },
    { type: "Snack", name: "Matcha KitKat", emoji: "🍫", color: "bg-limeGreen/20 text-limeGreen" },
    { type: "Mood", name: "Electric Chill", emoji: "⚡", color: "bg-sunshineYellow/20 text-sunshineYellow" },
  ];

  return (
    <div className="creative-card mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-display font-bold flex items-center gap-2">
          <Heart className="w-5 h-5 text-hotPink" />
          What I'm Loving This Week
        </h2>
        <Headphones className="w-5 h-5 text-electricBlue animate-pulse" />
      </div>
      
      <div className="grid sm:grid-cols-5 gap-3">
        {weeklyItems.map((item) => (
          <div 
            key={item.type}
            className={cn(
              "p-3 rounded-lg text-center", 
              item.color
            )}
          >
            <div className="text-2xl mb-1">{item.emoji}</div>
            <div className="text-xs uppercase tracking-wider opacity-70">{item.type}</div>
            <div className="font-medium">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyVibes;
