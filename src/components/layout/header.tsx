"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full transition-all duration-300 z-50 ${
      isScrolled 
        ? 'bg-primary/95 backdrop-blur-sm  shadow-lg text-white' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center">
              <Image src="/mohit.jpeg" alt="Mohit Agrawal" width={32} height={32} className="rounded-full" />
            </div>
            <Link href="/" className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              Mohit Agrawal
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled 
                    ? 'text-white hover:text-white' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              size="sm" 
              variant="outline"
              className={isScrolled 
                ? 'bg-white text-primary ' 
                : 'bg-white text-primary  '
              }
              asChild
            >
              <Link href="https://docs.google.com/document/d/1S_lc1XTcqGFSSM8mrgdabLLNv_Mm5n3c/edit?usp=sharing&ouid=107764676147050411683&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className={isScrolled 
                ? 'bg-white text-primary ' 
                : 'bg-white text-primary  '
              }
              asChild
            >
              <Link href="mailto:mohit.agrawal@starlingelevate.com" target="_blank" rel="noopener noreferrer">
                Let's Talk
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={isScrolled ? '' : 'text-white hover:bg-white/10'}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white p-1 flex items-center justify-center">
                        <Image src="/mohit.jpeg" alt="Mohit Agrawal" width={24} height={24} className="rounded-full" />
                      </div>
                      <span className="text-xl font-bold text-[#4A4E8C]">Mohit Agrawal</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  
                  <nav className="flex-1 space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-lg text-gray-700 hover:text-[#4A4E8C] transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="space-y-4 pt-8 border-t">
                    <Button variant="outline" className="w-full text-primary" asChild>
                      <Link href="https://docs.google.com/document/d/1S_lc1XTcqGFSSM8mrgdabLLNv_Mm5n3c/edit?usp=sharing&ouid=107764676147050411683&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                        Resume
                      </Link>
                    </Button>
                    <Button className="w-full bg-[#4A4E8C] hover:bg-[#3B3F7A]" asChild>
                      <Link href="mailto:mohit.agrawal@starlingelevate.com" target="_blank" rel="noopener noreferrer">
                        Let's Talk
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
