
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, Palette } from 'lucide-react';

interface MoodTile {
  emoji: string;
  label: string;
  color: string;
  description: string;
}

const MoodBoard = () => {
  const [currentMood, setCurrentMood] = useState<string>("Experimental");
  const [codingTheme, setCodingTheme] = useState<string>("Neon Cyberpunk");
  
  const moodTiles: MoodTile[] = [
    { emoji: "🔥", label: "Energetic", color: "from-hotPink to-sunshineYellow", description: "Full-power coding sessions" },
    { emoji: "✨", label: "Experimental", color: "from-electricBlue to-violet", description: "Trying new techniques & ideas" },
    { emoji: "🧠", label: "Analytical", color: "from-violet to-hotPink", description: "Deep problem-solving mode" },
    { emoji: "🌊", label: "Flowing", color: "from-electricBlue to-limeGreen", description: "In the creative zone" }
  ];
  
  const codingThemes: MoodTile[] = [
    { emoji: "🌃", label: "Neon Cyberpunk", color: "from-hotPink to-electricBlue", description: "Futuristic tech aesthetic" },
    { emoji: "🌱", label: "Nature Tech", color: "from-limeGreen to-sunshineYellow", description: "Organic digital experiences" },
    { emoji: "🎨", label: "Abstract Art", color: "from-violet to-hotPink", description: "Unexpected color combinations" },
    { emoji: "🌈", label: "Color Explosion", color: "from-sunshineYellow to-hotPink", description: "Maximum saturation!" }
  ];
  
  const weeklyExplorations = [
    "3D CSS animations",
    "Interactive SVG patterns",
    "WebGL particle systems",
    "Custom cursor effects",
    "Audio visualizations"
  ];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-2">
        <Palette className="w-6 h-6 text-limeGreen" />
        Mood Board 
        <span className="text-limeGreen">+</span> 
        <span className="gradient-text">Inspiration</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="creative-card h-full">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>Current Mood</span>
            <Sparkles className="w-4 h-4 text-sunshineYellow" />
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            {moodTiles.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setCurrentMood(mood.label)}
                className={cn(
                  "relative h-24 rounded-lg p-4 overflow-hidden transition-all duration-300",
                  "bg-gradient-to-br", mood.color,
                  currentMood === mood.label 
                    ? "ring-2 ring-white scale-105" 
                    : "opacity-70 hover:opacity-100"
                )}
              >
                <div className="absolute top-2 left-2 text-2xl">{mood.emoji}</div>
                <div className="absolute bottom-2 right-3 text-white font-medium text-sm">
                  {mood.label}
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-4 p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <span className="font-semibold">Today I'm feeling:</span> {currentMood} 
              {moodTiles.find(m => m.label === currentMood)?.emoji}
            </p>
            <p className="text-sm mt-1 text-muted-foreground">
              {moodTiles.find(m => m.label === currentMood)?.description}
            </p>
          </div>
        </div>
        
        <div className="creative-card h-full">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>Daily Coding Theme</span>
            <Sparkles className="w-4 h-4 text-electricBlue" />
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            {codingThemes.map((theme) => (
              <button
                key={theme.label}
                onClick={() => setCodingTheme(theme.label)}
                className={cn(
                  "relative h-24 rounded-lg p-4 overflow-hidden transition-all duration-300",
                  "bg-gradient-to-br", theme.color,
                  codingTheme === theme.label 
                    ? "ring-2 ring-white scale-105" 
                    : "opacity-70 hover:opacity-100"
                )}
              >
                <div className="absolute top-2 left-2 text-2xl">{theme.emoji}</div>
                <div className="absolute bottom-2 right-3 text-white font-medium text-sm">
                  {theme.label}
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-4 p-3 rounded-lg bg-muted">
            <p className="text-sm">
              <span className="font-semibold">Today's inspiration:</span> {codingTheme} 
              {codingThemes.find(t => t.label === codingTheme)?.emoji}
            </p>
            <p className="text-sm mt-1 text-muted-foreground">
              {codingThemes.find(t => t.label === codingTheme)?.description}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 creative-card">
        <h3 className="text-xl font-semibold mb-4">Weekly Explorations 🔍</h3>
        
        <div className="flex flex-wrap gap-3">
          {weeklyExplorations.map((exploration, i) => (
            <div 
              key={i}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300",
                i % 5 === 0 ? "border-hotPink/40 text-hotPink hover:bg-hotPink/10" : 
                i % 5 === 1 ? "border-electricBlue/40 text-electricBlue hover:bg-electricBlue/10" : 
                i % 5 === 2 ? "border-sunshineYellow/40 text-sunshineYellow hover:bg-sunshineYellow/10" :
                i % 5 === 3 ? "border-limeGreen/40 text-limeGreen hover:bg-limeGreen/10" :
                "border-violet/40 text-violet hover:bg-violet/10"
              )}
            >
              {exploration}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodBoard;
