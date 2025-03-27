"use client";

import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function SignInPage() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/interest-selection"); // Redirect to interest selection after sign-in
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Left section - Content/Branding */}
      <div className="hidden md:flex flex-col w-1/2 p-12 justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-4xl font-bold mb-3 tracking-tight">Professional Growth Platform</h1>
          <p className="text-slate-300 text-xl mb-8">Connect with mentors who can guide your career journey</p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="p-1.5 bg-slate-800/50 border-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                  <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </Badge>
              <div>
                <h3 className="text-white font-medium">Personalized Guidance</h3>
                <p className="text-slate-400 text-sm mt-1">Customized mentoring tailored to your specific career goals</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="p-1.5 bg-slate-800/50 border-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                  <circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </Badge>
              <div>
                <h3 className="text-white font-medium">Industry Experts</h3>
                <p className="text-slate-400 text-sm mt-1">Learn from professionals with proven track records</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="p-1.5 bg-slate-800/50 border-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
              </Badge>
              <div>
                <h3 className="text-white font-medium">Career Resources</h3>
                <p className="text-slate-400 text-sm mt-1">Access to tools and materials for professional development</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="border-2 border-indigo-500">
                  <AvatarImage src="https://i.pravatar.cc/100?img=1" alt="Mentor" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-indigo-500">
                  <AvatarImage src="https://i.pravatar.cc/100?img=2" alt="Mentor" />
                  <AvatarFallback>KT</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-indigo-500">
                  <AvatarImage src="https://i.pravatar.cc/100?img=3" alt="Mentor" />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <p className="text-sm text-slate-300 ml-2">+120 professionals ready to mentor you</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Right section - Sign In Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md z-10"
        >
          <Card className="bg-slate-800/60 border-slate-700 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-center">Welcome</CardTitle>
              <CardDescription className="text-center text-slate-400">
                Sign in to continue your mentoring journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <SignIn />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pb-6">
              <Separator className="bg-slate-700" />
              <div className="text-center text-sm text-slate-400">
                Having trouble signing in? <Button variant="link" className="text-indigo-400 p-0 h-auto">Contact support</Button>
              </div>
            </CardFooter>
          </Card>
          
          <div className="mt-10">
            <Card className="bg-slate-800/40 border-slate-700 backdrop-blur-sm p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/100?img=5" alt="Testimonial" />
                  <AvatarFallback>TR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-semibold text-sm">Thomas Reynolds</h4>
                    <Badge variant="secondary" className="ml-2 bg-indigo-900/50 text-indigo-300 text-xs">UX Designer</Badge>
                  </div>
                  <p className="text-slate-400 text-sm italic">
                    "The mentorship program completely transformed my career trajectory. I received guidance that helped me land my dream job."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-indigo-700/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}