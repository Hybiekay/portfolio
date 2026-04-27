import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  return (
    <section id="home" className="section-grid border-b border-border py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Badge className="mb-6">CEO · Eulogia Technologies</Badge>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
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
