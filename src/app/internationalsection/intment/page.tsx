"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Filter, MessageSquare, Globe, Award } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// Combined data structure for mentors with country specializations
const visaMentorData = [
  {
    id: 1,
    name: "Emily Chen",
    expertise: "US Student Visa",
    profilePic: "/avatars/emily-chen.jpg",
    background: "Former US Embassy consultant with 10+ years of experience in student visa counseling",
    rating: 4.9,
    reviewCount: 245,
    availability: "Available now",
    countries: [
      {
        name: "United States",
        flag: "🇺🇸",
        universities: ["Harvard University", "Stanford University", "MIT"],
        successRate: "95%"
      },
      {
        name: "Canada",
        flag: "🇨🇦",
        universities: ["University of Toronto", "McGill University"],
        successRate: "92%"
      }
    ]
  },
  {
    id: 2,
    name: "Dr. Michael Thompson",
    expertise: "UK Scholarship Guidance",
    profilePic: "/avatars/michael-thompson.jpg",
    background: "Academic advisor specializing in UK university scholarship applications",
    rating: 4.8,
    reviewCount: 189,
    availability: "Available from 2025-04-01",
    countries: [
      {
        name: "United Kingdom",
        flag: "🇬🇧",
        universities: ["Oxford University", "Cambridge University", "Imperial College London"],
        successRate: "94%"
      },
      {
        name: "Ireland",
        flag: "🇮🇪",
        universities: ["Trinity College Dublin", "University College Dublin"],
        successRate: "90%"
      }
    ]
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    expertise: "Canadian Immigration",
    profilePic: "/avatars/maria-rodriguez.jpg",
    background: "Registered Canadian immigration consultant",
    rating: 4.7,
    reviewCount: 167,
    availability: "Limited availability",
    countries: [
      {
        name: "Canada",
        flag: "🇨🇦",
        universities: ["University of Toronto", "University of British Columbia", "McGill University"],
        successRate: "93%"
      }
    ]
  },

  {
    id: 4,
    name: "Amir Khan",
    expertise: "Australian Student Visas",
    profilePic: "/avatars/amir-khan.jpg",
    background: "Former education counselor for Australian visa processes",
    rating: 4.9,
    reviewCount: 212,
    availability: "Available this week",
    countries: [
      {
        name: "Australia",
        flag: "🇦🇺",
        universities: ["University of Melbourne", "University of Sydney", "UNSW"],
        successRate: "91%"
      },
      {
        name: "New Zealand",
        flag: "🇳🇿",
        universities: ["University of Auckland", "University of Otago"],
        successRate: "89%"
      }
    ]
  },
  {
    id: 5,
    name: "Sophie Martin",
    expertise: "European Scholarships",
    profilePic: "/avatars/sophie-martin.jpg",
    background: "International education consultant for EU programs",
    rating: 4.8,
    reviewCount: 156,
    availability: "Available from 2025-04-05",
    countries: [
      {
        name: "Germany",
        flag: "🇩🇪",
        universities: ["TU Munich", "Heidelberg University"],
        successRate: "92%"
      },
      {
        name: "France",
        flag: "🇫🇷",
        universities: ["Sorbonne University", "École Polytechnique"],
        successRate: "88%"
      }
    ]
  },
  {
    id: 6,
    name: "Dr. Sarah Wilson",
    expertise: "Medical School Admissions",
    profilePic: "/avatars/sarah-wilson.jpg",
    background: "Former medical school admissions director with expertise in international placements",
    rating: 4.9,
    reviewCount: 178,
    availability: "Available now",
    countries: [
      {
        name: "United States",
        flag: "🇺🇸",
        universities: ["Johns Hopkins University", "Mayo Clinic School of Medicine", "Harvard Medical School"],
        successRate: "93%"
      },
      {
        name: "United Kingdom",
        flag: "🇬🇧",
        universities: ["Imperial College London Medical", "UCL Medical School", "Edinburgh Medical School"],
        successRate: "91%"
      }
    ]
  },
  {
    id: 7,
    name: "Liam O'Connor",
    expertise: "Irish Education",
    profilePic: "/avatars/liam-oconnor.jpg",
    background: "Education consultant specializing in Irish university admissions",
    rating: 4.7,
    reviewCount: 145,
    availability: "Available tomorrow",
    countries: [
      {
        name: "Ireland",
        flag: "🇮🇪",
        universities: ["Trinity College Dublin", "University College Dublin", "National University of Ireland"],
        successRate: "94%"
      }
    ]
  },
  {
    id: 8,
    name: "Yuki Tanaka",
    expertise: "Japanese Studies",
    profilePic: "/avatars/yuki-tanaka.jpg",
    background: "International student advisor for Japanese universities",
    rating: 4.8,
    reviewCount: 167,
    availability: "Available from 2025-04-02",
    countries: [
      {
        name: "Japan",
        flag: "🇯🇵",
        universities: ["University of Tokyo", "Kyoto University", "Waseda University"],
        successRate: "89%"
      }
    ]
  },
  {
    id: 9,
    name: "Anna Schmidt",
    expertise: "German University Applications",
    profilePic: "/avatars/anna-schmidt.jpg",
    background: "German education system specialist with focus on STEM programs",
    rating: 4.8,
    reviewCount: 190,
    availability: "Limited availability",
    countries: [
      {
        name: "Germany",
        flag: "🇩🇪",
        universities: ["TU Berlin", "Ludwig Maximilian University", "KIT"],
        successRate: "92%"
      },
      {
        name: "Austria",
        flag: "🇦🇹",
        universities: ["University of Vienna", "TU Wien"],
        successRate: "88%"
      }
    ]
  },
  {
    id: 10,
    name: "Marco Rossi",
    expertise: "Italian Higher Education",
    profilePic: "/avatars/marco-rossi.jpg",
    background: "Italian university admission consultant and language preparation specialist",
    rating: 4.6,
    reviewCount: 134,
    availability: "Available now",
    countries: [
      {
        name: "Italy",
        flag: "🇮🇹",
        universities: ["University of Bologna", "Politecnico di Milano", "Sapienza University"],
        successRate: "87%"
      }
    ]
  },
  {
    id: 11,
    name: "Lisa Park",
    expertise: "Korean University Admissions",
    profilePic: "/avatars/lisa-park.jpg",
    background: "Korean education consultant with scholarship expertise",
    rating: 4.7,
    reviewCount: 156,
    availability: "Available this week",
    countries: [
      {
        name: "South Korea",
        flag: "🇰🇷",
        universities: ["Seoul National University", "KAIST", "Yonsei University"],
        successRate: "90%"
      }
    ]
  },
  {
    id: 12,
    name: "Prof. Robert Anderson",
    expertise: "Research Programs",
    profilePic: "/avatars/robert-anderson.jpg",
    background: "Former research director specializing in international PhD placements",
    rating: 4.9,
    reviewCount: 201,
    availability: "Available from 2025-04-03",
    countries: [
      {
        name: "United States",
        flag: "🇺🇸",
        universities: ["Caltech", "Princeton University", "Stanford University"],
        successRate: "94%"
      },
      {
        name: "Canada",
        flag: "🇨🇦",
        universities: ["University of Toronto", "University of British Columbia"],
        successRate: "91%"
      }
    ]
  },
  {
    id: 13,
    name: "Isabella Santos",
    expertise: "European Business Schools",
    profilePic: "/avatars/isabella-santos.jpg",
    background: "MBA admissions consultant for top European business schools",
    rating: 4.8,
    reviewCount: 178,
    availability: "Available now",
    countries: [
      {
        name: "Spain",
        flag: "🇪🇸",
        universities: ["IE Business School", "ESADE", "IESE"],
        successRate: "92%"
      },
      {
        name: "Switzerland",
        flag: "🇨🇭",
        universities: ["IMD", "University of St. Gallen", "ETH Zurich"],
        successRate: "89%"
      }
    ]
  },
  {
    id: 14,
    name: "Henrik Nielsen",
    expertise: "Nordic Education",
    profilePic: "/avatars/henrik-nielsen.jpg",
    background: "Specialist in Scandinavian university admissions",
    rating: 4.7,
    reviewCount: 145,
    availability: "Available from 2025-04-04",
    countries: [
      {
        name: "Denmark",
        flag: "🇩🇰",
        universities: ["University of Copenhagen", "Technical University of Denmark"],
        successRate: "91%"
      },
      {
        name: "Sweden",
        flag: "🇸🇪",
        universities: ["KTH Royal Institute", "Uppsala University", "Lund University"],
        successRate: "88%"
      }
    ]
  },
  {
    id: 15,
    name: "Alexandra Petrova",
    expertise: "Art & Design Schools",
    profilePic: "/avatars/alexandra-petrova.jpg",
    background: "Art school admissions specialist with portfolio expertise",
    rating: 4.6,
    reviewCount: 132,
    availability: "Limited availability",
    countries: [
      {
        name: "United Kingdom",
        flag: "🇬🇧",
        universities: ["Royal College of Art", "UAL", "Glasgow School of Art"],
        successRate: "86%"
      },
      {
        name: "France",
        flag: "🇫🇷",
        universities: ["École des Beaux-Arts", "ENSAD", "Gobelins"],
        successRate: "84%"
      }
    ]
  },
  {
    id: 16,
    name: "David Chen",
    expertise: "Singapore Education",
    profilePic: "/avatars/david-chen.jpg",
    background: "Singapore university admissions expert with scholarship focus",
    rating: 4.8,
    reviewCount: 167,
    availability: "Available this week",
    countries: [
      {
        name: "Singapore",
        flag: "🇸🇬",
        universities: ["NUS", "Nanyang Technological University", "Singapore Management University"],
        successRate: "93%"
      }
    ]
  }
];

const countryData = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Ireland", flag: "🇮🇪" }
];

const VisaScholarshipMentors: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [mentors, setMentors] = useState(visaMentorData);
  const [filterVisible, setFilterVisible] = useState(false);

  const handleCountrySelect = (country: string) => {
    setSelectedCountries(prev => {
      const newSelection = prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country];
      
      if (newSelection.length > 0) {
        const filtered = visaMentorData.filter(mentor =>
          mentor.countries.some(c => newSelection.includes(c.name))
        );
        setMentors(filtered);
      } else {
        setMentors(visaMentorData);
      }
      
      return newSelection;
    });
  };

  const resetFilters = () => {
    setSelectedCountries([]);
    setMentors(visaMentorData);
    setFilterVisible(false);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="container mx-auto py-12 px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            International Admission Experts
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find specialized mentors for your target study destination
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
          <Button 
            variant="outline" 
            onClick={() => setFilterVisible(!filterVisible)}
            className="border-green-500/30 text-green-400 hover:bg-green-500/10"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filter by Country
          </Button>

          {selectedCountries.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center mt-4 sm:mt-0">
              <span className="text-sm text-gray-400">Selected countries:</span>
              {selectedCountries.map(country => {
                const countryInfo = countryData.find(c => c.name === country);
                return (
                  <Badge 
                    key={country}
                    className="bg-green-500/20 text-green-300 hover:bg-green-500/30"
                  >
                    {countryInfo?.flag} {country}
                  </Badge>
                );
              })}
              <Button 
                variant="link" 
                onClick={resetFilters}
                className="text-green-400 hover:text-green-300 p-0 h-auto"
              >
                Clear
              </Button>
            </div>
          )}
        </div>

        {/* Country Filter Panel */}
        {filterVisible && (
          <Card className="mb-8 border-green-500/20 bg-black shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-white">Filter by Country</CardTitle>
              <CardDescription className="text-gray-400">
                Select your target study destinations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] rounded-md pr-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {countryData.map(country => (
                    <Badge 
                      key={country.name}
                      variant={selectedCountries.includes(country.name) ? "default" : "outline"}
                      className={`
                        flex items-center gap-2 p-3 cursor-pointer
                        ${selectedCountries.includes(country.name)
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "border-green-500/30 text-gray-300 hover:border-green-500/50 hover:bg-green-900/20"
                        }
                      `}
                      onClick={() => handleCountrySelect(country.name)}
                    >
                      
                      <span className="text-sm font-medium">{country.name}</span>
                    </Badge>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        )}

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.length > 0 ? (
            mentors.map((mentor) => (
              <Card 
                key={mentor.id} 
                className="border-green-500/20 bg-black shadow-md hover:shadow-green-900/20 hover:border-green-500/30 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-green-500/20">
                        <AvatarImage src={mentor.profilePic} alt={mentor.name} />
                        <AvatarFallback className="bg-zinc-800 text-green-400">
                          {getInitials(mentor.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg text-white">{mentor.name}</CardTitle>
                        <Badge className="mt-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium">
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
                  <p className="text-gray-300 text-sm mb-4">{mentor.background}</p>
                  
                  {/* Country Specializations */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-green-400">Country Expertise:</h4>
                    <div className="space-y-2">
                      {mentor.countries.map((country) => (
                        <div
                          key={country.name}
                          className="bg-zinc-900/40 rounded-lg p-3"
                        >
                          <div className="flex items-center gap-2 mb-2">
                           
                            <span className="text-sm font-medium text-white">
                              {country.name}
                            </span>
                            <Badge className="ml-auto bg-green-500/20 text-green-300">
                              {country.successRate} Success
                            </Badge>
                          </div>
                          <div className="text-xs text-gray-400">
                            Top universities: {country.universities.join(", ")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-xs text-gray-300">
                    <Globe className="h-3 w-3 mr-1 text-green-500" />
                    <span>{mentor.availability}</span>
                  </div>
                </CardContent>
                <Separator className="bg-zinc-800" />
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
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium"
                  >
                    <Link href={`/visamentorprofile/${mentor.id}`}>
                      View Profile
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center p-10 border border-dashed border-green-500/20 rounded-lg bg-black/50">
              <Award className="mx-auto h-10 w-10 text-green-500/50 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No mentors found for selected countries
              </h3>
              <p className="text-gray-400 mb-4">
                Try selecting different countries or clear your filters
              </p>
              <Button 
                onClick={resetFilters}
                className="bg-green-600 hover:bg-green-700 text-white font-medium"
              >
                Show All Mentors
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaScholarshipMentors;