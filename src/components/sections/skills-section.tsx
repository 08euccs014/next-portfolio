"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Zap,
  GitBranch,
  Shield,
  Cpu,
  Globe
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI/ML Technologies",
      icon: Brain,
      color: "from-[#EC4899] to-[#F97316]",
      skills: [
        { name: "LangChain", level: 95, description: "Building conversational AI applications" },
        { name: "LangGraph", level: 90, description: "Complex AI workflows and state management" },
        { name: "OpenAI API", level: 92, description: "GPT models and embeddings" },
        { name: "Vector Databases", level: 88, description: "Pinecone, Weaviate, Chroma" },
        { name: "Machine Learning", level: 85, description: "TensorFlow, PyTorch, scikit-learn" },
        { name: "NLP", level: 90, description: "Natural Language Processing" },
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-[#4A4E8C] to-[#6366F1]",
      skills: [
        { name: "React/Next.js", level: 95, description: "Modern React applications" },
        { name: "TypeScript", level: 92, description: "Type-safe development" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first styling" },
        { name: "React Native", level: 88, description: "Cross-platform mobile apps" },
        { name: "State Management", level: 85, description: "Redux, Zustand, Context" },
        { name: "UI/UX Design", level: 80, description: "User interface design" },
      ]
    },
    {
      title: "Backend Development",
      icon: Code,
      color: "from-[#06B6D4] to-[#8B5CF6]",
      skills: [
        { name: "Node.js", level: 95, description: "JavaScript runtime" },
        { name: "Express.js", level: 90, description: "Web application framework" },
        { name: "GraphQL", level: 85, description: "Query language for APIs" },
        { name: "REST APIs", level: 92, description: "RESTful web services" },
        { name: "Microservices", level: 80, description: "Distributed architecture" },
        { name: "Serverless", level: 75, description: "AWS Lambda, Vercel" },
      ]
    },
    {
      title: "Data & Infrastructure",
      icon: Database,
      color: "from-[#FCD34D] to-[#F97316]",
      skills: [
        { name: "MongoDB", level: 90, description: "NoSQL database" },
        { name: "PostgreSQL", level: 85, description: "Relational database" },
        { name: "Redis", level: 80, description: "In-memory data store" },
        { name: "Docker", level: 85, description: "Containerization" },
        { name: "AWS/GCP", level: 75, description: "Cloud platforms" },
        { name: "CI/CD", level: 80, description: "DevOps practices" },
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: GitBranch, color: "bg-orange-500" },
    { name: "Docker", icon: Cloud, color: "bg-blue-500" },
    { name: "VS Code", icon: Code, color: "bg-blue-600" },
    { name: "Figma", icon: Globe, color: "bg-purple-500" },
    { name: "Postman", icon: Zap, color: "bg-orange-600" },
    { name: "Jest", icon: Shield, color: "bg-green-500" },
    { name: "Webpack", icon: Cpu, color: "bg-blue-700" },
    { name: "Nginx", icon: Cloud, color: "bg-green-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-[#4A4E8C] text-[#4A4E8C] mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4E8C] to-[#EC4899]">
              Mastery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise in AI/ML technologies, full-stack development, and modern web technologies. 
            Constantly learning and adapting to the latest innovations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-white/90 mb-6">
                Let's discuss how my expertise can help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Available for Projects
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Open to Collaboration
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
