import { Card } from "@/components/ui/card";
import { resumeData } from "@shared/schema";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-page-title">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Interested in discussing opportunities or collaborating on projects? 
            Feel free to reach out through any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover-elevate" data-testid="card-email">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a
                    href={`mailto:${resumeData.personal.email}`}
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    {resumeData.personal.email}
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Best for detailed inquiries
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-elevate" data-testid="card-phone">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <a
                    href={`tel:${resumeData.personal.phone}`}
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-phone"
                  >
                    {resumeData.personal.phone}
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available during business hours
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 mt-8" data-testid="card-info">
            <h2 className="text-2xl font-semibold mb-6">Professional Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  Current Focus
                </h3>
                <p className="text-base leading-relaxed">
                  Seeking opportunities in enterprise application development, 
                  legacy system migration, and full-stack .NET solutions.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  Expertise Areas
                </h3>
                <ul className="space-y-2">
                  <li className="text-base flex gap-2">
                    <span className="text-primary">•</span>
                    Enterprise Application Development
                  </li>
                  <li className="text-base flex gap-2">
                    <span className="text-primary">•</span>
                    .NET Framework & C# Development
                  </li>
                  <li className="text-base flex gap-2">
                    <span className="text-primary">•</span>
                    Database Design & Optimization
                  </li>
                  <li className="text-base flex gap-2">
                    <span className="text-primary">•</span>
                    Team Leadership & Mentoring
                  </li>
                  <li className="text-base flex gap-2">
                    <span className="text-primary">•</span>
                    RPA & Automation Solutions
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  Location
                </h3>
                <div className="flex items-center gap-2 text-base">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span data-testid="text-location">India</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
