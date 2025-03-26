"use client";

import { useUser } from "@clerk/nextjs";

export default function Profile() {
  const { user } = useUser();
  const role: string = (user?.publicMetadata?.role as string) || "Unknown";

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Welcome, {user?.fullName}</h1>
      <p className="text-gray-600">Your role: {role}</p>
    </div>
  );
}