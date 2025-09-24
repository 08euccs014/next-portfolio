"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageCircle,
  Calendar,
  Download,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mohit.agrawal@starlingelevate.com",
      description: "Send me an email anytime",
      color: "from-[#EC4899] to-[#F97316]",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9540372342",
      description: "Mon-Fri from 11am to 6pm",
      color: "from-[#4A4E8C] to-[#6366F1]",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jaipur, Rajasthan, India",
      description: "Available for remote work",
      color: "from-[#06B6D4] to-[#8B5CF6]",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/08euccs014",
      color: "hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/ermohitagrawal",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-[#4A4E8C] text-[#4A4E8C] mb-4"
          >
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4E8C] to-[#EC4899]">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to turn your AI/ML ideas into reality? I'm here to help you
            build intelligent, scalable solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="h-full">
            <Card className="border-0 shadow-lg h-full flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-2xl text-gray-900">
                  Send a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and I'll get back to you within 24
                  hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col">
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#4A4E8C] focus:ring-[#4A4E8C]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#4A4E8C] focus:ring-[#4A4E8C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-[#4A4E8C] focus:ring-[#4A4E8C]"
                    />
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="min-h-[200px] border-gray-300 focus:border-[#4A4E8C] focus:ring-[#4A4E8C]"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <Alert className={submitStatus.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      )}
                      <AlertDescription className={submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                        {submitStatus.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="flex-shrink-0">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-[#4A4E8C] hover:bg-[#3B3F7A] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8 h-full">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {info.title}
                          </h4>
                          <p className="text-[#4A4E8C] font-medium text-sm">
                            {info.value}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className={`w-11 h-11 ${social.color} text-gray-600 hover:text-white transition-all duration-300`}
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Availability */}
        <div className="mt-12">
          <div className="grid lg:grid-cols-2 gap-6">
           {/* Quick Actions */}
           <div className="space-y-4">
             <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
             <div className="space-y-3">
               <Button
                 size="sm"
                 variant="outline"
                 className="justify-start h-12 w-full"
                 asChild
               >
                 <Link
                   href="https://docs.google.com/document/d/1S_lc1XTcqGFSSM8mrgdabLLNv_Mm5n3c/edit?usp=sharing&ouid=107764676147050411683&rtpof=true&sd=true"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   <Download className="w-4 h-4 mr-3" />
                   Download Resume
                 </Link>
               </Button>
               <Button
                 size="sm"
                 variant="outline"
                 className="justify-start h-12 w-full"
                 asChild
               >
                 <Link
                   href="https://calendly.com/mohit-agrawal-starlingelevate"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   <Calendar className="w-4 h-4 mr-3" />
                   Schedule a Call
                 </Link>
               </Button>
               <Button
                 size="sm"
                 variant="outline"
                 className="justify-start h-12 w-full"
                 asChild
               >
                 <Link href="mailto:mohit.agrawal@starlingelevate.com">
                   <MessageCircle className="w-4 h-4 mr-3" />
                   Start a Chat
                 </Link>
               </Button>
             </div>
           </div>

           {/* Availability Status */}
           <div className="lg:mt-0 mt-4">
             <Card className="bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] border-0 text-white h-full">
               <CardContent className="p-6 flex flex-col justify-between h-full">
                 <div>
                   <div className="flex items-center space-x-3 mb-4">
                     <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                     <span className="font-semibold text-lg">
                       Available for Projects
                     </span>
                   </div>
                   <p className="text-white/90 text-sm leading-relaxed">
                     I'm currently available for new AI/ML projects and
                     collaborations. Let's discuss how I can help bring your ideas to
                     life.
                   </p>
                 </div>
                 <div className="mt-4">
                   <Badge className="bg-white/20 text-white border-white/30 text-xs">
                     Response time: &lt; 24 hours
                   </Badge>
                 </div>
               </CardContent>
             </Card>
           </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] border-0 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you need a complete AI solution, a mobile app, or
                technical consultation, I'm here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#4A4E8C] hover:bg-white/90"
                  asChild
                >
                  <Link href="mailto:mohit.agrawal@starlingelevate.com">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start a Conversation
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-primary hover:bg-white/10"
                  asChild
                >
                  <Link
                    href="https://calendly.com/mohit-agrawal-starlingelevate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Meeting
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
