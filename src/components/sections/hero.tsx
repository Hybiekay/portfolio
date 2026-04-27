import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  return (
    <section id="home" className="section-grid relative overflow-hidden border-b border-border py-24 md:py-32">
      <motion.div
        className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/30 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-10 right-10 h-60 w-60 rounded-full bg-violet-400/20 blur-3xl"
        animate={{ y: [0, -18, 0], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Badge className="mb-6 border-primary/30 bg-primary/10 text-primary">CEO · Eulogia Technologies</Badge>
          <h1 className="text-balance bg-gradient-to-br from-slate-900 via-sky-700 to-violet-700 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent dark:from-white dark:via-sky-300 dark:to-violet-300 md:text-6xl">
            Building Digital Infrastructure for the Next Generation of African Businesses
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            I design, build, and scale technology platforms that help businesses move faster, operate smarter, and compete globally.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
