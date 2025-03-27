"use client";

import { useEffect, useState } from "react";

const mentorData = [
  { name: "John Doe", expertise: "Web Development" },
  { name: "Alice Smith", expertise: "Machine Learning" },
  { name: "Bob Johnson", expertise: "Cybersecurity" },
  { name: "Charlie Brown", expertise: "Blockchain" },
  { name: "Emma Wilson", expertise: "Cloud Computing" },
];

export default function MentorsPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [mentors, setMentors] = useState<{ name: string; expertise: string }[]>([]);

  useEffect(() => {
    const storedInterests = JSON.parse(localStorage.getItem("userInterests") || "[]");
    setSelectedInterests(storedInterests);

    // Filter mentors based on selected interests
    setMentors(mentorData.filter((mentor) => storedInterests.includes(mentor.expertise)));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-2xl font-semibold">Mentors for You</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.length > 0 ? (
          mentors.map((mentor) => (
            <div key={mentor.name} className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold">{mentor.name}</h2>
              <p className="text-gray-400">{mentor.expertise}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 mt-4">No mentors found for your interests.</p>
        )}
      </div>
    </div>
  );
}
