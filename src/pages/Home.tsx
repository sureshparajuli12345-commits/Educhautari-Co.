import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GraduationCap, Globe2, FileText, Award, Users, Star, MessageCircle, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/university/1920/1080?blur=2"
            alt="Students on campus"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-sm mb-6 border border-orange-500/30">
                #1 Student Visa Consultants in Nepal
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Your Dream to Study Abroad Starts Here.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Expert guidance for Nepali students to study in Australia, Canada, UK, USA, and Europe. Join 3000+ successful students with our 95% visa success rate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-1"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/9779800000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all shadow-lg shadow-green-600/30 hover:-translate-y-1"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm text-slate-400 font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-blue-900" src={`https://picsum.photos/seed/student${i}/100/100`} alt="Student" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <p>Join 3000+ Nepali students<br/>already studying abroad.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">3000+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Students Placed</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Visa Success Rate</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">100+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Partner Universities</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">10+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Nepali Students Choose Us</h2>
            <p className="text-lg text-slate-600">We don't just process applications; we build careers. Here is why we are the trusted choice for studying abroad.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Expert Counselors", desc: "Certified advisors with years of experience in international education." },
              { icon: CheckCircle2, title: "High Visa Success", desc: "Meticulous documentation resulting in a 95% visa approval rate." },
              { icon: Globe2, title: "Global Network", desc: "Direct partnerships with top-ranked universities worldwide." },
              { icon: FileText, title: "SOP & Essay Help", desc: "Professional writers to help craft winning statements of purpose." },
              { icon: GraduationCap, title: "Scholarship Guidance", desc: "We help you secure maximum financial aid and scholarships." },
              { icon: Users, title: "Pre-Departure Support", desc: "Complete briefing on accommodation, travel, and life abroad." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Top Study Destinations</h2>
              <p className="text-lg text-slate-600">Explore world-class education opportunities in the most sought-after countries.</p>
            </div>
            <Link to="/destinations" className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              View All Destinations <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Australia", img: "sydney", desc: "World-class universities, post-study work rights, and high quality of life." },
              { name: "Canada", img: "toronto", desc: "Affordable education, welcoming culture, and clear PR pathways." },
              { name: "UK", img: "london", desc: "Prestigious institutions, 2-year PSW visa, and rich history." },
              { name: "USA", img: "newyork", desc: "Ivy league education, diverse campus life, and OPT opportunities." },
              { name: "Europe", img: "paris", desc: "Low tuition fees, Schengen visa access, and cultural diversity." }
            ].map((dest, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3]">
                  <img
                    src={`https://picsum.photos/seed/${dest.img}/800/600`}
                    alt={`Study in ${dest.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {dest.desc}
                  </p>
                  <Link to="/destinations" className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300">
                    Explore Universities <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/destinations" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              View All Destinations <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-16 bg-gradient-to-br from-slate-50 to-blue-50">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Start Your Journey?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Book a free 30-minute consultation with our expert counselors. We'll evaluate your profile and suggest the best universities and courses.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["Profile Evaluation", "Course & University Shortlisting", "Scholarship Assessment", "Visa Process Overview"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center p-4 bg-orange-50 rounded-xl border border-orange-100">
                <Calendar className="w-8 h-8 text-orange-500 mr-4" />
                <div>
                  <p className="font-bold text-slate-900">Limited Slots Available</p>
                  <p className="text-sm text-slate-600">Book now to secure your intake.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-10 md:p-16 bg-white">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+977 98..." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Destination</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                    <option>Select a country</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>UK</option>
                    <option>USA</option>
                    <option>Europe</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1">
                  Book Free Consultation Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-slate-600">Don't just take our word for it. Hear from students who achieved their study abroad dreams with us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Aarav Sharma", dest: "University of Sydney, Australia", text: "EduNepal made my visa process so smooth. Their SOP guidance was exceptional. I got my visa in just 2 weeks!" },
              { name: "Priya Thapa", dest: "Seneca College, Canada", text: "From university selection to pre-departure briefing, the team was incredibly supportive. Highly recommended for Canada." },
              { name: "Rohan Gurung", dest: "Coventry University, UK", text: "I was worried about my gap years, but their expert counselors guided me perfectly. Now I'm studying in the UK." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                <div className="flex text-orange-400 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img src={`https://picsum.photos/seed/face${idx}/100/100`} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.dest}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about studying abroad.</p>
          </div>

          <div className="space-y-6">
            {[
              { q: "How much does it cost to study abroad from Nepal?", a: "Costs vary significantly by country and course. On average, expect to spend between NPR 15 Lakhs to 40 Lakhs per year including tuition and living expenses. We help you find scholarships to reduce this burden." },
              { q: "What is the visa success rate?", a: "We maintain a 95% visa success rate due to our rigorous documentation process and expert guidance. We only process applications that meet all the criteria." },
              { q: "Is IELTS or PTE mandatory?", a: "For most English-speaking countries like Australia, UK, Canada, and USA, an English proficiency test like IELTS or PTE is mandatory. Some European countries might have exceptions." },
              { q: "How long does the entire process take?", a: "The process typically takes 3 to 6 months from university application to visa approval. We recommend starting your process at least 6-8 months before your intended intake." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start Your Study Abroad Journey Today</h2>
          <p className="text-xl text-blue-100 mb-10">Join thousands of successful students who have trusted EduNepal to build their international careers.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-blue-900 bg-white hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Book Your Free Consultation Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
