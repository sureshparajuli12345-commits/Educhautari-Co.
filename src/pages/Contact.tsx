import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your study abroad journey? Get in touch with our expert counselors today for a free consultation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-slate-600 mb-8">
                Whether you have a quick question or want to book a full consultation, our team is here to help you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 mr-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Our Office</h3>
                    <p className="text-slate-600">Putalisadak, Kathmandu<br />Bagmati Province, Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mr-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                    <p className="text-slate-600">
                      <a href="tel:+9779800000000" className="hover:text-blue-600">+977 9800000000</a><br />
                      <a href="tel:+977014000000" className="hover:text-blue-600">+977 01-4000000</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center shrink-0 mr-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                    <p className="text-slate-600">
                      <a href="mailto:info@edunepal.com" className="hover:text-blue-600">info@edunepal.com</a><br />
                      <a href="mailto:admissions@edunepal.com" className="hover:text-blue-600">admissions@edunepal.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0 mr-6">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Office Hours</h3>
                    <p className="text-slate-600">Sunday - Friday: 9:00 AM - 6:00 PM<br />Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <MessageCircle className="w-8 h-8 text-green-500 mr-3" />
                Chat on WhatsApp
              </h3>
              <p className="text-slate-600 mb-6">Get instant replies to your queries from our expert counselors.</p>
              <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-green-500 hover:bg-green-600 transition-all shadow-lg shadow-green-500/30 w-full"
              >
                Start Chat Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Book a Free Consultation</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Ram" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Thapa" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="ram.thapa@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+977 98..." />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Interested Destination</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                  <option>Select Destination</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>UK</option>
                  <option>USA</option>
                  <option>Europe</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Tell us about your academic background and goals..."></textarea>
              </div>
              
              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1">
                Submit Request
              </button>
              
              <p className="text-xs text-slate-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy. We will contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
