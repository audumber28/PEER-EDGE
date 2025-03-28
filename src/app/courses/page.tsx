"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, UserCheck, Filter, BookOpen, TrendingUp, Search } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const allCourseCategories = [
    "Computer Science",
    "Engineering",
    "Data Science",
    "Artificial Intelligence",
    "Cybersecurity",
    "Robotics",
    "Cloud Computing",
    "Software Engineering",
    "Biotechnology",
    "Digital Design"
];

const collegeData = [
    {
        id: 1,
        name: "Azaad College of Education",
        category: "Computer Science",
        logo: "imp1.jpg",
        rating: 4.9,
        reviewCount: 245,
        curriculum: {
            strength: "Cutting-edge technology curriculum with hands-on project-based learning",
            highlights: [
                "Comprehensive AI and machine learning tracks",
                "Industry-aligned software engineering program",
                "Advanced research opportunities in emerging technologies"
            ]
        },
        faculty: {
            quality: "World-renowned experts with extensive industry and research experience",
            highlights: [
                "85% faculty with Ph.D. from top global universities",
                "Active researchers publishing in premier conferences",
                "Strong industry connections and guest lectures"
            ]
        },
        internships: {
            quality: "Extensive industry partnerships ensuring high-quality internship opportunities",
            highlights: [
                "Partnerships with Google, Microsoft, and top tech startups",
                "Guaranteed internship program for 90% of students",
                "Dedicated career development support"
            ]
        },
        placements: {
            record: "Exceptional placement history with top-tier tech companies",
            highlights: [
                "Average starting salary of $120,000",
                "92% placement rate within 3 months of graduation",
                "Alumni working at FAANG and innovative startups"
            ]
        }
    },
    {
        id: 2,
        name: "Abhinav Institute of Management & Technology",
        category: "Management & Technology",
        logo: "imp2.jpg",
        rating: 4.5,
        reviewCount: 180,
        curriculum: {
            strength: "Industry-driven management and technology courses with real-world applications",
            highlights: [
                "Specialized programs in business analytics and AI",
                "Hands-on learning with case studies and live projects",
                "Industry-aligned curriculum with practical exposure"
            ]
        },
        faculty: {
            quality: "Experienced educators with corporate and academic expertise",
            highlights: [
                "Faculty with MBA and Ph.D. degrees from reputed institutions",
                "Strong focus on mentorship and career guidance",
                "Guest lectures from industry professionals"
            ]
        },
        internships: {
            quality: "Excellent internship opportunities with leading companies",
            highlights: [
                "Collaborations with top consulting firms and IT companies",
                "Structured internship programs for skill enhancement",
                "Support in securing paid internships"
            ]
        },
        placements: {
            record: "High placement success with competitive salary packages",
            highlights: [
                "85% placement rate within 6 months",
                "Alumni working in multinational corporations",
                "Career assistance and mock interview programs"
            ]
        }
    },
    {
        id: 3,
        name: "Abhyudaya Mahila Degree College",
        category: "Arts & Science",
        logo: "imp3.jpg",
        rating: 4.3,
        reviewCount: 150,
        curriculum: {
            strength: "Holistic academic approach with a strong focus on women's empowerment",
            highlights: [
                "Comprehensive undergraduate programs in arts, science, and commerce",
                "Student-centered learning methodologies",
                "Research and community development programs"
            ]
        },
        faculty: {
            quality: "Dedicated faculty with expertise in multiple disciplines",
            highlights: [
                "Highly qualified professors with teaching and research backgrounds",
                "Special mentorship programs for students",
                "Engaging seminars and workshops"
            ]
        },
        internships: {
            quality: "Strong partnerships with educational institutions and NGOs",
            highlights: [
                "Internship programs in social work, education, and finance",
                "Hands-on experience through skill-based projects",
                "Career guidance sessions"
            ]
        },
        placements: {
            record: "Decent placement opportunities in diverse fields",
            highlights: [
                "70% placement rate within 6 months",
                "Students placed in NGOs, schools, and corporate sectors",
                "Dedicated career counseling for students"
            ]
        }
    },
    {
        id: 4,
        name: "A.B.M. College",
        category: "Commerce & Management",
        logo: "imp4.jpg",
        rating: 4.2,
        reviewCount: 135,
        curriculum: {
            strength: "Comprehensive commerce and management programs with real-world applications",
            highlights: [
                "Industry-oriented curriculum with a focus on finance and business studies",
                "Hands-on case studies and market analysis projects",
                "Strong emphasis on entrepreneurship and leadership skills"
            ]
        },
        faculty: {
            quality: "Experienced faculty with expertise in commerce, business, and economics",
            highlights: [
                "Professors with corporate and academic backgrounds",
                "Interactive teaching methods and guest lectures",
                "One-on-one mentorship for career guidance"
            ]
        },
        internships: {
            quality: "Strong internship opportunities with financial institutions and corporate firms",
            highlights: [
                "Partnerships with banking, insurance, and business firms",
                "Internship support for final-year students",
                "Workshops on resume building and interview preparation"
            ]
        },
        placements: {
            record: "Consistent placement success with reputed companies",
            highlights: [
                "75% placement rate within 6 months",
                "Alumni working in leading banks and consulting firms",
                "On-campus recruitment drives with top companies"
            ]
        }
    },
    {
        id: 5,
        name: "A.B.R College of Education",
        category: "Education & Teacher Training",
        logo: "imp5.jpg",
        rating: 4.4,
        reviewCount: 120,
        curriculum: {
            strength: "Focused on teacher education and pedagogical training",
            highlights: [
                "Comprehensive B.Ed. and M.Ed. programs",
                "Practical training in modern teaching methodologies",
                "Emphasis on classroom management and student psychology"
            ]
        },
        faculty: {
            quality: "Well-qualified faculty with teaching and research expertise",
            highlights: [
                "Experienced educators specializing in pedagogy and education research",
                "Regular workshops on innovative teaching strategies",
                "Active faculty participation in national education conferences"
            ]
        },
        internships: {
            quality: "Excellent internship programs in reputed schools and colleges",
            highlights: [
                "Teaching internships in government and private schools",
                "Exposure to real classroom environments",
                "Hands-on experience in lesson planning and student engagement"
            ]
        },
        placements: {
            record: "Strong placement track record in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as teachers and administrators in top schools",
                "Collaboration with schools for direct recruitment"
            ]
        }
    },
    {
        id: 6,
        name: "A.C. Patil College of Engineering",
        category: "Engineering & Technology",
        logo: "imp1.jpg",
        rating: 4.6,
        reviewCount: 210,
        curriculum: {
            strength: "Strong focus on technical excellence and research",
            highlights: [
                "Well-structured B.Tech and M.Tech programs",
                "Practical lab sessions and project-based learning",
                "Collaboration with industry for skill-based training"
            ]
        },
        faculty: {
            quality: "Highly qualified and research-oriented faculty",
            highlights: [
                "Professors with patents and international publications",
                "Guest lectures from industry experts",
                "Active mentorship and career counseling"
            ]
        },
        internships: {
            quality: "Internships with leading IT and engineering firms",
            highlights: [
                "Hands-on industry exposure in final year",
                "Strong alumni network for placement support",
                "Technical workshops and hackathons"
            ]
        },
        placements: {
            record: "Consistently high placement rates",
            highlights: [
                "90% placement rate with top recruiters",
                "Students placed in top-tier IT and core engineering companies",
                "Salary packages up to ₹12 LPA"
            ]
        }
    },
    {
        id: 7,
        name: "A.D.M. College for Women",
        category: "Women's College - Arts & Science",
        logo: "imp2.jpg",
        rating: 4.3,
        reviewCount: 140,
        curriculum: {
            strength: "Empowering women through quality education",
            highlights: [
                "Undergraduate and postgraduate courses in arts and science",
                "Focus on research, innovation, and leadership",
                "Skill-based certificate programs"
            ]
        },
        faculty: {
            quality: "Dedicated faculty with a strong academic background",
            highlights: [
                "Specialized faculty in various disciplines",
                "Workshops and seminars for academic enrichment",
                "Mentorship programs for career development"
            ]
        },
        internships: {
            quality: "Internships in diverse fields including media, education, and finance",
            highlights: [
                "Collaborations with NGOs and research organizations",
                "Opportunities in content writing, teaching, and finance",
                "Career guidance and skill-building workshops"
            ]
        },
        placements: {
            record: "Good placement record with opportunities in multiple sectors",
            highlights: [
                "Placement rate of 75% within 6 months",
                "Recruiters from education, banking, and IT industries",
                "On-campus recruitment drives for final-year students"
            ]
        }
    },
    {
        id: 8,
        name: "A.E.S. National College",
        category: "Commerce & Science",
        logo: "imp3.jpg",
        rating: 4.2,
        reviewCount: 125,
        curriculum: {
            strength: "Strong foundation in commerce and applied sciences",
            highlights: [
                "B.Com, B.Sc, and M.Sc programs with specialized courses",
                "Focus on research-based learning",
                "Integration of technology in teaching"
            ]
        },
        faculty: {
            quality: "Experienced faculty with deep subject knowledge",
            highlights: [
                "Highly qualified teaching staff with Ph.D. degrees",
                "Faculty-led student research projects",
                "Guest lectures from business and science experts"
            ]
        },
        internships: {
            quality: "Internships with financial institutions and tech startups",
            highlights: [
                "Opportunities in banking, IT, and market research",
                "Industry-based project training",
                "Soft skills and career readiness workshops"
            ]
        },
        placements: {
            record: "Strong placement assistance and industry connections",
            highlights: [
                "70% placement rate in reputed companies",
                "Top recruiters include banking firms and multinational companies",
                "Active placement cell for career guidance"
            ]
        }
    },
    {
        id: 9,
        name: "A.G. Teachers College",
        category: "Education & Teacher Training",
        logo: "imp4.jpg",
        rating: 4.5,
        reviewCount: 160,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 10,
        name: "Goa College of Engineering",
        category: "Education & Engineer Training",
        logo: "imp1.jpg",
        rating: 4.5,
        reviewCount: 160,
        curriculum: {
            strength: "bachelor technical training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 11,
        name: "Don Bosco College",
        category: "Education & Engineering Training",
        logo: "imp2.jpg",
        rating: 4.4,
        reviewCount: 160,
        curriculum: {
            strength: "Bachelor Engineering training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 12,
        name: "A.G.K.M. College",
        category: "Affiliated College",
        logo: "imp5.jpg",
        rating: 4.1,
        reviewCount: 110,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 13,
        name: "A.L. College of Education",
        category: "Affiliated College",
        logo: "imp5.jpg",
        rating: 4.3,
        reviewCount: 130,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 14,
        name: "Ali College of Education",
        category: "Affiliated College",
        logo: "imp4.jpg",
        rating: 4.0,
        reviewCount: 100,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 15,
        name: "AL Momin College of Education",
        category: "Affiliated College",
        logo: "imp3",
        rating: 4.2,
        reviewCount: 115,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 16,
        name: "Alpha College of Education",
        category: "Affiliated College",
        logo: "imp2.jpg",
        rating: 4.1,
        reviewCount: 105,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 17,
        name: "Alpha College of Education, Kanigiri",
        category: "Affiliated College",
        logo: "imp1.jpg",
        rating: 4.0,
        reviewCount: 95,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 18,
        name: "Alpha Degree College",
        category: "Affiliated College",
        logo: "imp5.jpg",
        rating: 4.2,
        reviewCount: 120,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 19,
        name: "Aman Showkath B.Ed College",
        category: "Affiliated College",
        logo: "imp4.jpg",
        rating: 4.1,
        reviewCount: 110,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 20,
        name: "A.M.G. College of Education",
        category: "Affiliated College",
        logo: "imp3.jpg",
        rating: 4.3,
        reviewCount: 125,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 21,
        name: "National Institute Technology of Goa",
        category: "Affiliated College",
        logo: "imp2.jpg",
        rating: 4.3,
        reviewCount: 125,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 22,
        name: "National Institute Technology of Bombay",
        category: "Affiliated College",
        logo: "imp1.jpg",
        rating: 4.0,
        reviewCount: 106,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 23,
        name: "Indian Institute Technology of Bombay",
        category: "Affiliated College",
        logo: "imp5.jpg",
        rating: 4.8,
        reviewCount: 136,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 24,
        name: "Indian Institute Technology of Madras",
        category: "Affiliated College",
        logo: "imp4.jpg",
        rating: 4.3,
        reviewCount: 98,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    },
    {
        id: 25,
        name: "Indian Institute Technology of Goa",
        category: "Affiliated College",
        logo: "imp4.jpg",
        rating: 3.3,
        reviewCount: 77,
        curriculum: {
            strength: "Comprehensive teacher training programs",
            highlights: [
                "B.Ed. and M.Ed. courses with hands-on training",
                "Emphasis on modern teaching methods",
                "Research opportunities in education psychology"
            ]
        },
        faculty: {
            quality: "Highly experienced and research-driven faculty",
            highlights: [
                "Well-qualified professors with extensive teaching experience",
                "Workshops on pedagogy and classroom management",
                "Mentorship for aspiring educators"
            ]
        },
        internships: {
            quality: "Internship opportunities in top schools and colleges",
            highlights: [
                "Teaching practice in reputed schools",
                "Focus on innovative lesson planning",
                "Hands-on experience in curriculum development"
            ]
        },
        placements: {
            record: "High placement success in the education sector",
            highlights: [
                "80% placement rate within 6 months",
                "Alumni working as educators in top schools",
                "Strong industry partnerships for placements"
            ]
        }
    }
];

export default function CollegesPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [colleges, setColleges] = useState<typeof collegeData>([]);
    const [showAllColleges, setShowAllColleges] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);

    // New state for search
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const storedCategories = JSON.parse(localStorage.getItem("userCategories") || "[]");
        setSelectedCategories(storedCategories);

        // Apply filters and search
        let filteredColleges = collegeData;

        // Category filtering
        if (storedCategories.length > 0 && !showAllColleges) {
            filteredColleges = filteredColleges.filter((college) =>
                storedCategories.includes(college.category)
            );
        }

        // Search filtering
        if (searchTerm) {
            filteredColleges = filteredColleges.filter((college) =>
                college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                college.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setColleges(filteredColleges);
    }, [showAllColleges, searchTerm]);

    const toggleFilter = () => {
        setFilterVisible(!filterVisible);
    };

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev => {
            const newCategories = prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category];

            localStorage.setItem("userCategories", JSON.stringify(newCategories));
            return newCategories;
        });
    };

    const applyFilters = () => {
        if (selectedCategories.length > 0) {
            setColleges(collegeData.filter((college) => selectedCategories.includes(college.category)));
            setShowAllColleges(false);
        } else {
            setColleges(collegeData);
            setShowAllColleges(true);
        }
        setFilterVisible(false);
    };

    const resetFilters = () => {
        setSelectedCategories([]);
        localStorage.setItem("userCategories", JSON.stringify([]));
        setColleges(collegeData);
        setShowAllColleges(true);
        setSearchTerm("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
            <div className="container mx-auto py-12 px-4">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                        Discover Top Technology Colleges
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore cutting-edge institutions offering exceptional programs in technology and innovation.
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div className="flex w-full sm:w-auto space-x-2">
                        <div className="relative flex-grow">
                            <Input
                                type="text"
                                placeholder="Search colleges..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 bg-gray-800 border-green-500/30 text-white"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 h-4 w-4" />
                        </div>
                        <Button
                            variant="outline"
                            onClick={toggleFilter}
                            className="border-green-500/30 text-green-400 hover:bg-green-500/10 hover:text-green-300"
                        >
                            <Filter className="mr-2 h-4 w-4" />
                            Filter
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                        {selectedCategories.length > 0 && (
                            <>
                                <span className="text-sm text-gray-400">Active filters:</span>
                                {selectedCategories.map(interest => (
                                    <Badge
                                        key={interest}
                                        variant="secondary"
                                        className="bg-green-500/20 text-green-300 hover:bg-green-500/30"
                                    >
                                        {interest}
                                    </Badge>
                                ))}
                                <Button
                                    variant="link"
                                    onClick={resetFilters}
                                    className="text-green-400 hover:text-green-300 p-0 h-auto"
                                >
                                    Clear All
                                </Button>
                            </>
                        )}
                    </div>
                </div>

                {/* Filter panel */}
                {filterVisible && (
                    <Card className="mb-8 border-green-500/20 bg-gray-900 shadow-md">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Filter by Expertise</CardTitle>
                            <CardDescription className="text-gray-400">
                                Select the areas you're interested in learning about
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[200px] rounded-md pr-4">
                                <div className="flex flex-wrap gap-2">
                                    {allCourseCategories.map(expertise => (
                                        <Badge
                                            key={expertise}
                                            variant={selectedCategories.includes(expertise) ? "default" : "outline"}
                                            className={selectedCategories.includes(expertise)
                                                ? "bg-green-600 hover:bg-green-700 text-black cursor-pointer"
                                                : "border-green-500/30 text-gray-300 hover:border-green-500/50 hover:bg-green-900/20 cursor-pointer"}
                                            onClick={() => toggleCategory(expertise)}
                                        >
                                            {expertise}
                                        </Badge>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button
                                variant="outline"
                                onClick={resetFilters}
                                className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                            >
                                Reset
                            </Button>
                            <Button
                                onClick={applyFilters}
                                className="bg-green-600 hover:bg-green-700 text-black font-medium"
                            >
                                Apply Filters
                            </Button>
                        </CardFooter>
                    </Card>
                )}

                {/* Optional: Show message when no colleges match */}
                {colleges.length === 0 && (
                    <div className="text-center text-gray-400 py-8">
                        No colleges found. Try adjusting your search or filters.
                    </div>
                )}

                {/* Colleges Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {colleges.map((college) => (
                        <Card
                            key={college.id}
                            className="border-green-500/20 bg-gray-900 shadow-md hover:shadow-green-900/20 hover:border-green-500/30 transition-all duration-300"
                        >
                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center">
                                        <Avatar className="h-12 w-12 mr-4 border-2 border-green-500/20">
                                            <AvatarImage src={college.logo} alt={college.name} />
                                            <AvatarFallback className="bg-gray-800 text-green-400">
                                                {college.name.split(" ").map(word => word[0]).join("").toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="text-lg text-white">{college.name}</CardTitle>
                                            <Badge
                                                className="mt-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium"
                                            >
                                                {college.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm text-green-300">
                                        <span className="font-bold">{college.rating}</span>
                                        <div className="ml-1 flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`h-3 w-3 ${i < Math.floor(college.rating) ? "text-green-400" : "text-gray-600"}`}
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="ml-1 text-gray-400">({college.reviewCount})</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center text-sm text-gray-300">
                                        <BookOpen className="h-4 w-4 mr-2 text-green-500" />
                                        <strong>Curriculum:</strong> {college.curriculum.strength}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                                        <strong>Placements:</strong> {college.placements.record}
                                    </div>
                                </div>
                            </CardContent>
                            <Separator className="bg-gray-800" />
                            <CardFooter className="flex justify-end pt-4">
                                <Button
                                    size="sm"
                                    asChild
                                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium"
                                >
                                    <Link href={`/collegeprofile/${college.id - 1}`}>
                                        View Details
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}