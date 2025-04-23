
import React from 'react';
import { cn } from '@/lib/utils';
import { Rocket, Lightbulb, Zap, Sparkles } from 'lucide-react';

interface Tool {
  name: string;
  icon: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  emoji: string;
  color: string;
}

const ToolsProjects = () => {
  const tools: Tool[] = [
    { name: "p5.js", icon: "🎨", color: "bg-hotPink/20 text-hotPink" },
    { name: "CSS Animation", icon: "✨", color: "bg-electricBlue/20 text-electricBlue" },
    { name: "React", icon: "⚛️", color: "bg-sunshineYellow/20 text-sunshineYellow" },
    { name: "Tailwind CSS", icon: "🌊", color: "bg-limeGreen/20 text-limeGreen" },
    { name: "Three.js", icon: "🔮", color: "bg-violet/20 text-violet" },
    { name: "GSAP", icon: "⚡", color: "bg-hotPink/20 text-hotPink" },
  ];
  
  const projects: Project[] = [
    {
      title: "Pixel Playground",
      description: "Interactive canvas where users can create pixel art with animation",
      tags: ["p5.js", "animation", "interaction"],
      emoji: "🎮",
      color: "from-hotPink to-violet"
    },
    {
      title: "Vibes Radio",
      description: "Audio visualizer that responds to music with colorful patterns",
      tags: ["audio", "visual", "WebGL"],
      emoji: "🎵",
      color: "from-electricBlue to-limeGreen"
    },
    {
      title: "Emoji Weather",
      description: "Weather app that translates forecasts into expressive emoji stories",
      tags: ["API", "React", "emotion"],
      emoji: "🌦️",
      color: "from-sunshineYellow to-electricBlue"
    },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-2">
        <Rocket className="w-6 h-6 text-hotPink" />
        Tools <span className="text-hotPink">+</span> Projects
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="creative-card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-sunshineYellow" />
            Favorite Tools
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {tools.map((tool) => (
              <div 
                key={tool.name}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg", 
                  tool.color
                )}
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative overflow-hidden h-48 rounded-2xl">
          <div className="absolute inset-0 flex whitespace-nowrap animate-scroll">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex">
                {["💻", "🎨", "✨", "🚀", "🎭", "🔮", "🎵", "📱", "🌈", "⚡"].map((emoji, j) => (
                  <div 
                    key={`${i}-${j}`}
                    className="w-24 h-24 flex items-center justify-center text-4xl"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl font-display font-bold px-6 py-2 bg-background/80 rounded-full backdrop-blur-sm">
              Creative Toolkit 🧰
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-electricBlue" />
          Recent Projects
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="creative-card group relative overflow-hidden"
            >
              <div className={cn(
                "absolute inset-0 opacity-20 bg-gradient-to-br",
                project.color
              )} />
              
              <div className="absolute top-3 right-3 text-3xl transform group-hover:scale-125 transition-transform">
                {project.emoji}
              </div>
              
              <h4 className="text-lg font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="text-xs px-2 py-1 bg-muted rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-4 h-4 text-electricBlue animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsProjects;
