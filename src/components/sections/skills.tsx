import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { skills } from '@/lib/data';

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" subtitle="Multi-disciplinary capabilities across engineering, product, and education.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="h-full p-6">
              <skill.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{skill.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{skill.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
