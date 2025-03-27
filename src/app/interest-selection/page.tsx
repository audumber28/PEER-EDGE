"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Toaster, toast } from "sonner";

const interestsList = [
  { id: "web-dev", name: "Web Development", icon: "💻", description: "Frontend, backend, and full-stack development" },
  { id: "ml", name: "Machine Learning", icon: "🧠", description: "AI, neural networks, and deep learning" },
  { id: "security", name: "Cybersecurity", icon: "🔒", description: "Network security, penetration testing, and compliance" },
  { id: "cloud", name: "Cloud Computing", icon: "☁️", description: "AWS, Azure, Google Cloud, and DevOps" },
  { id: "blockchain", name: "Blockchain", icon: "🔗", description: "Smart contracts, DApps, and crypto technologies" },
  { id: "data", name: "Data Science", icon: "📊", description: "Data analysis, visualization, and big data" },
];

export default function InterestSelectionPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const router = useRouter();

  const handleSelection = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = async () => {
    if (selectedInterests.length === 0) {
      toast.error("Please select at least one interest to continue", {
        description: "You need to select interests to find matching mentors",
      });
      return;
    }
    
    localStorage.setItem("userInterests", JSON.stringify(selectedInterests));
    
    toast.success("Preferences saved", {
      description: "Redirecting you to the mentors page",
    });
    
    setTimeout(() => {
      router.push("/mentors");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {/* Sonner Toaster component */}
      <Toaster 
        theme="dark" 
        position="top-center"
        toastOptions={{
          style: { 
            background: "#0f0f0f", 
            border: "1px solid rgba(22, 163, 74, 0.2)",
            color: "#f9fafb" 
          },
          className: "my-toast-class",
        }}
      />
      
      {/* Background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black"></div>
      <div className="fixed top-20 right-20 w-72 h-72 rounded-full bg-green-900/10 blur-3xl"></div>
      <div className="fixed bottom-20 left-20 w-80 h-80 rounded-full bg-green-900/5 blur-3xl"></div>
      
      <Card className="w-full max-w-3xl bg-black/60 backdrop-blur-sm border-green-900/30 shadow-xl shadow-green-900/5 relative z-10">
        <CardHeader className="text-center pb-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              Select Your Interests
            </CardTitle>
            <CardDescription className="text-slate-400 mt-2">
              Choose the areas you're interested in to help us find the right mentors for you
            </CardDescription>
          </motion.div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interestsList.map((interest, index) => (
                <motion.div
                  key={interest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
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
          
          <div className="flex justify-center">
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
                Continue to Mentors
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
          </div>
          
          <p className="text-center text-xs text-slate-500 mt-4">
            Selected {selectedInterests.length} of {interestsList.length} interests
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}