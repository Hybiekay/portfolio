export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Ademola Ibukunoluwa</p>
        <p>Building global-grade digital infrastructure from Africa.</p>
      </div>
    </footer>
  );
}
