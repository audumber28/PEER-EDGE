"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Toaster, toast } from "sonner";

// Organized interests by categories for better user experience
const interestsList = [
  // Core Development
  {
    category: "Core Development",
    items: [
      { id: "web-dev", name: "Web Development", icon: "💻", description: "Frontend, backend, and full-stack development" },
      { id: "mobile-dev", name: "Mobile Development", icon: "📱", description: "iOS, Android, and cross-platform apps" },
      { id: "programming-fundamentals", name: "Programming Fundamentals", icon: "📚", description: "Basic programming concepts and practices" },
      { id: "data-structures", name: "Data Structures", icon: "🏗️", description: "Algorithms and data structure implementations" },
    ]
  },
  // Emerging Technologies
  {
    category: "Emerging Technologies",
    items: [
      { id: "ml", name: "Machine Learning", icon: "🧠", description: "AI, neural networks, and deep learning" },
      { id: "blockchain", name: "Blockchain", icon: "🔗", description: "Smart contracts and DApps" },
      { id: "quantum", name: "Quantum Computing", icon: "⚛️", description: "Quantum algorithms and computing" },
      { id: "ar-vr", name: "AR/VR Development", icon: "🥽", description: "Augmented and virtual reality" },
      { id: "robotics", name: "Robotics Engineering", icon: "🤖", description: "Robotics and automation" },
    ]
  },
  // Infrastructure & Security
  {
    category: "Infrastructure & Security",
    items: [
      { id: "cloud", name: "Cloud Computing", icon: "☁️", description: "AWS, Azure, and cloud platforms" },
      { id: "security", name: "Cybersecurity", icon: "🔒", description: "Security and penetration testing" },
      { id: "devops", name: "DevOps", icon: "🔄", description: "CI/CD and automation" },
      { id: "networks", name: "Computer Networks", icon: "🌐", description: "Network architecture and protocols" },
      { id: "system-arch", name: "System Architecture", icon: "🏛️", description: "System design and architecture" },
    ]
  },
  // Data & Analysis
  {
    category: "Data & Analysis",
    items: [
      { id: "data-science", name: "Data Science", icon: "📊", description: "Data analysis and visualization" },
      { id: "db-management", name: "Database Management", icon: "🗄️", description: "SQL and NoSQL databases" },
      { id: "bioinformatics", name: "Bioinformatics", icon: "🧬", description: "Biological data analysis" },
      { id: "physics-computing", name: "Physics & Computing", icon: "⚡", description: "Computational physics" },
    ]
  },
  // Software Engineering Practice
  {
    category: "Software Engineering",
    items: [
      { id: "software-arch", name: "Software Architecture", icon: "🏗️", description: "Software design patterns" },
      { id: "testing", name: "Software Testing", icon: "🧪", description: "QA and test automation" },
      { id: "version-control", name: "Version Control", icon: "📝", description: "Git and code management" },
      { id: "code-review", name: "Code Review Skills", icon: "👀", description: "Code review best practices" },
      { id: "open-source", name: "Open Source Development", icon: "🌟", description: "Contributing to open source" },
    ]
  },
  // Academic & Career
  {
    category: "Academic & Career",
    items: [
      { id: "academic-research", name: "Academic Research", icon: "🔬", description: "Research methodology" },
      { id: "thesis-writing", name: "Thesis Writing", icon: "📖", description: "Academic writing and publication" },
      { id: "career-counseling", name: "Career Counseling", icon: "🎯", description: "Career guidance and planning" },
      { id: "interview-prep", name: "Interview Preparation", icon: "🎤", description: "Technical interview prep" },
      { id: "internship", name: "Internship Guidance", icon: "🎓", description: "Finding and securing internships" },
    ]
  },
];

export default function InterestSelectionPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const router = useRouter();

  const handleSelection = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(prev => prev.filter(i => i !== interest));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests(prev => [...prev, interest]);
    } else {
      toast.error("Maximum 5 interests allowed", {
        description: "Please deselect an interest before adding a new one",
      });
    }
  };

  const handleSubmit = async () => {
    if (selectedInterests.length === 0) {
      toast.error("Please select at least one interest", {
        description: "You need to select interests to find matching mentors",
      });
      return;
    }
    
    localStorage.setItem("userInterests", JSON.stringify(selectedInterests));
    
    toast.success("Preferences saved", {
      description: "Finding your perfect mentors...",
    });
    
    setTimeout(() => {
      router.push("/mentors");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Toaster 
        theme="dark" 
        position="top-center"
        toastOptions={{
          style: { 
            background: "#0f0f0f", 
            border: "1px solid rgba(22, 163, 74, 0.2)",
            color: "#f9fafb" 
          },
        }}
      />
      
      {/* Background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black"></div>
      <div className="fixed top-20 right-20 w-72 h-72 rounded-full bg-green-900/10 blur-3xl"></div>
      <div className="fixed bottom-20 left-20 w-80 h-80 rounded-full bg-green-900/5 blur-3xl"></div>
      
      <Card className="w-full max-w-7xl bg-black/60 backdrop-blur-sm border-green-900/30 shadow-xl shadow-green-900/5 relative z-10">
        <CardHeader className="text-center pb-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              What Would You Like to Learn?
            </CardTitle>
            <CardDescription className="text-slate-400 mt-2">
              Select up to 5 areas of interest to match with our expert mentors
            </CardDescription>
          </motion.div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {interestsList.map((category, categoryIndex) => (
              <div key={category.category} className="mb-8 last:mb-0">
                <h2 className="text-xl font-semibold text-green-400 mb-4">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((interest, index) => (
                    <motion.div
                      key={interest.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * (index + categoryIndex * 5) }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card 
                        className={`cursor-pointer border transition-all duration-300 ${
                          selectedInterests.includes(interest.name)
                            ? "bg-green-900/20 border-green-700/50"
                            : "bg-gray-900/40 border-gray-800 hover:border-gray-700"
                        }`}
                        onClick={() => handleSelection(interest.name)}
                      >
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="flex items-center gap-4">
                            <Checkbox 
                              id={interest.id}
                              checked={selectedInterests.includes(interest.name)}
                              onCheckedChange={() => handleSelection(interest.name)}
                              className="border-green-700 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
                              disabled={selectedInterests.length >= 5 && !selectedInterests.includes(interest.name)}
                            />
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${
                              selectedInterests.includes(interest.name)
                                ? "from-green-900 to-green-700"
                                : "from-gray-800 to-gray-700"
                            }`}>
                              <span className="text-xl">{interest.icon}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className={`font-medium transition-colors ${
                              selectedInterests.includes(interest.name) ? "text-green-400" : "text-slate-200"
                            }`}>
                              {interest.name}
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">{interest.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4 pt-2 pb-6">
          <div className="w-full flex items-center justify-center mb-2 space-x-2 flex-wrap gap-2">
            {selectedInterests.map((interest) => (
              <Badge 
                key={interest} 
                variant="outline" 
                className="bg-green-900/30 text-green-400 border-green-800 hover:bg-green-900/40"
              >
                {interest}
              </Badge>
            ))}
            {selectedInterests.length === 0 && (
              <span className="text-sm text-slate-500">No interests selected yet</span>
            )}
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                onClick={handleSubmit}
                disabled={selectedInterests.length === 0}
                className="px-8 py-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg border-none"
                variant="default"
              >
                Find My Mentors
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </motion.div>
            <p className="text-center text-xs text-slate-500">
              Selected {selectedInterests.length} of 5 maximum interests
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}