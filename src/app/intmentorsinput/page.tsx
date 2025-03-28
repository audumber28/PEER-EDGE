"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  course: string;
}

interface Country {
  name: string;
  courses: string[];
}

const countriesData: Country[] = [
  {
    name: "United States",
    courses: [
      "Computer Science",
      "Business Administration",
      "Engineering",
      "Data Science",
    ],
  },
  {
    name: "Canada",
    courses: [
      "Software Engineering",
      "Biotechnology",
      "Digital Media",
      "Environmental Science",
    ],
  },
  {
    name: "United Kingdom",
    courses: [
      "International Business",
      "Artificial Intelligence",
      "Mechanical Engineering",
      "Psychology",
    ],
  },
  {
    name: "Australia",
    courses: [
      "Marine Biology",
      "Cybersecurity",
      "Renewable Energy",
      "Sports Management",
    ],
  },
  {
    name: "Germany",
    courses: [
      "Automotive Engineering",
      "Robotics",
      "Chemistry",
      "Industrial Design",
    ],
  },
];

export default function InternationalAdmissions() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    course: "",
  });

  const [availableCourses, setAvailableCourses] = useState<string[]>([]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCountry = e.target.value;
    const countryData = countriesData.find((c) => c.name === selectedCountry);

    setFormData((prev) => ({
      ...prev,
      country: selectedCountry,
      course: "", // Reset course when country changes
    }));

    setAvailableCourses(countryData ? countryData.courses : []);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      country: formData.country,
      course: formData.course,
    }).toString();
    router.push(`/intmentor?${queryParams}`);
  };

  return (
    <>
      <section className="flex flex-col max-w-7xl mx-auto py-10">
        <h1 className="text-6xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Lets Begin With Your{" "}
          <span className="text-emerald-500">International</span> Journey!
        </h1>
        <p className="text-yellow-50 text-center">
          enter your details and connect with your mentor!
        </p>
      </section>
      <div className="flex justify-center">
        <img
          src="/flying.svg"
          alt="Flying illustration"
          className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
        />
      </div>
      <div className="min-h-screen bg-gray-900 text-emerald-500 w-full flex justify-center py-10">
        <div className="container max-w-2xl px-8 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-emerald-300 text-2xl font-medium">
                Select Country of Study
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {countriesData.map((country) => (
                  <div key={country.name} className="flex items-center">
                    <input
                      type="radio"
                      name="country"
                      value={country.name}
                      checked={formData.country === country.name}
                      onChange={handleCountryChange}
                      className="text-emerald-500 focus:ring-emerald-500"
                      required
                    />
                    <label className="text-emerald-300 flex items-center gap-2 ml-1">
                      {country.name}
                      <img
                        src={`/flags/${country.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}.svg`}
                        alt={`${country.name} flag`}
                        className="w-6 h-4 object-contain"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {formData.country && (
              <div className="space-y-4">
                <label className="block text-emerald-300 text-lg font-medium">
                  Select Course
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableCourses.map((course) => (
                    <div key={course} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="course"
                        value={course}
                        checked={formData.course === course}
                        onChange={handleChange}
                        className="text-emerald-500 focus:ring-emerald-500 w-fit"
                        required
                      />
                      <label className="text-emerald-300">{course}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-emerald-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 text-emerald-300 border-emerald-700 border rounded p-2"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-emerald-300">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-800 text-emerald-300 border-emerald-700 border rounded p-2"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-emerald-600 text-black py-3 rounded hover:bg-emerald-500 transition duration-300 mt-8"
              >
                Find Mentors
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
