import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/education", label: "Education" },
  { path: "/contact", label: "Contact" }
];

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" data-testid="link-home">
              <span className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer">
                Bimal Srivastava
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} data-testid={`link-${item.label.toLowerCase()}`}>
                  <span
                    className={`text-base font-medium px-4 py-2 rounded-md cursor-pointer hover-elevate active-elevate-2 ${
                      location === item.path
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                    {location === item.path && (
                      <div className="h-0.5 bg-primary mt-1 rounded-full" />
                    )}
                  </span>
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" data-testid="nav-mobile-overlay">
          <div className="fixed inset-0 bg-background/95 backdrop-blur">
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} data-testid={`link-mobile-${item.label.toLowerCase()}`}>
                  <span
                    className={`text-2xl font-medium cursor-pointer hover-elevate active-elevate-2 px-6 py-3 rounded-md ${
                      location === item.path
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
