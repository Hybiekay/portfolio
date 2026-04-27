import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { contacts } from '@/lib/data';

export function ContactSection() {
  return (
    <Section id="contact" title="Contact" subtitle="Let’s build category-defining products and infrastructure together.">
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-4 p-6">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border p-4 transition hover:bg-muted"
            >
              <contact.icon className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">{contact.label}</p>
                <p className="text-sm text-muted-foreground">{contact.value}</p>
              </div>
            </a>
          ))}
        </Card>

        <Card className="p-6">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
            />
            <textarea
              placeholder="Tell me about your project"
              rows={5}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary transition focus:ring-2"
            />
            <Button className="w-full">Send Message</Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
