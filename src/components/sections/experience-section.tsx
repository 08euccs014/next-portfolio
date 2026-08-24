"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, MapPin, Building, Users } from "lucide-react";
import { getProjectIcon } from "@/lib/projects/icons";
import type { Certification, Experience, JourneyStat } from "@/types/journey";

export function ExperienceSection({
  experiences,
  certifications,
  stats,
}: {
  experiences: Experience[];
  certifications: Certification[];
  stats: JourneyStat[];
}) {
  return (
    <section id="experience" className="bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-[#4A4E8C] text-[#4A4E8C]">
            Experience
          </Badge>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            A track record of building innovative AI/ML solutions and leading technical teams
            in fast-paced, cutting-edge environments.
          </p>
        </div>

        {stats.length > 0 && (
          <div className="mb-16 flex flex-wrap justify-center gap-6">
            {stats.map((stat) => {
              const Icon = getProjectIcon(stat.icon);
              return (
                <Card
                  key={stat.id}
                  className="w-full max-w-[17.5rem] flex-none border-0 text-center shadow-lg sm:w-[17.5rem]"
                >
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#4A4E8C] to-[#EC4899]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="mb-2 text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <div className="mb-16 space-y-8">
          {experiences.map((exp) => {
            const Icon = getProjectIcon(exp.icon);
            return (
              <Card key={exp.id} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6 flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="mb-4 flex items-start space-x-4 lg:mb-0">
                      <div
                        className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${exp.gradient}`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-2xl font-bold text-gray-900">{exp.title}</h3>
                        <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-600">
                          {exp.company && (
                            <div className="flex items-center space-x-1">
                              <Building className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                          )}
                          {exp.location && (
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                          {exp.period && (
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                          )}
                          <Badge variant="secondary">{exp.employment_type}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="mb-6 text-lg leading-relaxed text-gray-600">{exp.description}</p>
                  )}

                  <div className="grid gap-6 lg:grid-cols-2">
                    {exp.achievements.length > 0 && (
                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-gray-900">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start space-x-2">
                              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#4A4E8C]" />
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.technologies.length > 0 && (
                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-gray-900">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {certifications.length > 0 && (
          <div className="mb-16">
            <h3 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Professional{" "}
              <span className="bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] bg-clip-text text-transparent">
                Certifications
              </span>
            </h3>
            <div className="mx-auto grid max-w-4xl gap-6">
              {certifications.map((cert) => {
                const Icon = getProjectIcon(cert.icon);
                return (
                  <Card key={cert.id} className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="mb-4 flex items-center space-x-4 lg:mb-0">
                          <div
                            className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl ${cert.color}`}
                          >
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h4 className="mb-2 text-2xl font-bold text-gray-900">{cert.title}</h4>
                            <p className="mb-2 text-lg text-gray-600">{cert.organization}</p>
                            <div className="flex flex-wrap items-center gap-4">
                              {cert.year && (
                                <Badge variant="outline" className="text-sm">
                                  Issued: {cert.year}
                                </Badge>
                              )}
                              {cert.expiry && (
                                <Badge variant="outline" className="text-sm">
                                  Expires: {cert.expiry}
                                </Badge>
                              )}
                              {cert.verified && (
                                <div className="flex items-center space-x-1 text-green-600">
                                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
                                    <div className="h-2 w-2 rounded-full bg-white" />
                                  </div>
                                  <span className="text-sm font-medium">Verified</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {cert.description && (
                        <p className="mb-6 text-lg leading-relaxed text-gray-600">
                          {cert.description}
                        </p>
                      )}
                      {cert.skills.length > 0 && (
                        <div>
                          <h5 className="mb-4 text-lg font-semibold text-gray-900">Associated Skills</h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-sm">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        <div className="text-center">
          <Card className="mx-auto max-w-2xl border-0 bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] text-white">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold">Ready to Work Together?</h3>
              <p className="mb-6 text-white/90">
                Let&apos;s discuss how my experience in AI/ML and full-stack development can help your
                project succeed.
              </p>
              <Button size="lg" className="bg-white text-[#4A4E8C] hover:bg-white/90" asChild>
                <Link
                  href="mailto:mohit.agrawal@starlingelevate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Let&apos;s Connect
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
