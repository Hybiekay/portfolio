import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navItems } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScrollSpy } from '@/hooks/use-scrollspy';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map((item) => item.id));

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-2xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="bg-gradient-to-r from-sky-600 to-violet-500 bg-clip-text text-sm font-semibold tracking-tight text-transparent">
          Ademola Ibukunoluwa
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/80 p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground',
                activeSection === item.id && 'bg-primary/15 text-primary'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" variant="outline" className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="border-t border-border/60 bg-background/95 p-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
