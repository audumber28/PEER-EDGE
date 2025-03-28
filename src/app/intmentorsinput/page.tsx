"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InternationalAdmissions() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      country: formData.country,
      course: formData.course,
    }).toString();
    router.push(`/intmentor?${queryParams}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-emerald-500 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">International Admissions</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <div className="mb-4">
          <label className="block text-yellow-50">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-50">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-50">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-yellow-50">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          >
            <option value="">Select Country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-yellow-50">Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          >
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Data Science">Data Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Automotive Engineering">Automotive Engineering</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 p-2 rounded text-white">
          Find Mentors
        </button>
      </form>
    </div>
  );
}