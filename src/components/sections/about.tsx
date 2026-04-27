import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Software engineer, founder, educator, and student — building practical systems that create real-world impact."
    >
      <Card className="p-8 md:p-10">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I am Ademola Ibukunoluwa, a software engineer and founder committed to creating digital infrastructure for the next era of African business. My journey bridges Flutter and Dart mobile engineering, backend architecture, cloud operations, and product strategy. Beyond building products, I teach and mentor upcoming developers as a Mobile App Instructor, while deepening my computer science foundation at the University of the People. Every project I lead is built with one focus: scalable technology that serves people and markets at global standards.
        </p>
      </Card>
    </Section>
  );
}
