"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Code, 
  Smartphone,
  Database,
  Zap,
  Globe
} from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Document Assistant",
      description: "Intelligent document processing system using LangChain and OpenAI. Automatically extracts, analyzes, and summarizes documents with natural language queries.",
      image: "/api/placeholder/600/400",
      technologies: ["LangChain", "OpenAI", "Next.js", "MongoDB", "Vector DB"],
      category: "AI/ML",
      icon: Brain,
      color: "from-[#EC4899] to-[#F97316]",
      github: "https://github.com/mohitagrawal/ai-document-assistant",
      live: "https://ai-document-assistant.vercel.app",
      featured: true
    },
    {
      title: "Conversational AI Platform",
      description: "Multi-agent AI system built with LangGraph for complex conversational workflows. Supports multiple AI models and custom agent behaviors.",
      image: "/api/placeholder/600/400",
      technologies: ["LangGraph", "LangChain", "Node.js", "WebSocket", "Redis"],
      category: "AI/ML",
      icon: Brain,
      color: "from-[#06B6D4] to-[#8B5CF6]",
      github: "https://github.com/mohitagrawal/conversational-ai-platform",
      live: "https://conversational-ai.vercel.app",
      featured: true
    },
    {
      title: "React Native Mobile App with AI",
      description: "Cross-platform mobile application featuring AI-powered features including image recognition, natural language processing, and personalized content delivery.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Python", "TensorFlow Lite", "Firebase", "JavaScript", "Expo"],
      category: "Mobile",
      icon: Smartphone,
      color: "from-[#6366F1] to-[#EC4899]",
      github: "https://github.com/mohitagrawal/react-native-ai-app",
      live: "https://expo.dev/@mohitagrawal/ai-mobile-app",
      featured: true
    },
    {
      title: "Full-Stack Web Application",
      description: "Enterprise web application with modern UI/UX, real-time features, and backend API integration. Built with React frontend and Node.js backend with comprehensive testing.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Jest", "WebSocket"],
      category: "Web App",
      icon: Globe,
      color: "from-[#FCD34D] to-[#F97316]",
      github: "https://github.com/mohitagrawal/fullstack-web-app",
      live: "https://fullstack-app.vercel.app",
      featured: false
    },
    {
      title: "AI Chatbot Integration",
      description: "Intelligent chatbot system integrated into web applications with natural language understanding, context awareness, and multi-language support.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "NLTK", "spaCy", "OpenAI API", "Node.js", "WebSocket", "Redis"],
      category: "AI/ML",
      icon: Brain,
      color: "from-[#8B5CF6] to-[#EC4899]",
      github: "https://github.com/mohitagrawal/ai-chatbot-integration",
      live: "https://ai-chatbot-demo.vercel.app",
      featured: false
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices architecture with API gateway, service discovery, and containerized deployment. Includes monitoring, logging, and automated CI/CD pipelines.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Docker", "Kubernetes", "Nginx", "Prometheus", "Grafana", "Jenkins"],
      category: "Web App",
      icon: Zap,
      color: "from-[#10B981] to-[#3B82F6]",
      github: "https://github.com/mohitagrawal/microservices-architecture",
      live: "https://microservices-demo.vercel.app",
      featured: false
    },
    {
      title: "Real-time Analytics System",
      description: "High-performance analytics system processing large datasets with real-time visualization and automated insights generation using machine learning algorithms.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Apache Kafka", "Elasticsearch", "React", "D3.js", "Redis", "PostgreSQL"],
      category: "Data Science",
      icon: Database,
      color: "from-[#F59E0B] to-[#EF4444]",
      github: "https://github.com/mohitagrawal/realtime-analytics-system",
      live: "https://analytics-dashboard.vercel.app",
      featured: false
    }
  ];

  const categories = ["All", "AI/ML", "Mobile", "Web App", "ML Infrastructure", "Developer Tools"];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-[#4A4E8C] text-[#4A4E8C] mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4E8C] to-[#EC4899]">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of full-stack development projects spanning 13+ years of experience in AI, Python, 
            Node.js, and React. From AI-powered applications to scalable web platforms and mobile solutions, 
            demonstrating expertise across the entire technology stack.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-[#4A4E8C] hover:bg-[#3B3F7A]" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon className="w-16 h-16 text-white/80" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-[#4A4E8C] transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" className="flex-1 bg-[#4A4E8C] hover:bg-[#3B3F7A]" asChild>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon className="w-12 h-12 text-white/80" />
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-white/90 text-gray-900 hover:bg-white text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-900 group-hover:text-[#4A4E8C] transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                {/* <div className="flex space-x-2 pt-2">
                  <Button variant="ghost" size="sm" className="flex-1 text-xs" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 text-xs" asChild>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Link>
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Next Project?</h3>
              <p className="text-white/90 mb-6">
                With 13+ years of full-stack development experience in AI, Python, Node.js, and React, 
                I can help bring your ideas to life with modern technologies and best practices.
              </p>
              <Button size="lg" className="bg-white text-[#4A4E8C] hover:bg-white/90" asChild>
                <Link href="#contact">
                  <Zap className="w-5 h-5 mr-2" />
                  Start a Project
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
