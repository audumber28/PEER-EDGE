"use client";

import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function SignInPage() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isSignedIn) {
      router.push("/interest-selection"); // Redirect to interest selection after sign-in
    }
  }, [isSignedIn, router]);

  useEffect(() => {
    // Simulate form loading delay
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust timing if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden relative">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-700/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-600/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-green-800/10 rounded-full blur-2xl"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        </div>
      </div>

      {/* Left section - Content/Branding */}
      <div className="hidden md:flex flex-col w-1/2 p-12 justify-center bg-black/70 backdrop-blur-sm z-10 border-r border-green-900/20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }} 
          className="max-w-md mx-auto"
        >
          <div className="mb-8">
            <Badge className="mb-4 bg-green-950 text-green-400 border-green-700 px-3 py-1">BETA</Badge>
            <h1 className="text-5xl font-bold mb-3 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                Professional Growth Platform
              </span>
            </h1>
            <p className="text-gray-300 text-xl mb-8">Connect with mentors who can guide your career journey</p>
            <Separator className="my-6 bg-green-900/30" />
          </div>
          
          {/* Enhanced feature highlights with green accents */}
          <div className="space-y-8 mt-8">
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-green-900/20 border border-green-800/50 group-hover:bg-green-900/40 transition-all duration-300 shadow-lg shadow-green-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-green-300 font-semibold text-lg group-hover:text-green-200 transition-colors">Personalized Guidance</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Tailored mentoring for your career goals</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-green-900/20 border border-green-800/50 group-hover:bg-green-900/40 transition-all duration-300 shadow-lg shadow-green-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-green-300 font-semibold text-lg group-hover:text-green-200 transition-colors">Expert Network</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Access to industry professionals</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-green-900/20 border border-green-800/50 group-hover:bg-green-900/40 transition-all duration-300 shadow-lg shadow-green-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-green-300 font-semibold text-lg group-hover:text-green-200 transition-colors">Career Success</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Achieve your professional goals faster</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-3">
              <Avatar className="border-2 border-green-700 h-10 w-10">
                <AvatarImage src="/testimonial1.jpg" />
                <AvatarFallback className="bg-green-900 text-green-200">JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-green-700 h-10 w-10">
                <AvatarImage src="/testimonial2.jpg" />
                <AvatarFallback className="bg-green-900 text-green-200">MR</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-green-700 h-10 w-10">
                <AvatarImage src="/testimonial3.jpg" />
                <AvatarFallback className="bg-green-900 text-green-200">KL</AvatarFallback>
              </Avatar>
              <span className="text-gray-400 ml-2">Join <span className="text-green-400 font-medium">2,500+</span> professionals</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right section - Sign In Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="w-full max-w-md"
        >
          <Card className="bg-black/60 border border-green-900/50 shadow-xl shadow-green-900/20 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </div>
              <CardTitle className="text-2xl text-center text-green-400 font-bold">Welcome Back</CardTitle>
              <CardDescription className="text-center text-gray-400">Sign in to continue your mentoring journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                {loading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                    className="w-10 h-10 border-4 border-gray-800 border-t-green-500 rounded-full"
                  ></motion.div>
                ) : (
                  <SignIn />
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 pt-2 pb-6">
              <Button variant="ghost" className="text-green-500 hover:text-green-400 hover:bg-green-950/30 border border-green-900/40 w-full">
                Need help?
              </Button>
              <div className="text-center text-xs text-gray-500">
                By signing in, you agree to our <a href="#" className="text-green-500 hover:text-green-400">Terms of Service</a> and <a href="#" className="text-green-500 hover:text-green-400">Privacy Policy</a>
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Mobile branding - only visible on small screens */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6, duration: 0.8 }} 
          className="md:hidden mt-12 text-center"
        >
          <h2 className="text-green-400 font-medium">Professional Growth Platform</h2>
          <p className="text-gray-400 text-sm">Accelerate your career with expert guidance</p>
        </motion.div>
      </div>
    </div>
  );
}