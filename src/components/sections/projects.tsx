import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { projects } from '@/lib/data';

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" subtitle="Flagship ventures and platforms shaping digital possibilities.">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <Card className="h-full p-6">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
