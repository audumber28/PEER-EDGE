"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function intrests() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black/40 to-black/60 pointer-events-none"></div>

      {/* Platform Name - Top Left Corner */}
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-4 text-2xl font-semibold tracking-wide text-white/90 flex items-center z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
       PEER-EDGE
      </motion.h2>

      {/* User Profile - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <SignedIn>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <UserButton 
              afterSignOutUrl="/sign-in" 
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10 ring-2 ring-green-500/70 hover:ring-green-400 transition-all",
                }
              }} 
            />
          </motion.div>
        </SignedIn>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <Card className="w-full shadow-2xl border border-green-500/20 bg-black/60 backdrop-blur-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <CardContent className="p-8 text-center">
            {/* Signed In State */}
            <SignedIn>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
                  Welcome Back
                </h1>
                <p className="text-green-100/70 mb-6 text-sm tracking-wide">
                  You're successfully signed in to your account.
                </p>
                <div className="flex flex-col space-y-4">
                  <Link href="/main" className="w-full">
                    <Button 
                      variant="default" 
                      className="w-full bg-green-600/90 hover:bg-green-700 transition-colors duration-300 text-black font-medium"
                    >
                      Explore
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </SignedIn>

            {/* Signed Out State */}
            <SignedOut>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
                  Get Started
                </h1>
                <p className="text-green-100/70 mb-6 text-sm tracking-wide">
                  Create an account or sign in to access your dashboard.
                </p>
                <div className="flex flex-col space-y-4">
                  <Link href="/sign-up" className="w-full">
                    <Button 
                      variant="default" 
                      className="w-full bg-green-600/90 hover:bg-green-700 transition-colors duration-300 text-black font-medium"
                    >
                      Create Account
                    </Button>
                  </Link>
                  <SignInButton mode="redirect" redirectUrl="/intrests">
                    <Button 
                      variant="outline" 
                      className="w-full border-green-500/30 text-green-400 hover:bg-green-950/60 hover:border-green-500/50 transition-colors duration-300"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                </div>
              </motion.div>
            </SignedOut>
          </CardContent>
        </Card>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none"></div>
      
      {/* Animated Particles - Optional Matrix-like effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0.2,
              y: -20,
              x: Math.random() * window.innerWidth,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: window.innerHeight + 100,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-green-500/30 to-transparent"
          />
        ))}
      </div>
    </div>
  );
}