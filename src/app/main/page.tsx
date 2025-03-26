"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Mentor {
  name: string;
  skillset: string;
  expertise: string[];
  profilePic: string;
  background: string;
  href: string;
}

const mentors: Mentor[] = [
  {
    name: "John Doe",
    skillset: "Full Stack Development",
    expertise: ["React", "Node.js", "AWS"],
    profilePic: "/im1.jpg",
    background: "Seasoned software engineer with 10+ years of experience in building scalable web applications.",
    href: "#",
  },
  {
    name: "Jane Smith",
    skillset: "Data Science",
    expertise: ["Python", "Machine Learning", "AI"],
    profilePic: "/im2.jpg",
    background: "AI researcher with a PhD in Machine Learning, specializing in predictive analytics.",
    href: "#",
  },
  {
    name: "Michael Chen",
    skillset: "Mobile Development",
    expertise: ["React Native", "Flutter", "Swift"],
    profilePic: "/im3.jpg",
    background: "Mobile app specialist who has launched over 20 apps with millions of downloads across iOS and Android platforms.",
    href: "#",
  },
  {
    name: "Sarah Johnson",
    skillset: "UX/UI Design",
    expertise: ["Figma", "Adobe XD", "User Research"],
    profilePic: "/im4.jpg",
    background: "Award-winning designer with experience at top tech companies, focused on creating intuitive user experiences.",
    href: "#",
  },
  {
    name: "David Rodriguez",
    skillset: "DevOps & Cloud",
    expertise: ["Kubernetes", "Docker", "CI/CD"],
    profilePic: "/im5.jpg",
    background: "Cloud architect specializing in infrastructure automation and continuous deployment pipelines.",
    href: "#",
  },
  {
    name: "Priya Patel",
    skillset: "Cybersecurity",
    expertise: ["Penetration Testing", "Security Analysis", "Compliance"],
    profilePic: "/im6.jpg",
    background: "Cybersecurity expert with CISSP certification and experience protecting enterprise systems from advanced threats.",
    href: "#",
  }
];

export default function StudentDashboard() {
  const router = useRouter();
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  );
  
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-full px-4 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Meet Your Mentors
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with industry experts who will guide you through your learning journey
          </p>
        </div>
        
        <div className="relative w-full">
          <Carousel
            plugins={[plugin.current]}
            opts={{ 
              align: "start", 
              loop: true, 
              dragFree: true
            }}
            className="w-full"
          >
            <button 
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/70 backdrop-blur-sm hover:bg-black rounded-full p-3 shadow-lg border border-green-500/30"
              onClick={(e) => {
                e.stopPropagation();
                const prevButton = document.querySelector('.embla__prev');
                if (prevButton) {
                  prevButton.dispatchEvent(
                    new MouseEvent('click', { bubbles: true })
                  );
                }
              }}
            >
              <ChevronLeft className="h-6 w-6 text-green-500" />
            </button>

            <CarouselContent className="-ml-4 md:-ml-6">
              {mentors.map((mentor, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div 
                    onClick={() => router.push(`/mentorprofile/${index}`)} 
                    className="h-full transform transition-all duration-500 hover:scale-105 cursor-pointer"
                  >
                    <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-500/20 bg-gray-900 rounded-xl overflow-hidden">
                      {loading ? (
                        <div className="animate-pulse space-y-4 p-6">
                          <div className="mx-auto rounded-full bg-gray-800 h-36 w-36"></div>
                          <div className="h-4 bg-gray-800 rounded w-3/4 mx-auto"></div>
                          <div className="h-3 bg-gray-800 rounded w-1/2 mx-auto"></div>
                          <div className="h-24 bg-gray-800 rounded"></div>
                          <div className="h-10 bg-gray-800 rounded"></div>
                        </div>
                      ) : (
                        <>
                          <div className="h-24 bg-gradient-to-r from-green-500/80 to-emerald-600 relative">
                            <div className="absolute -bottom-16 inset-x-0 flex justify-center">
                              <img
                                src={mentor.profilePic}
                                alt={mentor.name}
                                className="w-32 h-32 object-cover rounded-full border-4 border-gray-900 shadow-xl"
                              />
                            </div>
                          </div>
                          <CardHeader className="pt-20 pb-2">
                            <CardTitle className="text-2xl font-bold text-center text-white">
                              {mentor.name}
                            </CardTitle>
                            <p className="text-green-400 font-medium text-center">{mentor.skillset}</p>
                          </CardHeader>
                          <CardContent className="pb-8 px-6">
                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                              {mentor.expertise.map((skill, idx) => (
                                <Badge key={idx} variant="outline" className="bg-black/40 text-green-400 border-green-500/30">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-gray-400 text-center mb-6 line-clamp-3">
                              {mentor.background}
                            </p>
                            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold hover:opacity-90 shadow-md hover:shadow-lg transition-all">
                              View Full Profile
                            </Button>
                          </CardContent>
                        </>
                      )}
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/70 backdrop-blur-sm hover:bg-black rounded-full p-3 shadow-lg border border-green-500/30"
              onClick={(e) => {
                e.stopPropagation();
                const nextButton = document.querySelector('.embla__next');
                if (nextButton) {
                  nextButton.dispatchEvent(
                    new MouseEvent('click', { bubbles: true })
                  );
                }
              }}
            >
              <ChevronRight className="h-6 w-6 text-green-500" />
            </button>
            
            <div className="hidden">
              <CarouselPrevious className="embla__prev" />
              <CarouselNext className="embla__next" />
            </div>
          </Carousel>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {mentors.map((_, index) => (
            <div 
              key={index}
              className="w-2.5 h-2.5 rounded-full bg-gray-700 hover:bg-green-500 cursor-pointer transition-colors"
            />
          ))}
        </div>
      </div>
    </div>
  );
}