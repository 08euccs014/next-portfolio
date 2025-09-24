"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Building, 
  Award, 
  Users, 
  TrendingUp,
  Brain,
  Code,
  Database
} from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior AI/ML Developer",
      company: "TechCorp AI",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading AI/ML initiatives and building intelligent applications using LangChain, LangGraph, and modern web technologies.",
      achievements: [
        "Built AI-powered document processing system serving 10,000+ users",
        "Developed conversational AI platform with 95% user satisfaction",
        "Led team of 5 developers in implementing ML model management system",
        "Reduced model deployment time by 60% through automation"
      ],
      technologies: ["LangChain", "LangGraph", "React", "Node.js", "MongoDB", "AWS"],
      icon: Brain,
      color: "from-[#EC4899] to-[#F97316]"
    },
    {
      title: "Full-Stack Developer",
      company: "InnovateLab",
      location: "Remote",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Developed full-stack applications with focus on AI integration and modern web technologies.",
      achievements: [
        "Created React Native app with AI chat capabilities",
        "Implemented real-time analytics dashboard for ML models",
        "Built RESTful APIs serving 1M+ requests daily",
        "Improved application performance by 40% through optimization"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
      icon: Code,
      color: "from-[#4A4E8C] to-[#6366F1]"
    },
    {
      title: "AI Research Intern",
      company: "AI Research Institute",
      location: "Boston, MA",
      period: "2020 - 2021",
      type: "Internship",
      description: "Conducted research on natural language processing and machine learning model optimization.",
      achievements: [
        "Published 2 research papers on NLP model efficiency",
        "Developed novel approach to reduce model inference time by 30%",
        "Collaborated with PhD researchers on cutting-edge AI projects",
        "Presented findings at 3 international conferences"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Jupyter"],
      icon: Database,
      color: "from-[#06B6D4] to-[#8B5CF6]"
    }
  ];

  const achievements = [
    {
      title: "AI Innovation Award",
      organization: "TechCrunch Disrupt",
      year: "2023",
      description: "Recognized for outstanding contribution to AI-powered document processing",
      icon: Award,
      color: "bg-[#EC4899]"
    },
    {
      title: "Best AI Product",
      organization: "AI Summit 2023",
      year: "2023",
      description: "Awarded for innovative conversational AI platform",
      icon: TrendingUp,
      color: "bg-[#4A4E8C]"
    },
    {
      title: "Open Source Contributor",
      organization: "LangChain Community",
      year: "2022-2023",
      description: "Active contributor to LangChain and LangGraph open source projects",
      icon: Users,
      color: "bg-[#06B6D4]"
    },
    {
      title: "Tech Speaker",
      organization: "Various Conferences",
      year: "2022-2023",
      description: "Spoke at 5+ conferences about AI/ML best practices",
      icon: Code,
      color: "bg-[#FCD34D]"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "13+", icon: Calendar },
    { label: "Projects Completed", value: "16+", icon: Code },
    { label: "AI Models Deployed", value: "2+", icon: Brain },
    { label: "Happy Clients", value: "100%", icon: Users }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-[#4A4E8C] text-[#4A4E8C] mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4E8C] to-[#EC4899]">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A track record of building innovative AI/ML solutions and leading technical teams 
            in fast-paced, cutting-edge environments.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-600 mb-2">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#4A4E8C] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements & Awards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4E8C] to-[#EC4899]">Recognition</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{achievement.organization}</p>
                  <Badge variant="outline" className="mb-3">{achievement.year}</Badge>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-white/90 mb-6">
                Let's discuss how my experience in AI/ML and full-stack development can help your project succeed.
              </p>
              <Button size="lg" className="bg-white text-[#4A4E8C] hover:bg-white/90">
                <Users className="w-5 h-5 mr-2" />
                Let's Connect
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
