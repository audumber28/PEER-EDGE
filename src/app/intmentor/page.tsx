"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Mentor {
  name: string;
  country: string;
  course: string;
  experience: string;
}
const mentorsData: Mentor[] = [
  // **United States**
  { name: "Alice Johnson", country: "United States", course: "Computer Science", experience: "8 years" },
  { name: "Ethan Ross", country: "United States", course: "Computer Science", experience: "10 years" },
  { name: "Sophia Martinez", country: "United States", course: "Computer Science", experience: "7 years" },

  { name: "Matthew Clark", country: "United States", course: "Software Engineering", experience: "7 years" },
  { name: "Liam Anderson", country: "United States", course: "Software Engineering", experience: "6 years" },
  { name: "Olivia Brown", country: "United States", course: "Software Engineering", experience: "9 years" },

  { name: "Emma Brown", country: "United States", course: "Artificial Intelligence", experience: "6 years" },
  { name: "Benjamin King", country: "United States", course: "Artificial Intelligence", experience: "8 years" },
  { name: "Charlotte White", country: "United States", course: "Artificial Intelligence", experience: "7 years" },

  { name: "David White", country: "United States", course: "Cybersecurity", experience: "9 years" },
  { name: "James Carter", country: "United States", course: "Cybersecurity", experience: "10 years" },
  { name: "Ava Scott", country: "United States", course: "Cybersecurity", experience: "8 years" },

  { name: "Sophia Müller", country: "United States", course: "Robotics", experience: "10 years" },
  { name: "Lucas Green", country: "United States", course: "Robotics", experience: "7 years" },
  { name: "Harper Davis", country: "United States", course: "Robotics", experience: "9 years" },

  { name: "Liam Carter", country: "United States", course: "Automotive Engineering", experience: "8 years" },
  { name: "Noah Walker", country: "United States", course: "Automotive Engineering", experience: "7 years" },
  { name: "Ella Parker", country: "United States", course: "Automotive Engineering", experience: "9 years" },

  // **Canada**
  { name: "Oliver Scott", country: "Canada", course: "Computer Science", experience: "7 years" },
  { name: "Mason Evans", country: "Canada", course: "Computer Science", experience: "6 years" },
  { name: "Emma Richardson", country: "Canada", course: "Computer Science", experience: "8 years" },

  { name: "Emily Davis", country: "Canada", course: "Software Engineering", experience: "6 years" },
  { name: "Henry Wright", country: "Canada", course: "Software Engineering", experience: "9 years" },
  { name: "Mia Harris", country: "Canada", course: "Software Engineering", experience: "7 years" },

  { name: "Daniel Wilson", country: "Canada", course: "Artificial Intelligence", experience: "8 years" },
  { name: "Charlotte Lee", country: "Canada", course: "Artificial Intelligence", experience: "6 years" },
  { name: "Benjamin Adams", country: "Canada", course: "Artificial Intelligence", experience: "7 years" },

  { name: "Nathan Moore", country: "Canada", course: "Cybersecurity", experience: "7 years" },
  { name: "Lucas Hill", country: "Canada", course: "Cybersecurity", experience: "9 years" },
  { name: "Sophia Cooper", country: "Canada", course: "Cybersecurity", experience: "8 years" },

  { name: "Charlotte Evans", country: "Canada", course: "Robotics", experience: "9 years" },
  { name: "Jacob Turner", country: "Canada", course: "Robotics", experience: "7 years" },
  { name: "Isabella Nelson", country: "Canada", course: "Robotics", experience: "10 years" },

  { name: "James Walker", country: "Canada", course: "Automotive Engineering", experience: "10 years" },
  { name: "Ella Baker", country: "Canada", course: "Automotive Engineering", experience: "7 years" },
  { name: "Michael Foster", country: "Canada", course: "Automotive Engineering", experience: "8 years" },

  // **United Kingdom**
  { name: "Isabella Cooper", country: "United Kingdom", course: "Computer Science", experience: "9 years" },
  { name: "Jack Robinson", country: "United Kingdom", course: "Computer Science", experience: "7 years" },
  { name: "Chloe Brooks", country: "United Kingdom", course: "Computer Science", experience: "8 years" },

  { name: "James Anderson", country: "United Kingdom", course: "Software Engineering", experience: "8 years" },
  { name: "Sophia Kelly", country: "United Kingdom", course: "Software Engineering", experience: "7 years" },
  { name: "Ethan Morgan", country: "United Kingdom", course: "Software Engineering", experience: "6 years" },

  { name: "Jack Thompson", country: "United Kingdom", course: "Artificial Intelligence", experience: "7 years" },
  { name: "Emily Sanders", country: "United Kingdom", course: "Artificial Intelligence", experience: "9 years" },
  { name: "Oscar Mitchell", country: "United Kingdom", course: "Artificial Intelligence", experience: "8 years" },

  { name: "Olivia Taylor", country: "United Kingdom", course: "Cybersecurity", experience: "6 years" },
  { name: "Noah Bennett", country: "United Kingdom", course: "Cybersecurity", experience: "9 years" },
  { name: "Ava Bell", country: "United Kingdom", course: "Cybersecurity", experience: "8 years" },

  { name: "Liam Edwards", country: "United Kingdom", course: "Robotics", experience: "10 years" },
  { name: "Charlotte Ward", country: "United Kingdom", course: "Robotics", experience: "7 years" },
  { name: "William James", country: "United Kingdom", course: "Robotics", experience: "9 years" },

  { name: "Ethan Barnes", country: "United Kingdom", course: "Automotive Engineering", experience: "9 years" },
  { name: "Jacob Murphy", country: "United Kingdom", course: "Automotive Engineering", experience: "8 years" },
  { name: "Sophia Griffin", country: "United Kingdom", course: "Automotive Engineering", experience: "7 years" },
  
  { name: "Oliver White", country: "Australia", course: "Computer Science", experience: "9 years" },
  { name: "Emily Taylor", country: "Australia", course: "Computer Science", experience: "7 years" },
  { name: "Liam Anderson", country: "Australia", course: "Computer Science", experience: "8 years" },

  { name: "Zoe Mitchell", country: "Australia", course: "Software Engineering", experience: "6 years" },
  { name: "Lucas Bennett", country: "Australia", course: "Software Engineering", experience: "8 years" },
  { name: "Ava Robinson", country: "Australia", course: "Software Engineering", experience: "7 years" },

  { name: "Noah Harris", country: "Australia", course: "Artificial Intelligence", experience: "6 years" },
  { name: "Chloe Evans", country: "Australia", course: "Artificial Intelligence", experience: "7 years" },
  { name: "Mason Wright", country: "Australia", course: "Artificial Intelligence", experience: "9 years" },

  { name: "Sophia Clarke", country: "Australia", course: "Cybersecurity", experience: "8 years" },
  { name: "Ethan Lewis", country: "Australia", course: "Cybersecurity", experience: "9 years" },
  { name: "Isabella Adams", country: "Australia", course: "Cybersecurity", experience: "7 years" },

  { name: "Jacob Scott", country: "Australia", course: "Robotics", experience: "9 years" },
  { name: "Charlotte Foster", country: "Australia", course: "Robotics", experience: "6 years" },
  { name: "Daniel Turner", country: "Australia", course: "Robotics", experience: "8 years" },

  { name: "Emma Nelson", country: "Australia", course: "Automotive Engineering", experience: "10 years" },
  { name: "Benjamin Carter", country: "Australia", course: "Automotive Engineering", experience: "7 years" },
  { name: "Mia Walker", country: "Australia", course: "Automotive Engineering", experience: "8 years" },

  // **Germany**
  { name: "Niklas Hoffmann", country: "Germany", course: "Computer Science", experience: "9 years" },
  { name: "Mia Lehmann", country: "Germany", course: "Computer Science", experience: "7 years" },
  { name: "Lukas Keller", country: "Germany", course: "Computer Science", experience: "8 years" },

  { name: "Johannes Schmidt", country: "Germany", course: "Software Engineering", experience: "6 years" },
  { name: "Sophia Wagner", country: "Germany", course: "Software Engineering", experience: "8 years" },
  { name: "Felix Becker", country: "Germany", course: "Software Engineering", experience: "7 years" },

  { name: "Lea Fischer", country: "Germany", course: "Artificial Intelligence", experience: "7 years" },
  { name: "Jonas Weber", country: "Germany", course: "Artificial Intelligence", experience: "9 years" },
  { name: "Hannah Krause", country: "Germany", course: "Artificial Intelligence", experience: "6 years" },

  { name: "Sebastian Meyer", country: "Germany", course: "Cybersecurity", experience: "8 years" },
  { name: "Laura Schneider", country: "Germany", course: "Cybersecurity", experience: "9 years" },
  { name: "Maximilian Braun", country: "Germany", course: "Cybersecurity", experience: "7 years" },

  { name: "Elena Koch", country: "Germany", course: "Robotics", experience: "6 years" },
  { name: "Paul Neumann", country: "Germany", course: "Robotics", experience: "9 years" },
  { name: "Tim Bauer", country: "Germany", course: "Robotics", experience: "8 years" },

  { name: "Anna Wolf", country: "Germany", course: "Automotive Engineering", experience: "10 years" },
  { name: "Julian Schulz", country: "Germany", course: "Automotive Engineering", experience: "7 years" },
  { name: "Nina Frank", country: "Germany", course: "Automotive Engineering", experience: "8 years" },
];



const Page = () => {
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const course = searchParams.get("course");

  const filteredMentors = mentorsData.filter(
    (mentor) =>
      (!country || mentor.country === country) &&
      (!course || mentor.course === course)
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text drop-shadow-md">
        Find Your Mentor
      </h1>
  
      <ScrollArea className="h-[700px] w-full rounded-xl border border-green-800 bg-black shadow-xl backdrop-blur-lg p-6">
        {filteredMentors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map((mentor, index) => (
              <Card
                key={index}
                className="border border-green-700 bg-gradient-to-br from-black to-green-950/20 backdrop-blur-lg p-6 transition-all transform hover:scale-[1.05] hover:shadow-lg hover:border-green-500"
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl font-semibold">
                    {mentor.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        variant="outline" 
                        className="bg-green-500/10 text-green-400 border-green-500/20 px-3 py-1"
                      >
                        {mentor.country}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className="bg-green-500/10 text-green-400 border-green-500/20 px-3 py-1"
                      >
                        {mentor.experience}
                      </Badge>
                    </div>
                    <p className="text-lg text-gray-300 font-medium">
                      Specializes in{" "}
                      <span className="text-green-400 font-semibold">
                        {mentor.course}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-green-400 text-center text-lg mt-10">
            No mentors found for the selected criteria.
          </p>
        )}
      </ScrollArea>
    </div>
  );
  
  
};

export default Page;
