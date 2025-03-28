import { SignInButton } from "@clerk/nextjs";
import HomePageComponent from "@/app/Home/page";

export default function HomePage() {
  return (
    <>
      {/* <InternationalAdmissions></InternationalAdmissions> */}
      <HomePageComponent />
      <SignInButton mode="redirect" forceRedirectUrl="/Home">
        <button className="btn btn-primary">Sign In</button>
      </SignInButton>
    </>
  );
}
