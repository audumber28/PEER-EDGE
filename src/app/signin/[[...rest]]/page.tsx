"use client";

import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function SignInPage() {
  const router = useRouter();
  const { isSignedIn, userId } = useAuth(); // Check authentication status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isSignedIn) {
      router.push("/interest-selection"); // Redirect to dashboard if signed in
    }
  }, [isSignedIn, router]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-700/10 rounded-full blur-3xl"></div>
      </div>

      {/* Conditional Rendering: Show Page if Signed In */}
      {isSignedIn ? (
        <div className="flex flex-col items-center justify-center w-full">
          <Card className="bg-black/60 border border-green-900/50 shadow-xl shadow-green-900/20 backdrop-blur-sm p-6 text-center">
            <CardHeader>
              <CardTitle className="text-green-400 text-2xl font-bold">
                Welcome Back!
              </CardTitle>
              <CardDescription className="text-gray-400">
                You are already signed in.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => router.push("/interest-selection")}
                className="bg-green-600 hover:bg-green-500 w-full"
              >
                Go to Mentors
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <Card className="bg-black/60 border border-green-900/50 shadow-xl shadow-green-900/20 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-center text-green-400 font-bold">
                  Sign In
                </CardTitle>
                <CardDescription className="text-center text-gray-400">
                  Access your mentoring platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  {loading ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2,
                        ease: "linear",
                      }}
                      className="w-10 h-10 border-4 border-gray-800 border-t-green-500 rounded-full"
                    ></motion.div>
                  ) : (
                    <SignIn />
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 pt-2 pb-6">
                <Button
                  variant="ghost"
                  className="text-green-500 hover:text-green-400 hover:bg-green-950/30 border border-green-900/40 w-full"
                >
                  Need help?
                </Button>
                <div className="text-center text-xs text-gray-500">
                  By signing in, you agree to our{" "}
                  <a href="#" className="text-green-500 hover:text-green-400">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-green-500 hover:text-green-400">
                    Privacy Policy
                  </a>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
}
