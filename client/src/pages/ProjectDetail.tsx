import { useRoute, Link } from "wouter";
import { getProjectBySlug } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MapPin, Zap, Calendar, Clock, Award } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:slug");
  
  if (!params?.slug) {
    return <NotFound />;
  }

  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4" 
            data-testid="link-back-projects"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg"
                data-testid="img-project-detail"
              />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold mb-4 text-foreground" data-testid="text-project-title">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span data-testid="text-project-location">{project.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="h-5 w-5 text-primary" />
                  <span data-testid="text-project-capacity">{project.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span data-testid="text-project-completed">{project.details.completedDate}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span data-testid="text-project-duration">{project.details.duration}</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6" data-testid="text-project-description">
                {project.description}
              </p>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-1">Client</p>
                <p className="text-xl font-semibold text-foreground" data-testid="text-project-client">
                  {project.client}
                </p>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" data-testid="button-request-quote">
                  <Link href="/contact">
                    Request Quote
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" data-testid="button-view-services">
                  <Link href="/services">
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                Challenges
              </h2>
              <p className="text-foreground" data-testid="text-project-challenges">
                {project.details.challenges}
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                Our Solution
              </h2>
              <p className="text-foreground" data-testid="text-project-solution">
                {project.details.solution}
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Outcome
              </h2>
              <p className="text-foreground" data-testid="text-project-outcome">
                {project.details.outcome}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="text-cta-title">
            Have a Similar Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our team to discuss your power generation needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" data-testid="button-cta-contact">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" data-testid="button-cta-browse">
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
