
import { Calendar, MapPin, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Senior Data Engineer",
      company: "MANGO",
      period: "Apr 2024 - Present",
      location: "Remote",
      achievements: [
        "Scaled streaming and batch pipelines handling terabytes daily for one of Europe's largest retailers",
        "Moved dozens of legacy workflows into dbt orchestrated with Airflow on Databricks and Snowflake, cutting costs by up to 80%",
        "Delivered self-serve analytics through Looker dashboards for one of its biggest customers"
      ]
    },
    {
      role: "Senior Data Engineer",
      company: "BEONx",
      period: "Oct 2023 - Apr 2024",
      location: "Remote",
      achievements: [
        "Migrated cloud pipelines to AWS with dbt and Airflow to share data across teams",
        "Handled terabytes of hotel revenue data, improving pipeline efficiency by 50%",
        "Established the foundations for the company's first data lake architecture"
      ]
    },
    {
      role: "Data Engineer",
      company: "Qbeast",
      period: "Apr 2021 - Oct 2023",
      location: "Barcelona, Spain",
      achievements: [
        "Designed data lake products and cloud infrastructure while moving toward a Tech Lead role",
        "Implemented data models, quality checks and team workflows using AWS, Kubernetes and dbt",
        "Collaborated with stakeholders through dashboards in Looker and PowerBI"
      ]
    },
    {
      role: "Junior Big Data Engineer",
      company: "Qbeast",
      period: "Apr 2021 - Apr 2022",
      location: "Barcelona, Spain",
      achievements: [
        "Contributed to the open-source qbeast-spark data lake format",
        "Gained hands-on experience with data lake internals and multiple storage formats",
        "Practiced agile collaboration using Kubernetes, Python, Scala, SQL and Git"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Highlights from building data platforms that empower global teams
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
