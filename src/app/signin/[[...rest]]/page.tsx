"use client";

import { SignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function SignInPage() {
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
      
      {/* Main Content - Sign In Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <SignIn 
          appearance={{
            layout: {
              logoPlacement: "inside",
              socialButtonsVariant: "iconButton",
              socialButtonsPlacement: "bottom"
            },
            elements: {
              rootBox: "mx-auto",
              card: "bg-black/60 border border-green-500/20 shadow-xl backdrop-blur-xl",
              headerTitle: "text-green-400",
              headerSubtitle: "text-green-100/70",
              formButtonPrimary: 
                "bg-green-600 hover:bg-green-700 text-black font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black",
              formFieldLabel: "text-green-200",
              formFieldInput: 
                "bg-black/50 border-green-500/30 text-white placeholder:text-green-200/30 focus:border-green-400 focus:ring-1 focus:ring-green-400",
              dividerLine: "bg-green-500/20",
              dividerText: "text-green-200/50",
              footer: "text-green-200/70",
              footerActionText: "text-green-400 hover:text-green-300",
              socialButtonsProviderIcon: "text-green-200",
              socialButtonsButton: 
                "border-green-500/30 hover:bg-green-900/30 hover:border-green-500/50",
              alert: "bg-red-900/50 border border-red-500/50 text-white",
              identityPreview: "bg-black/70 border border-green-500/30",
              identityPreviewText: "text-green-100",
              identityPreviewEditButton: "text-green-400 hover:text-green-300"
            }
          }}
        />
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none"></div>
      
      {/* Animated Particles - Matrix-like effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
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