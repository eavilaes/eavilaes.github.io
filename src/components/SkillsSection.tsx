
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Engineering",
      skills: [
        { name: "dbt", level: 92 },
        { name: "Apache Airflow", level: 90 },
        { name: "Data Lakes", level: 88 },
        { name: "ETLs", level: 85 }
      ]
    },
    {
      title: "Programming & Cloud",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL & NoSQL", level: 93 },
        { name: "AWS", level: 90 },
        { name: "Kubernetes", level: 85 }
      ]
    },
    {
      title: "Databases & Extraction",
      skills: [
        { name: "PostgreSQL", level: 92 },
        { name: "AWS Glue", level: 80 },
        { name: "Web Scraping", level: 78 }
      ]
    },
    {
      title: "Analytics & Leadership",
      skills: [
        { name: "Data Visualization", level: 85 },
        { name: "Machine Learning", level: 75 },
        { name: "Project Management", level: 80 }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Technical Skills</span>
          </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tools I rely on to build reliable, scalable data platforms
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="glass-effect border-gray-700 hover:border-blue-500/50 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="glass-effect rounded-xl p-8 border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 mb-6">
              The data engineering landscape evolves rapidly. I stay current with emerging technologies, 
              best practices, and industry trends to deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["MLOps", "Data Mesh", "Kubernetes", "Terraform", "dbt", "Real-time Analytics"].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
