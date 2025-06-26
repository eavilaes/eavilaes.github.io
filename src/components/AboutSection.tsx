
import { Code, Cloud, Database, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Database,
      title: "Data Architecture",
      description: "Designing scalable data warehouses and ETL pipelines"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, GCP, and Azure data platform implementations"
    },
    {
      icon: Code,
      title: "Data Processing",
      description: "Python, SQL, Spark, and modern data stack expertise"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Building dashboards and BI solutions for business growth"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Data Engineer with 5+ years of experience building robust data infrastructure 
            and analytics solutions. I help businesses unlock the full potential of their data through 
            modern engineering practices and cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="glass-effect border-gray-700 hover:border-blue-500 transition-all duration-300 animate-slide-in-left group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-effect rounded-2xl p-8 border-gray-700 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
              <p className="text-gray-300 mb-4">
                I believe in building data solutions that are not just functional, but scalable, 
                maintainable, and aligned with business objectives. Every project starts with 
                understanding your unique challenges and requirements.
              </p>
              <p className="text-gray-300">
                From data ingestion to visualization, I ensure every component of your data 
                ecosystem works harmoniously to deliver actionable insights that drive growth.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Database className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-300 text-sm">Clean • Scalable • Efficient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
