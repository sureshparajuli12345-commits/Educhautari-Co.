import { CheckCircle2, Users, Award, Target, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduNepal</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in international education. We are dedicated to helping Nepali students achieve their global academic dreams.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2014, EduNepal Consulting started with a simple mission: to provide honest, transparent, and expert guidance to students in Nepal aspiring to study abroad.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Over the past decade, we have grown from a small office in Putalisadak to one of the most trusted educational consultancies in the country. We have successfully placed over 3,000 students in top universities across Australia, Canada, the UK, the USA, and Europe.
            </p>
            <div className="flex items-center space-x-4 text-slate-700 font-medium">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span>Certified Counselors</span>
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span>95% Visa Success Rate</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/team/800/600"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="text-4xl font-bold text-blue-600 mb-1">10+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-10 rounded-3xl">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To simplify the complex process of studying abroad by providing personalized, ethical, and comprehensive consulting services, ensuring every student finds their perfect educational fit.
              </p>
            </div>
            <div className="bg-orange-50 p-10 rounded-3xl">
              <Award className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the leading and most trusted educational consultancy in Nepal, empowering students to become global citizens and future leaders through international education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Are Different */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Why We Are Different</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Student-First Approach</h4>
            <p className="text-slate-600">We prioritize your career goals over university commissions. Our advice is always unbiased and tailored to you.</p>
          </div>
          <div className="p-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Transparent Process</h4>
            <p className="text-slate-600">No hidden fees or false promises. We maintain complete transparency throughout your application and visa process.</p>
          </div>
          <div className="p-8">
            <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">End-to-End Support</h4>
            <p className="text-slate-600">From IELTS preparation to airport pickup in your destination country, we are with you every step of the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
