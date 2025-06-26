
import { Database, BarChart3, Zap, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 data-grid opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Database className="w-8 h-8 text-blue-400 opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <BarChart3 className="w-10 h-10 text-purple-400 opacity-30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-6 h-6 text-cyan-400 opacity-30" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 border-4 border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <AvatarImage src="/prof.png" alt="Data Engineer" />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">DE</AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">Eric Avila</span>
            <br />
            <span className="text-white hover:text-blue-300 transition-colors duration-300">Data Engineer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            Transforming data into powerful insights through scalable pipelines and advanced analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg animate-pulse-glow hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-500 px-8 py-3 text-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-blue-400 transition-colors duration-300">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
