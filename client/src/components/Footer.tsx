import { Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import { resumeData } from "@shared/schema";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {resumeData.summary.headline}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" data-testid="link-footer-home">
                <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer hover-elevate px-2 py-1 rounded-md inline-block">
                  Home
                </span>
              </Link>
              <Link href="/experience" data-testid="link-footer-experience">
                <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer hover-elevate px-2 py-1 rounded-md inline-block">
                  Experience
                </span>
              </Link>
              <Link href="/skills" data-testid="link-footer-skills">
                <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer hover-elevate px-2 py-1 rounded-md inline-block">
                  Skills
                </span>
              </Link>
              <Link href="/education" data-testid="link-footer-education">
                <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer hover-elevate px-2 py-1 rounded-md inline-block">
                  Education
                </span>
              </Link>
              <Link href="/contact" data-testid="link-footer-contact">
                <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer hover-elevate px-2 py-1 rounded-md inline-block">
                  Contact
                </span>
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4" />
                {resumeData.personal.email}
              </a>
              <a
                href={`tel:${resumeData.personal.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md"
                data-testid="link-footer-phone"
              >
                <Phone className="w-4 h-4" />
                {resumeData.personal.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
