"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Code, Zap, Smartphone, Database, Globe, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#4A4E8C] via-[#6366F1] to-[#8B5CF6]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#EC4899]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#06B6D4]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FCD34D]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Brain className="w-4 h-4 mr-2" />
                  AI/ML Specialist
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Code className="w-4 h-4 mr-2" />
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Terminal className="w-4 h-4 mr-2" />
                  NodeJS
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Globe className="w-4 h-4 mr-2" />
                  ReactJS
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Smartphone className="w-4 h-4 mr-2" />
                  React Native
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Database className="w-4 h-4 mr-2" />
                  MongoDB
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Zap className="w-4 h-4 mr-2" />
                  LangChain
                </Badge>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Building the Future with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#FCD34D]">
                  AI & Machine Learning
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Full-stack developer specializing in AI/ML applications, LangChain, LangGraph, 
                and modern web technologies. Transforming ideas into intelligent solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-[#4A4E8C] hover:bg-white/90 text-lg px-8 py-6 h-auto"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-primary border-white/60 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
              >
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">16+</div>
                <div className="text-white/80">AI/Development Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#06B6D4]">13+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FCD34D]">100%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main illustration container */}
              <div className="relative w-full h-96 lg:h-[500px] bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-[#EC4899] rounded-2xl flex items-center justify-center animate-pulse">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#06B6D4] rounded-xl flex items-center justify-center animate-bounce">
                  <Code className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute top-1/2 right-8 w-10 h-10 bg-[#FCD34D] rounded-lg flex items-center justify-center animate-pulse delay-1000">
                  <Zap className="w-5 h-5 text-white" />
                </div>

                {/* Central content */}
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#EC4899] to-[#06B6D4] rounded-full flex items-center justify-center">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    AI-Powered Solutions
                  </h3>
                  
                  <p className="text-white/80 text-lg">
                    LangChain • LangGraph • React • Node.js
                  </p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center transform rotate-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#4A4E8C]">ML</div>
                  <div className="text-xs text-gray-600">Models</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center transform -rotate-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#EC4899]">AI</div>
                  <div className="text-xs text-gray-600">Apps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
