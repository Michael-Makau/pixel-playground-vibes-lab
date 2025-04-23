
import React, { useEffect } from 'react';
import AnimatedHeader from '@/components/AnimatedHeader';
import BioSection from '@/components/BioSection';
import MoodBoard from '@/components/MoodBoard';
import ToolsProjects from '@/components/ToolsProjects';
import WeeklyVibes from '@/components/WeeklyVibes';
import Footer from '@/components/Footer';

const Index = () => {
  // Add some fun console messages as Easter eggs
  useEffect(() => {
    console.log("%c✨ Welcome to Michael's Creative Universe! ✨", "color: #D946EF; font-size: 20px; font-weight: bold;");
    console.log("%cFeel free to explore and find hidden surprises!", "color: #0EA5E9; font-size: 16px;");
    console.log("%c🎨 Made with love and code 💻", "color: #FBBF24; font-size: 14px;");
  }, []);

  return (
    <div className="min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-hotPink/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-60 h-60 bg-electricBlue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-violet/5 rounded-full blur-3xl" />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <AnimatedHeader />
        <BioSection />
        <MoodBoard />
        <ToolsProjects />
        <WeeklyVibes />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
