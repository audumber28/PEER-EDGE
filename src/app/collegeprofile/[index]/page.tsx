"use client";

import { useParams } from "next/navigation";
import React from "react";
import { ChevronLeft, Mail, Calendar, BookOpen, Award, MapPin, Link2, Github, Linkedin, Twitter, DollarSign, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/tower";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

// Type definitions for mentor data
interface Mentor {
  name: string;
  skillset: string;
  expertise: string[];
  profilePic: string;
  background: string;
  href: string;
  // Additional properties for enhanced profile
  title?: string;
  location?: string;
  availability?: string;
  hourlyRate?: string;
  email?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
  education?: {
    degree: string;
    institution: string;
    year: string;
  }[];
  experience?: {
    position: string;
    company: string;
    duration: string;
    description: string;
  }[];
  reviews?: {
    name: string;
    rating: number;
    date: string;
    comment: string;
    avatar?: string;
  }[];
}

const mentors: Mentor[] = [
  {
    name: "Aazad College of Education",
    skillset: "Full Stack Development",
    expertise: ["React", "Node.js", "AWS", "TypeScript", "GraphQL", "MongoDB", "Docker"],
    profilePic: "/im1.jpg",
    background: "Institution committed to innovative education and inclusive learning.",
    href: "#",
    title: " (Id: C-39230)",
    location: "Andhra Pradesh,Prakasam",
    availability: "Available from June 2025",
    email: "aazad@example.com",
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      website: "https://johndoe.dev"
    },
    education: [
      {
        degree: "M.S. Computer Science",
        institution: "Stanford University",
        year: "2014"
      },
      {
        degree: "B.S. Computer Engineering",
        institution: "MIT",
        year: "2012"
      }
    ],
    experience: [
      {
        position: "Senior Software Engineer",
        company: "Google",
        duration: "2018 - Present",
        description: "Leading the development of cloud-based solutions and mentoring junior developers."
      },
      {
        position: "Software Engineer",
        company: "Facebook",
        duration: "2014 - 2018",
        description: "Worked on React ecosystem and contributed to open source projects."
      }
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        date: "March 15, 2025",
        comment: "John is an exceptional mentor. His deep knowledge of React and system architecture helped me level up my skills tremendously.",
        avatar: "/review1.jpg"
      },
      {
        name: "Michael Chen",
        rating: 5,
        date: "February 28, 2025",
        comment: "The guidance I received was invaluable. John has a gift for explaining complex concepts in an understandable way.",
        avatar: "/review2.jpg"
      }
    ]
  },
  {
    name: "Ali College of Education",
    skillset: "Data Science",
    expertise: ["Python", "Machine Learning", "AI", "TensorFlow", "PyTorch", "Data Visualization", "Big Data"],
    profilePic: "/im2.jpg",
    background: "College offering courses designed for real-world skills and career growth.",
    href: "#",
    title: "(Id: U-0003)",
    location: "Boston, MA",
    availability: "Available from July 2025",
    email: "ali@example.com",
    socials: {
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      website: "https://janesmith.io"
    },
    education: [
      {
        degree: "Ph.D. Machine Learning",
        institution: "Harvard University",
        year: "2018"
      },
      {
        degree: "M.S. Computer Science",
        institution: "UC Berkeley",
        year: "2015"
      }
    ],
    experience: [
      {
        position: "Lead Data Scientist",
        company: "Netflix",
        duration: "2020 - Present",
        description: "Leading a team building recommendation algorithms and predictive models."
      },
      {
        position: "Research Scientist",
        company: "Amazon",
        duration: "2018 - 2020",
        description: "Developed machine learning models for personalized recommendations."
      }
    ],
    reviews: [
      {
        name: "David Wilson",
        rating: 5,
        date: "March 20, 2025",
        comment: "Jane's expertise in machine learning is extraordinary. She helped me understand complex ML concepts that I struggled with for months.",
        avatar: "/review3.jpg"
      }
    ]
  },
  {
    name: "Bapatla College of Arts & Science ",
    skillset: "Cybersecurity",
    expertise: ["Network Security", "Ethical Hacking", "Compliance", "Penetration Testing", "SIEM", "Security Auditing"],
    profilePic: "/im3.jpg",
    background: "Academy focused on hands-on learning and accessibility in education.",
    href: "#",
    title: "(Id: U-0003)",
    location: "Washington, DC",
    availability: "Available from May 2025",
    email: "alice.johnson@example.com",
    socials: {
      linkedin: "https://linkedin.com/in/alicejohnson",
      github: "https://github.com/alicejohnson",
      website: "https://alicejohnson.net"
    },
    education: [
      {
        degree: "M.S. Information Security",
        institution: "Carnegie Mellon University",
        year: "2016"
      }
    ],
    experience: [
      {
        position: "Security Architect",
        company: "Microsoft",
        duration: "2019 - Present",
        description: "Designing and implementing security frameworks for enterprise applications."
      },
      {
        position: "Security Consultant",
        company: "Deloitte",
        duration: "2016 - 2019",
        description: "Conducted security assessments and penetration testing for Fortune 500 clients."
      }
    ]
  },
];

const MentorProfile = () => {
  const params = useParams();
  const index = params.index; // Extract the index from URL

  // Convert index to number and check if valid
  const mentorIndex = Number(index);
  const mentor = mentors[mentorIndex];

  // Create initials for Avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${i < rating ? "text-green-400" : "text-gray-600"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (!mentor) {
    return (
      <div className="container mx-auto py-20 px-4 text-center bg-black">
        <div className="max-w-md mx-auto">
          <Card className="border-gray-800 bg-gray-900 shadow-lg text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Mentor Not Found</CardTitle>
              <CardDescription className="text-gray-400">
                We couldn't find the mentor you're looking for.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-6">
              <div className=" bg-black p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-red-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-gray-400 mb-6">
                The mentor profile you're trying to view may have been removed or doesn't exist.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-black font-medium" asChild>
                <Link href="/mentors">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back to Colleges
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <Button variant="ghost" className="group mb-6 text-gray-400 hover:text-green-400 hover:bg-black/40" asChild>
            <Link href="/courses">
              <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> 
              Back to Colleges
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Profile information */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 border-green-500/20 bg-gray-900 shadow-md hover:shadow-green-900/20 transition-shadow duration-300">
              <CardHeader className="text-center pb-4 pt-8 bg-gradient-to-b from-gray-800 to-gray-900 ">
                <div className="mb-4 relative mx-auto">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-tr from-green-500 to-emerald-600 opacity-75 blur"></div>
                    <Avatar className="w-32 h-32 border-4 border-black relative">
                      <AvatarImage src={mentor.profilePic} alt={mentor.name} />
                      <AvatarFallback className="text-2xl font-semibold bg-gray-800 text-green-400">{getInitials(mentor.name)}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold mt-4 text-white">{mentor.name}</CardTitle>
                <CardDescription className="text-lg mt-1 text-green-400">{mentor.title || "Technology Expert"}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pb-8">
                <div className="flex flex-col space-y-3">
                  {mentor.location && (
                    <div className="flex items-center text-gray-300">
                      <MapPin className="mr-3 h-4 w-4 text-green-500" />
                      <span>{mentor.location}</span>
                    </div>
                  )}
                  {mentor.availability && (
                    <div className="flex items-center text-gray-300">
                      <Calendar className="mr-3 h-4 w-4 text-green-500" />
                      <span>{mentor.availability}</span>
                    </div>
                  )}
                  {mentor.hourlyRate && (
                    <div className="flex items-center text-gray-300">
                      <DollarSign className="mr-3 h-4 w-4 text-green-500" />
                      <span>{mentor.hourlyRate}</span>
                    </div>
                  )}
                  {mentor.email && (
                    <div className="flex items-center text-gray-300">
                      <Mail className="mr-3 h-4 w-4 text-green-500" />
                      <a href={`mailto:${mentor.email}`} className="hover:underline hover:text-green-400 transition-colors">
                        {mentor.email}
                      </a>
                    </div>
                  )}
                </div>

                <Separator className="bg-gray-700" />

                {/* Expertise */}
                <div>
                  <h3 className="font-medium mb-3 text-gray-300">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className=" px-2.5 py-1 bg-black text-green-400 border border-green-500/30 hover:bg-green-900/30 hover:text-green-300 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                {/* Social Links */}
                {mentor.socials && (
                  <div>
                    <h3 className="font-medium mb-3 text-gray-300">Connect</h3>
                    <div className="flex space-x-2">
                      {mentor.socials.github && (
                        <Button variant="outline" size="icon" asChild className=" border-green-500/30 bg-black/30 text-gray-300 hover:text-green-400 hover:border-green-500/50 hover:bg-black">
                          <a href={mentor.socials.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {mentor.socials.linkedin && (
                        <Button variant="outline" size="icon" asChild className=" border-green-500/30 bg-black/30 text-gray-300 hover:text-green-400 hover:border-green-500/50 hover:bg-black">
                          <a href={mentor.socials.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {mentor.socials.twitter && (
                        <Button variant="outline" size="icon" asChild className=" border-green-500/30 bg-black/30 text-gray-300 hover:text-green-400 hover:border-green-500/50 hover:bg-black">
                          <a href={mentor.socials.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {mentor.socials.website && (
                        <Button variant="outline" size="icon" asChild className=" border-green-500/30 bg-black/30 text-gray-300 hover:text-green-400 hover:border-green-500/50 hover:bg-black">
                          <a href={mentor.socials.website} target="_blank" rel="noopener noreferrer">
                            <Link2 className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="bg-gradient-to-b from-gray-900 to-black  pt-2">
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium shadow-md hover:shadow-lg transition-all">
                  Register for Education
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Right column - Tabs with content */}
          <div className="lg:col-span-2">
            <Card className="border-green-500/20 bg-gray-900 shadow-md">
              <CardHeader className="bg-gray-900 ">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-black p-1">
                    <TabsTrigger 
                      value="about" 
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-black data-[state=active]:shadow-sm text-gray-300"
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger 
                      value="experience" 
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-black data-[state=active]:shadow-sm text-gray-300"
                    >
                      Experience
                    </TabsTrigger>
                    <TabsTrigger 
                      value="reviews" 
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-black data-[state=active]:shadow-sm text-gray-300"
                    >
                      Reviews
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="about" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-white">About {mentor.name}</h3>
                        <p className="text-gray-300 leading-relaxed">
                          {mentor.background}
                          {!mentor.background.endsWith('.') && '.'}
                          {` With a passion for ${mentor.skillset.toLowerCase()}, ${mentor.name.split(' ')[0]} has helped numerous individuals and organizations achieve their technological goals through expert guidance and hands-on mentorship.`}
                        </p>
                      </div>

                      {mentor.education && (
                        <div className="mt-8">
                          <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
                            <BookOpen className="mr-2 h-5 w-5 text-green-500" />
                            Education
                          </h3>
                          <div className="space-y-4">
                            {mentor.education.map((edu, idx) => (
                              <div key={idx} className=" border border-green-500/20 p-4 bg-black hover:bg-gray-800 hover:shadow-md hover:shadow-green-900/10 transition-all">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="font-medium text-white">{edu.degree}</h4>
                                    <p className="text-sm text-gray-400">{edu.institution}</p>
                                  </div>
                                  <Badge variant="outline" className="border-green-500/30 bg-black text-green-400">
                                    {edu.year}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="experience" className="mt-6">
                    {mentor.experience ? (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-3 text-white">Professional Experience</h3>
                        <div className="space-y-6">
                          {mentor.experience.map((exp, idx) => (
                            <Card key={idx} className="bg-gray-900 border-green-500/20 border-l-4 border-l-green-500 hover:shadow-md hover:shadow-green-900/10 transition-all">
                              <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <CardTitle className="text-lg text-white">{exp.position}</CardTitle>
                                    <CardDescription className="text-base text-gray-400">{exp.company}</CardDescription>
                                  </div>
                                  <Badge variant="secondary" className="bg-black text-green-400 border border-green-500/30">
                                    {exp.duration}
                                  </Badge>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <p className="text-gray-300">{exp.description}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-10">
                        <p className="text-gray-400">Experience details will be added soon.</p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="reviews" className="mt-6">
                    {mentor.reviews ? (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-white">Student Reviews</h3>
                          <div className="flex items-center">
                            <div className="mr-2 flex">
                              {renderStars(5)}
                            </div>
                            <span className="text-sm font-medium text-gray-300">
                              {mentor.reviews.length} review{mentor.reviews.length !== 1 ? "s" : ""}
                            </span>
                          </div>
                        </div>

                        <ScrollArea className="h-[500px]  pr-4">
                          <div className="space-y-4">
                            {mentor.reviews.map((review, idx) => (
                              <Card key={idx} className="bg-gray-900 border-green-500/20 hover:border-green-500/40 hover:shadow-md hover:shadow-green-900/10 transition-all">
                                <CardHeader className="pb-2">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <Avatar className="h-10 w-10 mr-3 border-2 border-green-500/20">
                                        <AvatarImage src={review.avatar} alt={review.name} />
                                        <AvatarFallback className="bg-black text-green-400">{getInitials(review.name)}</AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <CardTitle className="text-base text-white">{review.name}</CardTitle>
                                        <div className="flex items-center mt-1">
                                          {renderStars(review.rating)}
                                        </div>
                                      </div>
                                    </div>
                                    <span className="text-xs text-gray-500">{review.date}</span>
                                  </div>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-gray-300">{review.comment}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    ) : (
                      <div className="text-center py-10">
                        <p className="text-gray-400">No reviews yet. Be the first to review {mentor.name}!</p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>

            {/* Contact card */}
            <Card className="mt-8 border-green-500/20 shadow-md bg-gradient-to-r from-black to-gray-900 border">
              <CardHeader>
                <CardTitle className="text-xl text-white">Ready to accelerate your learning?</CardTitle>
                <CardDescription className="text-base text-gray-300">
                  Book a session with {mentor.name} and take your {mentor.skillset.toLowerCase()} skills to the next level.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col sm:flex-row gap-3">
                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-black font-medium shadow-md hover:shadow-lg">
                  <Calendar className="mr-2 h-4 w-4" /> Register for Education
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;