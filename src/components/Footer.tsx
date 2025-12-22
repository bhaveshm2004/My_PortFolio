import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="font-display font-bold text-lg text-gradient">BM</span>
            <span className="text-sm text-muted-foreground">
              © {currentYear} Bhavesh Maske. All rights reserved.
            </span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>in Nagpur</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/bhaveshm2004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Github className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/bhavesh-maske"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="mailto:bhaveshmaske2004@gmail.com"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <Mail className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
