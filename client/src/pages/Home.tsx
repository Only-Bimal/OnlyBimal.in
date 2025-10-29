import { Link } from "wouter";
import { ArrowRight, Briefcase, Code2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@shared/schema";

export default function Home() {
  const featuredProjects = resumeData.projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-4 border-primary/10">
              <span className="text-6xl font-bold text-primary">
                {resumeData.personal.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-name">
            {resumeData.personal.name}
          </h1>

          <p className="text-2xl lg:text-3xl font-light text-muted-foreground mb-8" data-testid="text-title">
            Senior Software Engineer
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-12" data-testid="text-headline">
            {resumeData.summary.headline}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/experience">
              <Button size="lg" className="gap-2" data-testid="button-view-projects">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" data-testid="button-contact">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-elevate">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-2" data-testid="text-years-experience">9+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </Card>

            <Card className="p-8 text-center hover-elevate">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-2" data-testid="text-projects-completed">13</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </Card>

            <Card className="p-8 text-center hover-elevate">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-2" data-testid="text-technologies-mastered">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Key Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specializing in enterprise solutions and Microsoft Technologies
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {resumeData.summary.highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-highlight-${index}`}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-base leading-relaxed">{highlight}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Recent highlights from my professional experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="p-6 hover-elevate" data-testid={`card-project-${project.id}`}>
                <Badge className="mb-4" data-testid={`badge-project-${project.id}`}>
                  Project {project.id}
                </Badge>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <div className="text-sm text-muted-foreground mb-4">
                  <span data-testid={`text-project-client-${project.id}`}>{project.client}</span> • <span data-testid={`text-project-period-${project.id}`}>{project.period}</span>
                </div>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.environment.slice(0, 3).map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/experience">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
