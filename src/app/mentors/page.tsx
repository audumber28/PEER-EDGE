"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, UserCheck, Filter, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const mentorData = [
  // Previous mentors (1-30 remain the same...)
  
  {
    id: 31,
    name: "Dr. Maya Gupta",
    expertise: "Mathematics & Algorithms",
    profilePic: "/avatars/maya-gupta.jpg",
    background: "Mathematics professor specializing in algorithm analysis and competitive programming",
    rating: 4.9,
    reviewCount: 134,
    availability: "Available from 2025-04-01"
  },
  {
    id: 32,
    name: "Prof. Adrian Foster",
    expertise: "Physics & Computing",
    profilePic: "/avatars/adrian-foster.jpg",
    background: "Computational physicist with expertise in scientific computing and numerical methods",
    rating: 4.8,
    reviewCount: 92,
    availability: "Available now"
  },
  {
    id: 33,
    name: "Grace Wong",
    expertise: "Software Testing",
    profilePic: "/avatars/grace-wong.jpg",
    background: "ISTQB certified tester teaching modern testing practices and automation",
    rating: 4.7,
    reviewCount: 88,
    availability: "Available from 2025-04-05"
  },
  {
    id: 34,
    name: "Dr. Aisha Khan",
    expertise: "Data Structures",
    profilePic: "/avatars/aisha-khan.jpg",
    background: "Computer Science professor specializing in fundamental data structures and algorithms",
    rating: 4.9,
    reviewCount: 167,
    availability: "Limited availability"
  },
  {
    id: 35,
    name: "Lucas Fernandez",
    expertise: "Open Source Development",
    profilePic: "/avatars/lucas-fernandez.jpg",
    background: "Open source contributor and maintainer, guiding students in OSS contributions",
    rating: 4.8,
    reviewCount: 73,
    availability: "Available this week"
  },
  {
    id: 36,
    name: "Dr. Rebecca Stone",
    expertise: "Research Paper Writing",
    profilePic: "/avatars/rebecca-stone.jpg",
    background: "Published researcher helping students with paper writing and journal submissions",
    rating: 4.8,
    reviewCount: 105,
    availability: "Available from 2025-04-02"
  },
  {
    id: 37,
    name: "Nathan Price",
    expertise: "Interview Preparation",
    profilePic: "/avatars/nathan-price.jpg",
    background: "Tech interviewer with experience at FAANG companies, specializing in coding interviews",
    rating: 4.9,
    reviewCount: 192,
    availability: "Available now"
  },
  {
    id: 38,
    name: "Dr. Isabella Romano",
    expertise: "Computer Networks",
    profilePic: "/avatars/isabella-romano.jpg",
    background: "Networking professor with industry experience in network protocols and security",
    rating: 4.7,
    reviewCount: 84,
    availability: "Available from 2025-04-03"
  },
  {
    id: 39,
    name: "Prof. Hiroshi Tanaka",
    expertise: "Operating Systems",
    profilePic: "/avatars/hiroshi-tanaka.jpg",
    background: "OS researcher teaching system programming and kernel development",
    rating: 4.8,
    reviewCount: 112,
    availability: "Available next week"
  },
  {
    id: 40,
    name: "Sophia Anderson",
    expertise: "Presentation Skills",
    profilePic: "/avatars/sophia-anderson.jpg",
    background: "Communications expert helping students with technical presentations and public speaking",
    rating: 4.8,
    reviewCount: 143,
    availability: "Available now"
  },
  {
    id: 41,
    name: "Dr. Victor Popov",
    expertise: "Computer Graphics",
    profilePic: "/avatars/victor-popov.jpg",
    background: "Graphics researcher specializing in real-time rendering and OpenGL",
    rating: 4.7,
    reviewCount: 76,
    availability: "Available from 2025-04-10"
  },
  {
    id: 42,
    name: "Linda Martinez",
    expertise: "Code Review Skills",
    profilePic: "/avatars/linda-martinez.jpg",
    background: "Senior developer teaching best practices in code review and collaboration",
    rating: 4.8,
    reviewCount: 95,
    availability: "Available this week"
  },
  {
    id: 43,
    name: "Prof. Alan Wright",
    expertise: "Compiler Design",
    profilePic: "/avatars/alan-wright.jpg",
    background: "Language design expert teaching compiler construction and optimization",
    rating: 4.7,
    reviewCount: 68,
    availability: "Limited availability"
  },
  {
    id: 44,
    name: "Dr. Sarah O'Connor",
    expertise: "Software Architecture",
    profilePic: "/avatars/sarah-oconnor.jpg",
    background: "Software architect teaching system design and architectural patterns",
    rating: 4.9,
    reviewCount: 124,
    availability: "Available from 2025-04-01"
  },
  {
    id: 45,
    name: "Mohammed Al-Rashid",
    expertise: "Version Control",
    profilePic: "/avatars/mohammed-alrashid.jpg",
    background: "DevOps engineer teaching Git workflows and collaboration tools",
    rating: 4.8,
    reviewCount: 87,
    availability: "Available now"
  }
];

// Updated expertise areas including new additions
const allExpertiseAreas = [
  // Previous expertise areas...
  "Web Development",
  "Machine Learning",
  "Cybersecurity",
  "Blockchain",
  "Cloud Computing",
  "Mobile Development",
  "DevOps",
  "UI/UX Design",
  "Data Science",
  "System Architecture",
  "Game Development",
  "Quality Assurance",
  "Database Management",
  "Product Management",
  "Embedded Systems",
  "Quantum Computing",
  "Robotics Engineering",
  "Bioinformatics",
  "AR/VR Development",
  "Network Architecture",
  "Academic Research",
  "Thesis Writing",
  "Career Counseling",
  "Graduate School Prep",
  "Study Skills",
  "Programming Fundamentals",
  "Research Methods",
  "Internship Guidance",
  "Technical Writing",
  "Project Management",
  
  // New expertise areas
  "Mathematics & Algorithms",
  "Physics & Computing",
  "Software Testing",
  "Data Structures",
  "Open Source Development",
  "Research Paper Writing",
  "Interview Preparation",
  "Computer Networks",
  "Operating Systems",
  "Presentation Skills",
  "Computer Graphics",
  "Code Review Skills",
  "Compiler Design",
  "Software Architecture",
  "Version Control"
];

export default function MentorsPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [mentors, setMentors] = useState<typeof mentorData>([]);
  const [showAllMentors, setShowAllMentors] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    const storedInterests = JSON.parse(localStorage.getItem("userInterests") || "[]");
    setSelectedInterests(storedInterests);

    // Filter mentors based on selected interests or show all if none selected
    if (storedInterests.length > 0 && !showAllMentors) {
      setMentors(mentorData.filter((mentor) => storedInterests.includes(mentor.expertise)));
    } else {
      setMentors(mentorData);
    }
  }, [showAllMentors]);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const toggleInterest = (expertise: string) => {
    setSelectedInterests(prev => {
      const newInterests = prev.includes(expertise) 
        ? prev.filter(i => i !== expertise) 
        : [...prev, expertise];
      
      localStorage.setItem("userInterests", JSON.stringify(newInterests));
      return newInterests;
    });
  };

  const applyFilters = () => {
    if (selectedInterests.length > 0) {
      setMentors(mentorData.filter((mentor) => selectedInterests.includes(mentor.expertise)));
      setShowAllMentors(false);
    } else {
      setMentors(mentorData);
      setShowAllMentors(true);
    }
    setFilterVisible(false);
  };

  const resetFilters = () => {
    setSelectedInterests([]);
    localStorage.setItem("userInterests", JSON.stringify([]));
    setMentors(mentorData);
    setShowAllMentors(true);
  };

  // Function to get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto py-12 px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Find Your Perfect Mentor
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with industry experts who can guide you through your learning journey and help you achieve your goals.
          </p>
        </div>

        {/* Filter controls */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Button 
              variant="outline" 
              onClick={toggleFilter}
              className="border-green-500/30 text-green-400 hover:bg-green-500/10 hover:text-green-300"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter Mentors
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {selectedInterests.length > 0 && (
              <>
                <span className="text-sm text-gray-400">Active filters:</span>
                {selectedInterests.map(interest => (
                  <Badge 
                    key={interest}
                    variant="secondary" 
                    className="bg-green-500/20 text-green-300 hover:bg-green-500/30"
                  >
                    {interest}
                  </Badge>
                ))}
                <Button 
                  variant="link" 
                  onClick={resetFilters}
                  className="text-green-400 hover:text-green-300 p-0 h-auto"
                >
                  Clear
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Filter panel */}
        {filterVisible && (
          <Card className="mb-8 border-green-500/20 bg-gray-900 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-white">Filter by Expertise</CardTitle>
              <CardDescription className="text-gray-400">
                Select the areas you're interested in learning about
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] rounded-md pr-4">
                <div className="flex flex-wrap gap-2">
                  {allExpertiseAreas.map(expertise => (
                    <Badge 
                      key={expertise}
                      variant={selectedInterests.includes(expertise) ? "default" : "outline"}
                      className={selectedInterests.includes(expertise) 
                        ? "bg-green-600 hover:bg-green-700 text-black cursor-pointer" 
                        : "border-green-500/30 text-gray-300 hover:border-green-500/50 hover:bg-green-900/20 cursor-pointer"}
                      onClick={() => toggleInterest(expertise)}
                    >
                      {expertise}
                    </Badge>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={resetFilters}
                className="border-green-500/30 text-green-400 hover:bg-green-500/10"
              >
                Reset
              </Button>
              <Button 
                onClick={applyFilters}
                className="bg-green-600 hover:bg-green-700 text-black font-medium"
              >
                Apply Filters
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Mentors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.length > 0 ? (
            mentors.map((mentor) => (
              <Card 
                key={mentor.id} 
                className="border-green-500/20 bg-gray-900 shadow-md hover:shadow-green-900/20 hover:border-green-500/30 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-green-500/20">
                        <AvatarImage src={mentor.profilePic} alt={mentor.name} />
                        <AvatarFallback className="bg-gray-800 text-green-400">{getInitials(mentor.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg text-white">{mentor.name}</CardTitle>
                        <Badge 
                          className="mt-1 bg-gradient-to-r from-green-600 to-green-700 text-black font-medium"
                        >
                          {mentor.expertise}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-green-300">
                      <span className="font-bold">{mentor.rating}</span>
                      <div className="ml-1 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-3 w-3 ${i < Math.floor(mentor.rating) ? "text-green-400" : "text-gray-600"}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-gray-400">({mentor.reviewCount})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{mentor.background}</p>
                  <div className="mt-3 flex items-center text-xs text-gray-300">
                    <Calendar className="h-3 w-3 mr-1 text-green-500" />
                    <span>{mentor.availability}</span>
                  </div>
                </CardContent>
                <Separator className="bg-gray-800" />
                <CardFooter className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                  <Button 
                    size="sm" 
                    asChild
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium"
                  >
                    <Link href={`/mentorprofile/${mentor.id - 1}`}>
                      View Profile
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center p-10 border border-dashed border-green-500/20 rounded-lg bg-gray-900/50">
              <UserCheck className="mx-auto h-10 w-10 text-green-500/50 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No matching mentors found</h3>
              <p className="text-gray-400 mb-4">
                We couldn't find any mentors matching your selected interests.
              </p>
              <Button 
                onClick={resetFilters}
                className="bg-green-600 hover:bg-green-700 text-black font-medium"
              >
                Show All Mentors
              </Button>
            </div>
          )}
        </div>

        {/* Show more button */}
        {mentors.length > 0 && mentors.length < mentorData.length && (
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAllMentors(true)}
              className="border-green-500/30 text-green-400 hover:bg-green-500/10"
            >
              Show All Mentors
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-green-500/20 bg-gradient-to-r from-gray-900 to-black shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Ready to accelerate your learning?</CardTitle>
              <CardDescription className="text-gray-400 text-base">
                Join our mentorship program today and get personalized guidance from industry experts.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center pb-6">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium px-6">
                Get Started Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}