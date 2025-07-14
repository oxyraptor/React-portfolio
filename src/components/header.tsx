"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-background/30 backdrop-blur-md">
      <Link href="/" className="font-headline text-2xl text-primary">
        MJ.
      </Link>
      <nav className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => scrollTo('contact')} className="font-headline text-lg text-foreground hover:text-primary">
          Contact
        </Button>
      </nav>
    </header>
  );
}
