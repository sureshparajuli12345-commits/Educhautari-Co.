import { ArrowRight, CheckCircle2, MapPin, DollarSign, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Destinations() {
  const destinations = [
    {
      id: "australia",
      name: "Australia",
      img: "sydney",
      desc: "Australia offers a diverse, welcoming environment with world-class universities and excellent post-study work opportunities.",
      why: [
        "Top-ranked universities globally",
        "Up to 4 years of Post-Study Work (PSW) rights",
        "High standard of living and safety",
        "Part-time work allowed (48 hours/fortnight)"
      ],
      courses: ["Nursing", "IT & Computer Science", "Engineering", "Business & Accounting"],
      universities: ["University of Sydney", "Monash University", "University of Melbourne", "UNSW"],
      cost: "AUD 30,000 - 45,000 / year",
      work: "Up to 4 years PSW"
    },
    {
      id: "canada",
      name: "Canada",
      img: "toronto",
      desc: "Known for its high-quality education, affordable tuition, and clear pathways to permanent residency.",
      why: [
        "Affordable tuition fees compared to US/UK",
        "Post-Graduation Work Permit (PGWP) up to 3 years",
        "Multicultural and welcoming society",
        "Clear pathways to Permanent Residency (PR)"
      ],
      courses: ["Business Management", "Health Sciences", "Engineering", "Hospitality"],
      universities: ["University of Toronto", "Seneca College", "Humber College", "UBC"],
      cost: "CAD 15,000 - 35,000 / year",
      work: "Up to 3 years PGWP"
    },
    {
      id: "uk",
      name: "United Kingdom",
      img: "london",
      desc: "Home to some of the world's oldest and most prestigious universities, offering shorter, intensive courses.",
      why: [
        "1-year Master's degree programs",
        "2-year Post-Study Work (PSW) visa",
        "Rich cultural and historical heritage",
        "Excellence in research and innovation"
      ],
      courses: ["Law", "Business & Finance", "Art & Design", "Medicine"],
      universities: ["University of Oxford", "Coventry University", "University of Greenwich", "UCL"],
      cost: "GBP 12,000 - 25,000 / year",
      work: "2 years PSW"
    },
    {
      id: "usa",
      name: "United States",
      img: "newyork",
      desc: "The US boasts the highest number of top-ranked universities and unparalleled opportunities for research and OPT.",
      why: [
        "World's top-ranked universities",
        "Flexible education system",
        "STEM OPT extension up to 3 years",
        "Vibrant campus life and diversity"
      ],
      courses: ["Computer Science", "Engineering", "Business Analytics", "Data Science"],
      universities: ["MIT", "Stanford University", "NYU", "Arizona State University"],
      cost: "USD 25,000 - 55,000 / year",
      work: "Up to 3 years OPT (STEM)"
    },
    {
      id: "europe",
      name: "Europe",
      img: "paris",
      desc: "Europe offers high-quality education with low or no tuition fees in many countries, plus access to the Schengen area.",
      why: [
        "Low or zero tuition fees in public universities",
        "Schengen visa allows travel across 27 countries",
        "Programs taught entirely in English",
        "Rich cultural experience"
      ],
      courses: ["Automotive Engineering", "International Business", "Tourism", "Design"],
      universities: ["Technical University of Munich", "KU Leuven", "University of Amsterdam", "Politecnico di Milano"],
      cost: "EUR 0 - 15,000 / year",
      work: "Varies by country (1-2 years)"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Study Destinations</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the best countries for your higher education. We provide complete guidance for studying in top global destinations.
          </p>
        </div>
      </div>

      {/* Destinations List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {destinations.map((dest, index) => (
          <div key={dest.id} id={dest.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3]">
                  <img
                    src={`https://picsum.photos/seed/${dest.img}/1000/800`}
                    alt={`Study in ${dest.name}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <h2 className="text-4xl font-bold text-white">{dest.name}</h2>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-8">
              <p className="text-lg text-slate-600 leading-relaxed">{dest.desc}</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex items-center text-blue-600 mb-3">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <h3 className="font-bold text-slate-900">Estimated Cost</h3>
                  </div>
                  <p className="text-slate-600">{dest.cost}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex items-center text-blue-600 mb-3">
                    <Briefcase className="w-5 h-5 mr-2" />
                    <h3 className="font-bold text-slate-900">Work Rights</h3>
                  </div>
                  <p className="text-slate-600">{dest.work}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
                  Why Study in {dest.name}?
                </h3>
                <ul className="space-y-3">
                  {dest.why.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <span className="w-2 h-2 mt-2 mr-3 bg-orange-500 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-4 border-t border-slate-200">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                    Popular Courses
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {dest.courses.map((course, i) => <li key={i}>{course}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    Top Universities
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {dest.universities.map((uni, i) => <li key={i}>{uni}</li>)}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-1 w-full sm:w-auto"
                >
                  Consult for {dest.name}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
