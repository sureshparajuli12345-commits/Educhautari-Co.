import { BookOpen, FileCheck, Plane, GraduationCap, DollarSign, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "University Selection",
      desc: "We help you choose the right university based on your academic profile, budget, and career goals.",
      benefits: ["Personalized shortlisting", "Course comparison", "Admission requirements check"],
      process: "1. Profile Evaluation -> 2. Options Provided -> 3. Final Selection"
    },
    {
      icon: FileCheck,
      title: "Application Processing",
      desc: "Our experts handle the entire application process, ensuring all documents are perfect and submitted on time.",
      benefits: ["Error-free applications", "SOP & LOR guidance", "Application fee waivers (where applicable)"],
      process: "1. Document Collection -> 2. Application Submission -> 3. Offer Letter Tracking"
    },
    {
      icon: BookOpen,
      title: "IELTS / PTE Coaching",
      desc: "Get high scores with our intensive preparation classes led by certified instructors.",
      benefits: ["Mock tests", "Study materials provided", "Flexible timings"],
      process: "1. Diagnostic Test -> 2. Customized Coaching -> 3. Final Exam"
    },
    {
      icon: Plane,
      title: "Student Visa Guidance",
      desc: "We provide meticulous visa application assistance, maximizing your chances of approval.",
      benefits: ["Visa interview prep", "Financial documentation help", "High success rate"],
      process: "1. Financial Assessment -> 2. File Preparation -> 3. Visa Lodgment"
    },
    {
      icon: DollarSign,
      title: "Scholarship Assistance",
      desc: "We identify and help you apply for scholarships and financial aid to reduce your financial burden.",
      benefits: ["Merit-based scholarships", "Need-based aid", "Application essays"],
      process: "1. Eligibility Check -> 2. Scholarship Search -> 3. Application"
    },
    {
      icon: Users,
      title: "Pre-Departure Support",
      desc: "Complete briefing to prepare you for your new life abroad, from accommodation to cultural adaptation.",
      benefits: ["Accommodation help", "Flight booking assistance", "Networking with alumni"],
      process: "1. Pre-departure Briefing -> 2. Travel Arrangements -> 3. Arrival Support"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive support for your study abroad journey, from test prep to pre-departure.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{service.desc}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 mt-1.5 mr-2 bg-orange-500 rounded-full shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">Process:</h4>
                  <p className="text-xs text-slate-500 font-mono">{service.process}</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors"
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 shadow-2xl text-white">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Service Package?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Every student's journey is unique. Contact us to discuss your specific requirements and get a tailored plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-blue-900 bg-white hover:bg-slate-50 transition-all shadow-lg hover:-translate-y-1"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
