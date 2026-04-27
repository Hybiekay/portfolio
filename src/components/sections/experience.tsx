import { motion } from 'framer-motion';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { experiences } from '@/lib/data';

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" subtitle="Leadership, product delivery, technical education, and continuous learning.">
      <div className="space-y-4">
        {experiences.map((item, index) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
          >
            <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-2 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </div>
              </div>
              <p className="max-w-xl text-sm text-muted-foreground">{item.summary}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
