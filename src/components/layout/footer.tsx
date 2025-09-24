"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Heart,
  ArrowUp
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "AI/ML Development", href: "#projects" },
      { name: "Full-Stack Development", href: "#projects" },
      { name: "Mobile App Development", href: "#projects" },
      { name: "Technical Consulting", href: "#projects" },
      { name: "Code Review", href: "#projects" },
    ],
    resources: [
      { name: "Resume", href: "https://docs.google.com/document/d/1S_lc1XTcqGFSSM8mrgdabLLNv_Mm5n3c/edit?usp=sharing&ouid=107764676147050411683&rtpof=true&sd=true" },
      { name: "Case Studies", href: "#" },
      // { name: "Open Source", href: "#" },
      // { name: "Documentation", href: "#" },
      // { name: "Tutorials", href: "#" },
    ],
    legal: [
      // { name: "Privacy Policy", href: "#" },
      // { name: "Terms of Service", href: "#" },
      // { name: "Cookie Policy", href: "#" },
      // { name: "GDPR", href: "#" },
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/08euccs014", color: "hover:bg-gray-900" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/ermohitagrawal", color: "hover:bg-blue-600" },
    // { name: "Twitter", icon: Twitter, href: "https://twitter.com/08euccs014", color: "hover:bg-blue-400" },
    { name: "Email", icon: Mail, href: "mailto:mohit.agrawal@starlingelevate.com", color: "hover:bg-red-500" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#4A4E8C] to-[#6366F1] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Mohit Agrawal</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Full-stack developer specializing in AI/ML applications, LangChain, LangGraph, 
                and modern web technologies. Building the future, one algorithm at a time.
              </p>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Available for Projects
              </Badge>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`w-10 h-10 ${social.color} text-white hover:text-white transition-all duration-300`}
                  asChild
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    target="_blank"
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-6">
              Get the latest insights on AI/ML development, project updates, and tech trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-[#4A4E8C] hover:bg-white/90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/80">
              <span>© {currentYear} Mohit Agrawal. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for the AI community.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-white/60 text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
