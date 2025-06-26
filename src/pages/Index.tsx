
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 hover:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            © 2025 Eric Avila. Crafted with passion for data, with the help of Lovable.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
