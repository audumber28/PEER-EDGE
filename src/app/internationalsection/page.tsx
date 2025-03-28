"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GraduationCap, Globe, BookOpen, DollarSign, Calendar, ArrowRight } from "lucide-react";

interface Requirement {
  category: string;
  options: string[];
  icon: React.ReactNode;
}

const requirements: Requirement[] = [
  {
    category: "Destination Country",
    options: [
      "United States 🇺🇸",
      "United Kingdom 🇬🇧",
      "Canada 🇨🇦",
      "Australia 🇦🇺",
      "Germany 🇩🇪",
      "France 🇫🇷",
      "New Zealand 🇳🇿",
      "Ireland 🇮🇪",
      "Singapore 🇸🇬",
      "Japan 🇯🇵"
    ],
    icon: <Globe className="h-5 w-5" />
  },
  {
    category: "Study Level",
    options: [
      "Undergraduate",
      "Masters",
      "PhD",
      "MBA",
      "Research",
      "Certificate Program",
      "Language Course"
    ],
    icon: <GraduationCap className="h-5 w-5" />
  },
  {
    category: "Support Type",
    options: [
      "Visa Application",
      "Scholarship Application",
      "University Selection",
      "Document Preparation",
      "Interview Preparation",
      "Financial Planning",
      "Language Test Preparation",
      "Complete Admission Process"
    ],
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    category: "Budget Range",
    options: [
      "Full Scholarship",
      "Partial Scholarship",
      "Self-Funded",
      "Need Financial Aid",
      "Government Sponsored",
      "Research Fellowship"
    ],
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    category: "Timeline",
    options: [
      "Immediate (1-3 months)",
      "Short Term (3-6 months)",
      "Medium Term (6-12 months)",
      "Long Term (>12 months)",
      "Next Academic Year"
    ],
    icon: <Calendar className="h-5 w-5" />
  }
];

const StudentRequirementsForm: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
  const currentDate = "2025-03-27 18:54:49"; // You can make this dynamic
  const currentUser = "audumber28";

  const handleOptionToggle = (category: string, option: string) => {
    setSelectedOptions(prev => {
      const current = prev[category] || [];
      const updated = current.includes(option)
        ? current.filter(item => item !== option)
        : [...current, option];
      return {
        ...prev,
        [category]: updated
      };
    });
  };

  const handleSubmit = () => {
    // Navigate to mentors page with selected requirements
    // You can use Next.js router or your preferred navigation method
    console.log("Selected Requirements:", selectedOptions);
  };

  const isFormValid = Object.keys(selectedOptions).length === requirements.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="container mx-auto py-12 px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
            Tell Us About Your Study Plans
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Help us match you with the perfect mentor by sharing your requirements
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm text-gray-400">
            <span>Date: {currentDate}</span>
            <span>|</span>
            <span>User: {currentUser}</span>
          </div>
        </div>

        {/* Requirements Form */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {requirements.map((req) => (
              <Card key={req.category} className="border-blue-500/20 bg-blue-950/50 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">{req.icon}</span>
                    <CardTitle className="text-lg text-white">{req.category}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    Select all that apply
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-full">
                    <div className="flex flex-wrap gap-2">
                      {req.options.map((option) => (
                        <Badge
                          key={option}
                          variant={selectedOptions[req.category]?.includes(option) ? "default" : "outline"}
                          className={`
                            cursor-pointer px-3 py-1.5
                            ${selectedOptions[req.category]?.includes(option)
                              ? "bg-blue-600 hover:bg-blue-700 text-white"
                              : "border-blue-500/30 text-gray-300 hover:border-blue-500/50 hover:bg-blue-900/20"
                            }
                          `}
                          onClick={() => handleOptionToggle(req.category, option)}
                        >
                          {option}
                        </Badge>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                {selectedOptions[req.category]?.length > 0 && (
                  <CardFooter className="pt-0">
                    <p className="text-xs text-blue-400">
                      {selectedOptions[req.category].length} selected
                    </p>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <Button
              size="lg"
              disabled={!isFormValid}
              onClick={handleSubmit}
              className={`
                px-8 py-6 text-lg font-medium
                ${isFormValid
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                  : "bg-blue-900/50 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              Find Matching Mentors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {!isFormValid && (
              <p className="mt-2 text-sm text-gray-400">
                Please select at least one option from each category
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRequirementsForm;