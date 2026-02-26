import { useParams, Link } from "wouter";
import { CheckCircle, ArrowRight, Shield, BookOpen, Server } from "lucide-react";

// Mock data based on the route
const programData: Record<string, any> = {
  undergraduate: {
    title: "Undergraduate Programs",
    subtitle: "Bachelor of Science in Cybersecurity",
    description: "A comprehensive 4-year degree designed to take you from foundational computer science principles to advanced defensive and offensive security strategies.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    features: ["Network Defense", "Secure Software Development", "Digital Forensics", "Cryptography Fundamentals"]
  },
  graduate: {
    title: "Graduate Programs",
    subtitle: "Master of Science in Information Security",
    description: "An intensive 2-year program for professionals looking to elevate their careers into leadership, advanced research, or highly specialized technical roles.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    features: ["Security Architecture & Design", "Cyber Risk Management", "Advanced Penetration Testing", "Security Policy & Law"]
  },
  certifications: {
    title: "Professional Certifications",
    subtitle: "Intensive Bootcamp & Cert Prep",
    description: "Fast-tracked, rigorous training modules designed to prepare you for industry-recognized certifications like CISSP, CEH, and Security+.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2070&auto=format&fit=crop",
    features: ["Certified Ethical Hacker (CEH) Prep", "CompTIA Security+ Track", "AWS/Azure Security Specialty", "Incident Response Training"]
  }
};

export default function Program() {
  const params = useParams();
  const type = params.type || "undergraduate";
  const data = programData[type] || programData.undergraduate;

  return (
    <div className="w-full bg-white">
      {/* Program Hero */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center">
        <img 
          src={data.image} 
          alt={data.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Academics</span>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-4">{data.title}</h1>
            <p className="text-xl text-gray-300 font-light">{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Program Overview</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {data.description}
            </p>

            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Core Curriculum</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {data.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-[#111] text-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-4">Ready to start?</h3>
              <p className="text-gray-400 mb-6">Join the next cohort and begin your journey into the world of cybersecurity.</p>
              <Link href="/apply" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-colors">
                Apply to this Program
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 space-y-6">
              
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 p-6 border-b border-gray-100">
                  <h4 className="font-serif font-bold text-lg text-gray-900">Program Details</h4>
                </div>
                <ul className="p-6 space-y-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <Shield className="w-5 h-5 mr-3 text-primary" />
                    Format: On-Campus & Hybrid
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <BookOpen className="w-5 h-5 mr-3 text-primary" />
                    Credits: Intensive structure
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Server className="w-5 h-5 mr-3 text-primary" />
                    Access: 24/7 Virtual Labs
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-serif font-bold text-lg text-gray-900 mb-4">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-4">Our admissions counselors are ready to answer your questions.</p>
                <a href="#" className="text-primary font-bold text-sm flex items-center hover:underline">
                  Contact Admissions <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
