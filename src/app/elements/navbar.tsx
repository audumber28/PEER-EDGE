import { UserButton, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function NavBar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="p-4 flex justify-between bg-gray-800 text-white">
      <h1 className="text-xl">My App</h1>
      {isSignedIn ? (
        <SignOutButton>
          <button className="bg-red-500 px-4 py-2 rounded">Sign Out</button>
        </SignOutButton>
      ) : (
        <SignInButton>
          <button className="bg-blue-500 px-4 py-2 rounded">Sign In</button>
        </SignInButton>
      )}
      <UserButton />
    </nav>
  );
}
