
import React from "react";
import AgeCalculator from "@/components/AgeCalculator";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 flex flex-col">
      <header className="py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">CompanyAge</div>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-10 md:py-16">
        <AgeCalculator />
      </main>

      <footer className="py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} CompanyAge Calculator. All company information is for entertainment purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
