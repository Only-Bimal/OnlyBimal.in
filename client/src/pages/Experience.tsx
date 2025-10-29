import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@shared/schema";
import { Users, Calendar, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <div className="min-h-screen">
      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-page-title">
            Professional Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A comprehensive overview of {resumeData.projects.length} projects spanning enterprise applications, 
            e-commerce platforms, and specialized software solutions for leading clients.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {resumeData.projects.map((project) => (
              <Card key={project.id} className="p-6 lg:p-8 hover-elevate" data-testid={`card-project-${project.id}`}>
                <div className="flex flex-wrap items-start gap-3 mb-6">
                  <Badge variant="default" data-testid={`badge-project-number-${project.id}`}>
                    Project {project.id}
                  </Badge>
                  <Badge variant="outline" className="gap-1" data-testid={`badge-project-period-${project.id}`}>
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </Badge>
                  <Badge variant="outline" className="gap-1" data-testid={`badge-project-team-${project.id}`}>
                    <Users className="w-3 h-3" />
                    Team of {project.teamSize}
                  </Badge>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold mb-4" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">Client</span>
                    </div>
                    <p className="text-base" data-testid={`text-project-client-${project.id}`}>
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 font-medium">
                      Company
                    </div>
                    <p className="text-base" data-testid={`text-project-concern-${project.id}`}>
                      {project.concern}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.environment.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="font-mono text-xs" data-testid={`badge-tech-${project.id}-${idx}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                    Description
                  </h3>
                  <p className="text-base leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2 ml-4">
                    {project.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-base leading-relaxed flex gap-3" data-testid={`text-responsibility-${project.id}-${idx}`}>
                        <span className="text-primary mt-1.5">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
