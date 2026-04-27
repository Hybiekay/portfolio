import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { metrics } from '@/lib/data';

export function MetricsSection() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="p-6 text-center">
                <p className="text-3xl font-semibold tracking-tight">{metric.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
