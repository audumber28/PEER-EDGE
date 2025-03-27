"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ChevronLeft, Mail, Calendar, Award, MapPin, Link2, Github, Linkedin, Twitter, DollarSign, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// Import mentor data
const mentorData = [
  {
    id: 31,
    name: "Dr. Maya Gupta",
    expertise: "Mathematics & Algorithms",
    skills: [
      "Algorithm Analysis",
      "Competitive Programming",
      "Dynamic Programming",
      "Graph Theory",
      "Number Theory",
      "Mathematical Optimization",
      "Discrete Mathematics",
      "Complexity Theory"
    ],
    profilePic: "/avatars/maya-gupta.jpg",
    background: "Mathematics professor specializing in algorithm analysis and competitive programming",
    rating: 4.9,
    reviewCount: 134,
    availability: "Available from 2025-04-01"
  },
  // ... rest of your mentor data
];

interface Mentor {
  id: number;
  name: string;
  expertise: string;
  skills: string[];
  profilePic: string;
  background: string;
  rating: number;
  reviewCount: number;
  availability: string;
}

const MentorProfile = () => {
  const params = useParams();
  const mentorId = Number(params.id);
  
  // Find mentor by adjusting the ID offset
  const mentor = mentorData.find(m => m.id === mentorId + 31);

  // State for current time and user
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [currentUser] = useState("audumber28");

  // Update current time every second
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toISOString()
        .replace('T', ' ')
        .replace(/\.\d+Z$/, '');
      setCurrentDateTime(formattedDateTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto border-green-500/20 bg-gray-900">
            <CardHeader>
              <CardTitle className="text-xl text-white">Mentor Not Found</CardTitle>
              <CardDescription className="text-gray-400">
                The mentor profile you're looking for doesn't exist.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-black">
                <Link href="/mentors">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Mentors
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
        {/* Current Time and User Info */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center bg-gray-900/50 rounded-lg p-4 border border-green-500/20">
          <div className="flex items-center mb-3 sm:mb-0">
            <Clock className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-gray-300 text-sm">
              {currentDateTime} UTC
            </span>
          </div>
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarFallback className="bg-green-600 text-black text-xs">
                {getInitials(currentUser)}
              </AvatarFallback>
            </Avatar>
            <span className="text-gray-300 text-sm">{currentUser}</span>
          </div>
        </div>

        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" className="group mb-6 text-gray-400 hover:text-green-400 hover:bg-black/40" asChild>
            <Link href="/mentors">
              <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> 
              Back to Mentors
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Profile information */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 border-green-500/20 bg-gray-900 shadow-md hover:shadow-green-900/20 transition-shadow duration-300">
              <CardHeader className="text-center pb-4 pt-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-xl">
                <div className="mb-4 relative mx-auto">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 opacity-75 blur"></div>
                    <Avatar className="w-32 h-32 border-4 border-black relative">
                      <AvatarImage src={mentor.profilePic} alt={mentor.name} />
                      <AvatarFallback className="text-2xl font-semibold bg-gray-800 text-green-400">
                        {getInitials(mentor.name)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="inline-flex items-center justify-center absolute bottom-0 right-1/2 translate-x-16 translate-y-1/4 transform">
                    <Badge className="px-3 py-1.5 text-sm bg-gradient-to-r from-green-600 to-green-700 text-black font-medium shadow-md">
                      {mentor.expertise}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold mt-4 text-white">{mentor.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 pb-8">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="mr-3 h-4 w-4 text-green-500" />
                    <span>{mentor.availability}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Award className="mr-3 h-4 w-4 text-green-500" />
                    <span>{mentor.rating} Rating ({mentor.reviewCount} reviews)</span>
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                {/* Skills */}
                <div>
                  <h3 className="font-medium mb-3 text-gray-300">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="rounded-md px-2.5 py-1 bg-black text-green-400 border border-green-500/30 hover:bg-green-900/30 hover:text-green-300 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="bg-gradient-to-b from-gray-900 to-black rounded-b-xl pt-2">
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium shadow-md hover:shadow-lg transition-all">
                  Schedule a Session
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-2">
            <Card className="border-green-500/20 bg-gray-900 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-white">About {mentor.name}</CardTitle>
                <CardDescription className="text-gray-400">
                  {mentor.background}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Rating and reviews summary */}
                  <div className="bg-black/30 rounded-lg p-6 border border-green-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Student Reviews</h3>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {renderStars(mentor.rating)}
                        </div>
                        <span className="text-green-400 font-semibold">{mentor.rating}</span>
                        <span className="text-gray-400 ml-2">({mentor.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact card */}
            <Card className="mt-8 border-green-500/20 shadow-md bg-gradient-to-r from-black to-gray-900 border">
              <CardHeader>
                <CardTitle className="text-xl text-white">Ready to accelerate your learning?</CardTitle>
                <CardDescription className="text-base text-gray-300">
                  Book a session with {mentor.name} and take your {mentor.expertise.toLowerCase()} skills to the next level.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col sm:flex-row gap-3">
                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-black font-medium shadow-md hover:shadow-lg">
                  <Calendar className="mr-2 h-4 w-4" /> Schedule a Session
                </Button>
                <Button variant="outline" className="w-full sm:w-auto border-green-500/30 text-green-400 hover:bg-green-900/30 hover:text-green-300">
                  <MessageSquare className="mr-2 h-4 w-4" /> Send a Message
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