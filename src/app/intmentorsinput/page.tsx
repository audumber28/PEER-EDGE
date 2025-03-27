"use client";

import React, { useState } from "react";

// Define types for form data and country/course options
interface StudentApplication {
  country: string;
  course: string;
  name: string;
  email: string;
  phoneNumber: string;
}

const countriesData = [
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
  const [application, setApplication] = useState<StudentApplication>({
    country: "",
    course: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [availableCourses, setAvailableCourses] = useState<string[]>([]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCountry = e.target.value;
    const countryData = countriesData.find((c) => c.name === selectedCountry);

    setApplication((prev) => ({
      ...prev,
      country: selectedCountry,
      course: "", // Reset course when country changes
    }));

    setAvailableCourses(countryData ? countryData.courses : []);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setApplication((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submission logic
    console.log("Application Submitted:", application);
    alert("Application Received! We will contact you soon.");
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
                  <div
                    key={country.name}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="radio"
                      name="country"
                      value={country.name}
                      checked={application.country === country.name}
                      onChange={handleCountryChange}
                      className="text-emerald-500 focus:ring-emerald-500"
                      required
                    />
                    <label className="text-emerald-300 flex items-center gap-2">
                      {country.name}
                      <img
                        src={`/flags/${country.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}.svg`}
                        alt={`${country.name} flag`}
                        className="w-7 h-5 object-contain"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {application.country && (
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
                        checked={application.course === course}
                        onChange={handleInputChange}
                        className="text-emerald-500 focus:ring-emerald-500"
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
                value={application.name}
                onChange={handleInputChange}
                className="w-full bg-gray-800 text-emerald-300 border-emerald-700 border rounded p-2"
                required
              />
            </div>

            {/* <div className="space-y-2">
              <label className="block text-emerald-300">Email Address</label>
              <input
                type="email"
                name="email"
                value={application.email}
                onChange={handleInputChange}
                className="w-full bg-gray-800 text-emerald-300 border-emerald-700 border rounded p-2"
                required
              />
            </div> */}

            <div className="space-y-2">
              <label className="block text-emerald-300">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={application.phoneNumber}
                onChange={handleInputChange}
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
