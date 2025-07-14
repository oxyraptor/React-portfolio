import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function ExperienceSection() {
  const experiences = [
    {
      role: 'IT Intern',
      company: 'Nashik Smart City',
      description: [
        'Assisted in IT system maintenance and basic troubleshooting..',
        'Supported software and hardware tasks within the Smart City project.',
        'Gained practical exposure to IT infrastructure,networking basics, and smart tech applications.',
      ],
    },
    {
      role: 'Python and Front-end Developer',
      company: 'NextInSoft',
      description: [
        'Developed and maintained web applications using HTML, CSS, and JavaScript.',
        'Wrote Python scripts for data processing and back-end integration.',
        'Collaborated with UI/UX designers and back-end teams to deliver seamless user experiences.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">My Experience</h2>
        <div className="space-y-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block"></div>
          {experiences.map((exp, index) => (
            <div key={exp.company} className={`md:flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2 md:pl-8">
                <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">{exp.role}</CardTitle>
                    <CardDescription className="font-body text-lg">{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc list-inside text-foreground/80">
                      {exp.description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
               <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
