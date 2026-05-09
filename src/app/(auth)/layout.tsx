export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col justify-center px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">DP</span>
            </div>
            <span className="text-2xl font-bold text-white">DealPilot AI</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Wholesale Smarter.<br />
            <span className="gradient-text">Close Faster.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-md">
            Use AI to generate seller outreach, automate follow-ups, and manage your wholesale deals effortlessly.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Right side - Auth form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">DP</span>
            </div>
            <span className="text-xl font-bold text-white">DealPilot AI</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}