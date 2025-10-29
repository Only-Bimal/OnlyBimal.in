import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="text-8xl lg:text-9xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-404-title">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button size="lg" className="gap-2" data-testid="button-go-home">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="gap-2"
            data-testid="button-go-back"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
