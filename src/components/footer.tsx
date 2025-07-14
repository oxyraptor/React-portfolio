export function Footer() {
  return (
    <footer className="py-8 text-center text-foreground/60 font-body">
      <div className="container mx-auto">
        <p>
          Designed & Built by Mandar &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
