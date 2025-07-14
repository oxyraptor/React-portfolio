import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export function PortfolioSection() {
  const projects = [
    { title: 'AIML Projects', description: 'Showcase of my machine learning models and AI-powered solutions to complex problems.', image: '/56387.jpg', hint: 'ai code' },
    { title: '3D Renderings', description: 'A collection of my best 3D art pieces, showcasing skills in modeling, texturing, and lighting.', image: '/interior_1.jpg', hint: '3d abstract' },
    { title: 'Web Applications', description: 'Interactive and responsive web projects built with modern frontend technologies.', image: '/Screenshot 2025-07-13 203354.png', hint: 'web application' },
  ];
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">My Portfolio</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-card/50 border-primary/20 overflow-hidden backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
                          <h3 className="font-headline text-3xl text-primary mb-4">{project.title}</h3>
                          <p className="font-body text-lg text-foreground/80 mb-6">{project.description}</p>
                          <Button variant="outline" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground">View Projects</Button>
                        </div>
                        <div className="order-1 md:order-2">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-80 object-cover md:h-full"
                            data-ai-hint={project.hint}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
