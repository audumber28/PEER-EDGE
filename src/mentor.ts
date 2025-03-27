// src/types/mentor.ts
export interface Mentor {
    id: number;
    name: string;
    expertise: string;
    skills: string[];
    profilePic: string;
    background: string;
    rating: number;
    reviewCount: number;
    availability: string;
    title?: string;
    location?: string;
    email?: string;
    hourlyRate?: string;
    socials?: {
      linkedin?: string;
      github?: string;
      twitter?: string;
      website?: string;
    };
    education?: {
      degree: string;
      institution: string;
      year: string;
    }[];
    experience?: {
      position: string;
      company: string;
      duration: string;
      description: string;
    }[];
  }
  
  export interface Review {
    id: number;
    mentorId: number;
    name: string;
    rating: number;
    date: string;
    comment: string;
    avatar?: string;
  }