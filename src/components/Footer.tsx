
import React from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="mt-12 py-6 border-t border-muted">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Michael's Creative Universe
        </p>
        
        <div className="flex gap-4">
          {["🎮", "📸", "🎧", "📝", "🎨"].map((emoji, i) => (
            <a 
              href="#" 
              key={i} 
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300",
                i % 5 === 0 ? "hover:bg-hotPink/20" : 
                i % 5 === 1 ? "hover:bg-electricBlue/20" : 
                i % 5 === 2 ? "hover:bg-sunshineYellow/20" :
                i % 5 === 3 ? "hover:bg-limeGreen/20" :
                "hover:bg-violet/20"
              )}
            >
              {emoji}
            </a>
          ))}
        </div>
        
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <span>Made with</span>
          <span className="text-hotPink animate-pulse">❤️</span>
          <span>and code</span>
        </div>
      </div>
      
      <p className="text-center text-xs text-muted-foreground mt-6">
        Hover, click, and explore for surprises ✨
      </p>
    </footer>
  );
};

export default Footer;
