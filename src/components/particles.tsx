"use client";

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  ease?: number;
}

export function Particles({
  className,
  quantity = 100,
  ease = 50,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouse = useRef<{ x: number; y: number; radius: number }>({ x: 0, y: 0, radius: 0 });
  const animationFrame = useRef<number>(0);
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext('2d');
    }
    initCanvas();
    animate();
    window.addEventListener('resize', initCanvas);

    return () => {
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };
  
  const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { clientX, clientY } = event;
      mousePosition.current.x = clientX - rect.left;
      mousePosition.current.y = clientY - rect.top;
    }
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length = 0;
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w;
      canvasRef.current.height = canvasSize.current.h;
    }
  };

  class Circle {
    x: number;
    y: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 2 + 0.5;
      this.alpha = 0;
      this.targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
      this.dx = (Math.random() - 0.5) * 0.2;
      this.dy = (Math.random() - 0.5) * 0.2;
      this.magnetism = 0.1 + Math.random() * 4;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(160, 196, 255, ${this.alpha})`;
      ctx.fill();
    }

    update(ctx: CanvasRenderingContext2D) {
      const mouseX = mouse.current.x;
      const mouseY = mouse.current.y;
      
      let dxMouse = this.x - mouseX;
      let dyMouse = this.y - mouseY;
      let distance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      
      if (distance < mouse.current.radius) {
        this.x -= dxMouse / distance * this.magnetism / 5;
        this.y -= dyMouse / distance * this.magnetism / 5;
      }
      
      this.x += this.dx;
      this.y += this.dy;

      if (this.x < 0 || this.x > canvasSize.current.w) this.dx *= -1;
      if (this.y < 0 || this.y > canvasSize.current.h) this.dy *= -1;

      if (this.alpha < this.targetAlpha) {
        this.alpha += 0.01;
      }

      this.draw(ctx);
    }
  };

  const drawParticles = () => {
    if (!context.current || !canvasRef.current) return;
    for (let i = 0; i < quantity; i++) {
      const x = Math.random() * canvasSize.current.w;
      const y = Math.random() * canvasSize.current.h;
      circles.current.push(new Circle(x, y));
    }
  };

  const animate = () => {
    if (!context.current || !canvasRef.current) return;

    context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);

    mouse.current.x += (mousePosition.current.x - mouse.current.x) * (ease / 100);
    mouse.current.y += (mousePosition.current.y - mouse.current.y) * (ease / 100);
    mouse.current.radius = 150;

    circles.current.forEach((circle) => circle.update(context.current!));
    animationFrame.current = requestAnimationFrame(animate);
  };

  return (
    <div className={cn("h-full w-full", className)} ref={canvasContainerRef} onMouseMove={onMouseMove}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
