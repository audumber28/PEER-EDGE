"use client";

import { useUser } from "@clerk/nextjs";

export default function StudentDashboard() {
  const { user } = useUser();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {user?.fullName}!</h1>
    </div>
  );
}
