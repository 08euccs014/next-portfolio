"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Code, Database, Smartphone, Globe } from "lucide-react";

export function AboutSection() {
  const technologies = [
    { name: "LangChain", icon: Brain, color: "bg-[#EC4899]" },
    { name: "LangGraph", icon: Code, color: "bg-[#06B6D4]" },
    { name: "React/Next.js", icon: Globe, color: "bg-[#4A4E8C]" },
    { name: "Node.js", icon: Code, color: "bg-[#FCD34D]" },
    { name: "React Native", icon: Smartphone, color: "bg-[#6366F1]" },
    { name: "MongoDB/PostgreSQL", icon: Database, color: "bg-[#8B5CF6]" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-[#4A4E8C] text-[#4A4E8C]">
                About Me
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Passionate about{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4E8C] to-[#EC4899]">
                  AI Innovation
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a full-stack developer with a deep passion for artificial intelligence and machine learning. 
                I specialize in building intelligent applications using LangChain, LangGraph, and modern web technologies.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4A4E8C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-[#4A4E8C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI/ML Expertise</h3>
                  <p className="text-gray-600">
                    Building intelligent applications with LangChain, LangGraph, and custom ML models. 
                    Specialized in natural language processing and conversational AI.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EC4899]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-[#EC4899]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
                  <p className="text-gray-600">
                    Expert in React, Next.js, Node.js, and React Native. Building scalable, 
                    performant applications with modern development practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#06B6D4]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Data & Infrastructure</h3>
                  <p className="text-gray-600">
                    Designing robust data pipelines, vector databases, and cloud infrastructure 
                    to support AI applications at scale.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-[#4A4E8C] hover:bg-[#3B3F7A]">
              Learn More About My Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main card */}
              <Card className="p-8 bg-gradient-to-br from-[#4A4E8C]/5 to-[#EC4899]/5 border-0 shadow-2xl">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#4A4E8C] to-[#EC4899] rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Mohit Agrawaleloper</h3>
                    <p className="text-gray-600">Building the future, one algorithm at a time</p>
                  </div>

                  {/* Technology grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {technologies.map((tech, index) => (
                      <div
                        key={tech.name}
                        className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <div className={`w-10 h-10 ${tech.color} rounded-lg flex items-center justify-center`}>
                          <tech.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-900">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#EC4899] rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#06B6D4] rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-lg">ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
