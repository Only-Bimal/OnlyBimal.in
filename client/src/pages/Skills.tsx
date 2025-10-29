import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@shared/schema";
import { 
  Monitor, 
  Code2, 
  Globe, 
  Database, 
  Wrench, 
  GitBranch 
} from "lucide-react";

const iconMap: Record<string, any> = {
  "Operating Systems": Monitor,
  "Programming Languages": Code2,
  "Web Technologies": Globe,
  "Databases": Database,
  "Development Tools": Wrench,
  "Source Control": GitBranch
};

export default function Skills() {
  return (
    <div className="min-h-screen">
      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-page-title">
            Technical Skills
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive expertise across Microsoft Technologies, databases, and development tools 
            acquired through 9+ years of professional experience.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeData.skills.map((skillCategory, index) => {
              const Icon = iconMap[skillCategory.category] || Code2;
              
              return (
                <Card key={index} className="p-6 hover-elevate" data-testid={`card-skill-category-${index}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold" data-testid={`text-skill-category-${index}`}>
                      {skillCategory.category}
                    </h2>
                  </div>

                  <div className="space-y-2">
                    {skillCategory.skills.map((skill, skillIdx) => (
                      <div 
                        key={skillIdx} 
                        className="flex items-center gap-2 py-2 px-3 rounded-md hover-elevate"
                        data-testid={`item-skill-${index}-${skillIdx}`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-base">{skill}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-8">Professional Strengths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resumeData.strengths.map((strength, index) => (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-strength-${index}`}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-base" data-testid={`text-strength-${index}`}>
                  {strength}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-8">All Technologies at a Glance</h2>
          
          <Card className="p-8">
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.flatMap(category => 
                category.skills.map((skill, idx) => (
                  <Badge key={`${category.category}-${idx}`} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))
              )}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
