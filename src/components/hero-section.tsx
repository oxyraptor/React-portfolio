import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl w-full">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl font-bold text-primary">Mandar</h1>
          <div className="mt-4 space-y-2">
            <p className="font-body text-2xl text-foreground/90">Engineering Student</p>
            <p className="font-body text-2xl text-foreground/90">AIML Enthusiast</p>
            <p className="font-body text-2xl text-foreground/90">3D Artist</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/profile_1.jpg"
              alt="Mandar's profile picture"
              width={400}
              height={400}
              className="rounded-full object-cover border-4 border-primary/50"
              data-ai-hint="profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
