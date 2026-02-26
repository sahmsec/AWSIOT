import { Quote } from "lucide-react";

export default function Students() {
  const testimonials = [
    {
      id: 1,
      quote: "The hands-on labs and CTF competitions prepared me for exactly what I face every day as a Security Analyst.",
      name: "Sarah Jenkins",
      role: "Class of '23, Cyber Threat Hunter",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "Arena didn't just teach me how to use tools; it taught me how attackers think. That mindset is invaluable.",
      name: "Michael Chen",
      role: "Class of '22, Penetration Tester",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "The faculty networking opportunities directly led to my internship and subsequent full-time role.",
      name: "Elena Rodriguez",
      role: "Current Graduate Student",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded790047?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-[#111] py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-white mb-6">Our Students</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Meet the driven individuals who make up the Arena Web Security community. They are the next generation of leaders in digital defense.
          </p>
        </div>
      </div>

      {/* Gallery / Life Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Life on Campus</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Being a student at Arena means immersing yourself in a culture of constant learning. Between intensive lab sessions, late-night hackathons, and guest lectures from industry veterans, there's always an opportunity to level up your skills.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center space-x-3 text-gray-800 font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Annual Capture The Flag (CTF) Tournaments
                </li>
                <li className="flex items-center space-x-3 text-gray-800 font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Weekly Security Briefing Clubs
                </li>
                <li className="flex items-center space-x-3 text-gray-800 font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Open-source contribution groups
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* student studying coding laptop */}
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Student coding" className="rounded-lg shadow-md w-full h-48 object-cover" />
              {/* students collaborating */}
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" alt="Students collaborating" className="rounded-lg shadow-md w-full h-48 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-16">Student Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 rotate-180" />
                <p className="text-gray-600 italic mb-8 relative z-10">"{t.quote}"</p>
                <div className="mt-auto flex items-center space-x-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-primary font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
