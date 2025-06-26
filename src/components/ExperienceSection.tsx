
import { Calendar, MapPin, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Senior Data Engineer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "Remote",
      achievements: [
        "Built real-time data pipelines processing 10M+ events daily",
        "Reduced data processing costs by 40% through optimization",
        "Led migration to cloud-native architecture"
      ]
    },
    {
      role: "Data Engineer",
      company: "DataFlow Systems",
      period: "2020 - 2022",
      location: "San Francisco, CA",
      achievements: [
        "Designed ETL pipelines for multi-terabyte datasets",
        "Implemented automated data quality monitoring",
        "Collaborated with ML teams on feature engineering"
      ]
    },
    {
      role: "Junior Data Analyst",
      company: "Analytics Pro",
      period: "2019 - 2020",
      location: "New York, NY",
      achievements: [
        "Created interactive dashboards using Tableau",
        "Automated reporting processes saving 20+ hours/week",
        "Analyzed customer behavior patterns for product insights"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A track record of delivering data solutions that drive business value
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="glass-effect border-gray-700 hover:border-blue-500 transition-all duration-300 animate-slide-in-left group hover:scale-[1.02] cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300">
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Building className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex} 
                      className="text-gray-300 flex items-start gap-3 group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-400 transition-colors duration-300"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
