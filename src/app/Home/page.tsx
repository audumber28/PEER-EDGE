import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  GraduationCap,
  Globe,
  BookOpen,
  ArrowRight,
  Star,
  CheckCircle,
  Menu,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-emerald-500/7 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4 px-16">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-9 w-9" />
            <span className="text-2xl font-bold">
              Peer
              <span className="text-2xl font-bold text-emerald-500">Edge</span>
            </span>
          </div>

          {/* Mobile menu button */}
          <button className="block md:hidden">
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/mentors"
              className="text-sm font-medium flex items-center gap-1 hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Mentors
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium flex items-center gap-1 hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Profile
            </Link>
            <Link
              href="/international"
              className="text-sm font-medium flex items-center gap-1 hover:text-primary"
            >
              <Globe className="h-4 w-4" />
              International Admissions
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium flex items-center gap-1 hover:text-primary"
            >
              <BookOpen className="h-4 w-4" />
              Course Insights
            </Link>
            <a href="/signin">
              <Button
                className={
                  "bg-emerald-500 text-primary-foreground hover:bg-emerald-600 cursor-pointer"
                }
              >
                Sign Up
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-[url('/Sprinkle.svg')] bg-cover bg-center bg-no-repeat opacity-50"></div>

          {/* Content */}
          <div className="w-7xl mx-auto relative container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect with peers who've walked your path
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Get personalized guidance from students and professionals
                    who've succeeded where you want to go. Authentic advice for
                    your college and career journey.
                  </p>
                </div>
              </div>
              <Image
                src="/Learning-bro.svg"
                width={450}
                height={450}
                alt="Students collaborating"
                className="mx-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[900px] object-contain"
                priority
                quality={100}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-emerald-500/25 to-transparent">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How Peer
                  <span className="text-3xl font-bold text-emerald-500 tracking-tighter sm:text-5xl mr-1.5">
                    Edge
                  </span>
                  Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects you with mentors who have real
                  experience at your target schools and industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground relative">
                  <div className="h-16 w-16 bg-emerald-500 rounded-full absolute"></div>
                  <Users className="h-8 w-8 z-10" />
                </div>
                <h3 className="text-xl font-bold">Find Your Match</h3>
                <p className="text-muted-foreground">
                  Browse mentors filtered by school, major, career path, or
                  background.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <div className="h-16 w-16 bg-emerald-500 rounded-full absolute"></div>
                  <BookOpen className="h-8 w-8 z-10" />
                </div>
                <h3 className="text-xl font-bold">Schedule Sessions</h3>
                <p className="text-muted-foreground">
                  Book <span className="">1:1</span> message exchanges at times
                  that work for you.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <div className="h-16 w-16 bg-emerald-500 rounded-full absolute"></div>
                  <GraduationCap className="h-8 w-8 z-10" />
                </div>
                <h3 className="text-xl font-bold">Get Personalized Advice</h3>
                <p className="text-muted-foreground">
                  Receive tailored guidance on applications, courses, and career
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Platform Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need for your educational and career journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:bg-emerald-500/10 transition duration-300 ease-in-out transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Users className="h-10 w-10 text-emerald-500 mb-2" />
                  <h3 className="text-xl font-bold">Verified Mentors</h3>
                  <p className="text-sm text-muted-foreground">
                    All mentors are verified students or alumni from the
                    institutions they represent.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-emerald-500/10 transition duration-300 ease-in-out transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Globe className="h-10 w-10 text-emerald-500 mb-2" />
                  <h3 className="text-xl font-bold">International Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized guidance for international students navigating
                    admissions.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-emerald-500/10 transition duration-300 ease-in-out transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <BookOpen className="h-10 w-10 text-emerald-500 mb-2" />
                  <h3 className="text-xl font-bold">Course Reviews</h3>
                  <p className="text-sm text-muted-foreground">
                    Honest insights about courses and professors from students
                    who've taken them.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-emerald-500/10 transition duration-300 ease-in-out transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <CheckCircle className="h-10 w-10 text-emerald-500 mb-2" />
                  <h3 className="text-xl font-bold">Application Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Get feedback on your applications from successful
                    applicants.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-emerald-500/10 transition duration-300 ease-in-out transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Star className="h-10 w-10 text-emerald-500 mb-2" />
                  <h3 className="text-xl font-bold">Career Pathways</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore different career paths with guidance from
                    professionals.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-emerald-500/10 transition duration-300 ease-in-out transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <GraduationCap className="h-10 w-10 text-emerald-500 mb-2" />
                  <h3 className="text-xl font-bold">Resource Library</h3>
                  <p className="text-sm text-muted-foreground">
                    Access guides, templates, and resources for your educational
                    journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-emerald-500/25 to-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Success Stories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from students who found their path through MentorMatch.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:bg-emerald-300/10 hover:text-emerald-500 transition-all duration-300 delay-200">
                <CardContent className="p-6 flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold border">
                      J
                    </div>
                    <div>
                      <p className="text-sm font-medium">Jamie L.</p>
                      <p className="text-xs text-muted-foreground">
                        Stanford University
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "My mentor helped me navigate the complex Stanford
                    application process. Their insights were invaluable and
                    definitely helped me get accepted."
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-emerald-300/10 hover:text-emerald-500 transition-all duration-300 delay-200">
                <CardContent className="p-6 flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold border">
                      M
                    </div>
                    <div>
                      <p className="text-sm font-medium">Miguel R.</p>
                      <p className="text-xs text-muted-foreground">
                        International Student, MIT
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "As an international student, I had so many questions. My
                    mentor walked me through every step of the process and
                    helped me prepare for interviews."
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-emerald-300/10 hover:text-emerald-500 transition-all duration-300 delay-200">
                <CardContent className="p-6 flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold border">
                      A
                    </div>
                    <div>
                      <p className="text-sm font-medium">Aisha K.</p>
                      <p className="text-xs text-muted-foreground">
                        Career Changer
                      </p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "I was looking to transition into tech from finance. My
                    mentor helped me identify transferable skills and guided me
                    through the interview process."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to find your mentor?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join thousands of students who've found guidance and success
                    through Peer<span className="text-emerald-500">Edge</span>.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Get Started Today <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div className="font-medium">
                      Access to 10,000+ verified mentors
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div className="font-medium">
                      Personalized matching algorithm
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div className="font-medium">
                      Flexible scheduling options
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div className="font-medium">Satisfaction guarantee</div>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                      "Peer<span className="text-emerald-500">Edge</span>{" "}
                      connected me with someone who understood exactly what I
                      was going through. It made all the difference in my
                      application journey."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted bg-gradient-to-r from-emerald-500/25 to-transparent">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Stay updated with Peer
                <span className="text-emerald-500">Edge</span>
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest news, updates, and resources delivered to your
                inbox.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:py-12 max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
            <div className="flex flex-col gap-3 md:w-1/3">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xl font-bold">
                  Peer
                  <span className="text-xl font-bold text-emerald-500">
                    Edge
                  </span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting students with peer mentors for authentic guidance on
                college and career paths.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Platform</h3>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    How it Works
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </nav>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Resources</h3>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Guides
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Support
                  </Link>
                </nav>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Company</h3>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} MentorMatch. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
