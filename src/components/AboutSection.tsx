
import { Code, Cloud, Database, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Database,
      title: "Data Architecture",
      description: "Scalable data warehouses and ETL pipelines"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions", 
      description: "AWS, GCP, and Azure implementations"
    },
    {
      icon: Code,
      title: "Data Processing",
      description: "Python, SQL, Spark expertise"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Dashboards and BI solutions"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            5+ years building robust data infrastructure and analytics solutions for business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="glass-effect border-gray-700 hover:border-blue-500 transition-all duration-300 animate-slide-in-left group hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-effect rounded-2xl p-8 border-gray-700 animate-fade-in hover:border-blue-500/50 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-300 transition-colors duration-300">My Approach</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Building data solutions that are scalable, maintainable, and aligned with business objectives. 
              From data ingestion to visualization, every component works harmoniously to deliver actionable insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
