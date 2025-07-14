import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code, Cpu, Palette } from 'lucide-react';

export function SkillsSection() {
  const skills = {
    languages: {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: 'Languages & Tools',
      items: ['Python', 'Java', 'C++', 'HTML/CSS/JS'],
    },
    tech: {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: 'Tech',
      items: ['AI Tools', 'GitHub', 'Copilot', 'Cloud'],
    },
    creative: {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: 'Creative',
      items: ['3D Tools', 'Design Platforms'],
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4">My Skills and Interests</h2>
        <p className="font-body text-lg md:text-xl text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
          I'm passionate about adapting to evolving tech needs and thrive in inclusive, collaborative environments where I can contribute to meaningful projects and continuously grow my skill set.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(skills).map((category) => (
            <Card key={category.title} className="bg-card/50 border-primary/20 backdrop-blur-sm text-center">
              <CardHeader className="flex flex-col items-center">
                {category.icon}
                <CardTitle className="font-headline text-2xl mt-4">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-body text-lg text-foreground/80">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
