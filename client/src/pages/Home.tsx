import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Award, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* hero section modern university campus students */}
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
          alt="Arena Institute Campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-wash"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/90 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-white/20 shadow-lg">
            Defend The Future
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-white text-shadow-md mb-6 leading-tight">
            Master the Art of <br />
            <span className="text-primary">Cybersecurity</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 text-shadow-sm font-light">
            Join the elite ranks of digital defenders. Arena Web Security Institute of Technology provides world-class education for the modern threat landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/apply" 
              className="px-8 py-4 bg-primary text-white font-bold rounded shadow-xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Start Your Application
            </Link>
            <Link 
              href="/academics/undergraduate" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded border border-white/30 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Information Cards Strip */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group">
            <ShieldCheck className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif font-bold mb-3 text-gray-900">Industry Aligned</h3>
            <p className="text-gray-600 mb-6 flex-grow">Our curriculum is designed alongside top tech companies to ensure you learn the most relevant, up-to-date security practices.</p>
            <Link href="/academics/certifications" className="text-primary font-bold flex items-center hover:underline mt-auto">
              View Certifications <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-lg shadow-xl p-8 border-t-4 border-gray-600 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group">
            <Users className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif font-bold mb-3 text-white">Elite Community</h3>
            <p className="text-gray-400 mb-6 flex-grow">Join a network of passionate individuals. Learn, collaborate, and compete in CTF events with peers from around the globe.</p>
            <Link href="/students" className="text-white font-bold flex items-center hover:text-primary transition-colors mt-auto">
              Meet Our Students <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-primary rounded-lg shadow-xl p-8 border-t-4 border-red-900 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group">
            <Award className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif font-bold mb-3 text-white">World-Class Faculty</h3>
            <p className="text-white/90 mb-6 flex-grow">Learn directly from seasoned security professionals, ethical hackers, and industry veterans with decades of real-world experience.</p>
            <Link href="/academics/graduate" className="text-white font-bold flex items-center hover:underline mt-auto">
              Explore Faculty <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured News / Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
              {/* coding students cybersecurity lab */}
              <img 
                src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop" 
                alt="Students in lab" 
                className="rounded-2xl shadow-2xl object-cover aspect-[4/3] w-full"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Campus Life</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Building a Culture of Innovation & Defense
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                At Arena Web Security Institute, we don't just teach theory. Our students engage in active threat hunting, penetration testing simulations, and real-world vulnerability assessments from day one.
              </p>
              <p className="text-gray-600 mb-8">
                Our state-of-the-art cyber labs provide a safe sandbox environment to practice offensive and defensive security techniques against live, modern threats.
              </p>
              <Link 
                href="/students" 
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-bold rounded hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Discover Student Life
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
