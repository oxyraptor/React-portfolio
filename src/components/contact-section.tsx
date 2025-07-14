import { Button } from './ui/button';
import { Linkedin, Mail, FileText, Github } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Wanna Hire Me?</h2>
        <p className="font-body text-lg text-foreground/80 mb-8">
          I'm currently seeking new opportunities. Feel free to reach out for collaborations or just to say hello!
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:mandarjadhav236@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Email Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="https://github.com/oxyraptor" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="https://www.linkedin.com/in/jadhavmandarnitin/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="https://drive.google.com/file/d/1mq_5mhnRGRJL6xKJ4UZ0OB-25e5vzzB1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" /> Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
