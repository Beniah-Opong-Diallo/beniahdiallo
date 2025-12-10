import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2025 Beniah Opong Diallo. Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>
          <p className="text-sm text-muted-foreground">
            Full-Stack Developer & Graphic Designer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
