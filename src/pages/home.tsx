import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Check, 
  ExternalLink, 
  Github, 
  Palette, 
  Sparkles, 
  Zap 
} from 'lucide-react';

export function Home() {
  const { toast } = useToast();

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Vite + React + Shadcn UI Template
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            A modern, optimized template for building beautiful React applications.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={() => {
              toast({
                title: 'Success!',
                description: 'Your toast system is working correctly.',
              });
            }}
          >
            Test Toast
          </Button>
          <Button variant="outline">
            Documentation
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="group hover:shadow-md transition-all">
          <CardHeader>
            <Zap className="h-5 w-5 text-primary mb-2" />
            <CardTitle>Fast Development</CardTitle>
            <CardDescription>
              Optimized for developer experience with HMR and fast builds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Vite provides lightning-fast development with instant server start and hot module replacement.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="gap-1">
              Learn more <ExternalLink className="h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="group hover:shadow-md transition-all">
          <CardHeader>
            <Palette className="h-5 w-5 text-primary mb-2" />
            <CardTitle>Beautiful UI</CardTitle>
            <CardDescription>
              Accessible and customizable components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Built with Shadcn UI for beautiful, accessible, and customizable components.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="gap-1">
              Learn more <ExternalLink className="h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="group hover:shadow-md transition-all">
          <CardHeader>
            <Sparkles className="h-5 w-5 text-primary mb-2" />
            <CardTitle>Type Safety</CardTitle>
            <CardDescription>
              Full TypeScript support for reliable code
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Built with TypeScript for type safety and better developer experience.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="gap-1">
              Learn more <ExternalLink className="h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Features</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            'Vite for lightning-fast builds',
            'React 18 with TypeScript',
            'Shadcn UI components',
            'Tailwind CSS for styling',
            'Dark mode with theme toggle',
            'ESLint configuration',
            'Performance optimization plugins',
            'Bundle analyzer',
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center pt-8">
        <Button variant="outline" size="sm" className="gap-2">
          <Github className="h-4 w-4" /> View on GitHub
        </Button>
      </div>
    </div>
  );
}