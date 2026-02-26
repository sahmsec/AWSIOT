import { Link } from "wouter";
import { ShieldAlert, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 pt-16 pb-8 border-t-[6px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <ShieldAlert className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-white text-xl leading-tight tracking-wide">
                  Arena Web Security
                </span>
                <span className="text-primary text-[0.65rem] font-bold uppercase tracking-widest">
                  Institute of Technology
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering the next generation of cybersecurity experts through rigorous academic programs and hands-on training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Security Blvd, Tech District<br/>Cyber City, ST 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400">admissions@arenawebsecurity.edu</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6 relative inline-block">
              Academics
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/academics/undergraduate" className="text-gray-400 hover:text-primary transition-colors">Undergraduate Programs</Link></li>
              <li><Link href="/academics/graduate" className="text-gray-400 hover:text-primary transition-colors">Graduate Programs</Link></li>
              <li><Link href="/academics/certifications" className="text-gray-400 hover:text-primary transition-colors">Professional Certifications</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Course Catalog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Academic Calendar</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/apply" className="text-gray-400 hover:text-primary transition-colors">Apply Now</Link></li>
              <li><Link href="/students" className="text-gray-400 hover:text-primary transition-colors">Student Life</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Tuition & Financial Aid</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Campus Safety</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Careers at Arena</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Arena Web Security Institute of Technology. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
