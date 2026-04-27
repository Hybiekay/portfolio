import { motion } from 'framer-motion';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useScrollSpy } from '@/hooks/use-scrollspy';

export function FloatingBottomNav() {
  const activeSection = useScrollSpy(navItems.map((item) => item.id));

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:bottom-6">
      <div className="relative flex items-center gap-1 rounded-full border border-border/70 bg-background/80 p-1.5 shadow-premium backdrop-blur-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'relative flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground',
                isActive && 'text-primary'
              )}
              aria-label={item.label}
            >
              {isActive && (
                <motion.span
                  layoutId="active-bottom-nav"
                  className="absolute inset-0 rounded-full bg-primary/15"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
                />
              )}
              <item.icon className="relative z-10 h-4 w-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
