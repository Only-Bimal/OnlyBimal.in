import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@shared/schema";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export default function Education() {
  return (
    <div className="min-h-screen">
      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-page-title">
            Education & Qualifications
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Academic achievements and professional certifications that form the foundation of my expertise.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold">Professional Certifications</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {resumeData.professionalQualifications.map((qual, index) => (
                <div key={index} className="relative" data-testid={`item-professional-${index}`}>
                  <div className="flex gap-8">
                    <div className="flex-shrink-0 w-16 text-right hidden md:block">
                      <Badge variant="outline" className="font-mono" data-testid={`badge-year-prof-${index}`}>
                        {qual.year}
                      </Badge>
                    </div>

                    <Card className="flex-1 p-6 hover-elevate">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 md:hidden">
                          <span className="text-sm font-semibold text-primary">{qual.year}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2" data-testid={`text-degree-prof-${index}`}>
                            {qual.degree}
                          </h3>
                          <p className="text-base text-muted-foreground" data-testid={`text-institution-prof-${index}`}>
                            {qual.institution}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold">Academic Qualifications</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {resumeData.academicQualifications.map((qual, index) => (
                <div key={index} className="relative" data-testid={`item-academic-${index}`}>
                  <div className="flex gap-8">
                    <div className="flex-shrink-0 w-16 text-right hidden md:block">
                      <Badge variant="outline" className="font-mono" data-testid={`badge-year-acad-${index}`}>
                        {qual.year}
                      </Badge>
                    </div>

                    <Card className="flex-1 p-6 hover-elevate">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 md:hidden">
                          <span className="text-sm font-semibold text-primary">{qual.year}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2" data-testid={`text-degree-acad-${index}`}>
                            {qual.degree}
                          </h3>
                          <p className="text-base text-muted-foreground" data-testid={`text-institution-acad-${index}`}>
                            {qual.institution}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold">Career Timeline</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {resumeData.workHistory.map((work, index) => (
                <div key={index} className="relative" data-testid={`item-work-${index}`}>
                  <div className="flex gap-8">
                    <div className="flex-shrink-0 w-16 text-right hidden md:block">
                      <div className="w-4 h-4 rounded-full bg-primary absolute left-[1.875rem] mt-2" />
                    </div>

                    <Card className="flex-1 p-6 hover-elevate">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-2 md:hidden" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1" data-testid={`text-role-${index}`}>
                            {work.role}
                          </h3>
                          <p className="text-base font-medium text-primary mb-2" data-testid={`text-company-${index}`}>
                            {work.company}
                          </p>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span data-testid={`text-location-${index}`}>{work.location}</span>
                            <span>•</span>
                            <span data-testid={`text-period-${index}`}>{work.period}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
