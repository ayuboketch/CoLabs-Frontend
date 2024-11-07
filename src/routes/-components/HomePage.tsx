import { LandingPageNavbar } from "@/components/navigation/LandingPageNavbar";

export function HomePage() {
  return (
    <div className="justify-center flex h-full min-h-screen w-full flex-col items-center">
      <LandingPageNavbar />
      {/* landing page goes here  */}
      <p className="text-3xl  border border-primary rounded-2xl p-5">Landing page goes here </p>
    </div>
  );
}
