export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold font-display tracking-tight mb-2">
              STUDIO<span className="text-primary">.</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Studio Design Inc. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
