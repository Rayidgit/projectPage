import React from 'react';
import { ExternalLink } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'M.F.M. FAZLY',
      cnLink: 'https://thecn.com/EF509',
      image: `${import.meta.env.BASE_URL}assets/team/fazly.png`
    },
    {
      name: 'A.H.M. RAYID',
      cnLink: 'https://thecn.com/ER757',
      image: `${import.meta.env.BASE_URL}assets/team/rayid.png`
    },
    {
      name: 'R.M. RINOS',
      cnLink: 'https://thecn.com/ER760',
      image: `${import.meta.env.BASE_URL}assets/team/rinos.png`
    },
    {
      name: 'A.M.M. SAABITH',
      cnLink: 'https://thecn.com/SM3230',
      image: `${import.meta.env.BASE_URL}assets/team/saabith.png`
    }
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-slate-100/80 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Meet the Team
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Engineered by Computer Engineering undergraduates for the Third Year Engineering Project.
          </p>
        </div>

        {/* Individual Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:bg-[#dbece4] hover:border-emerald-400/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Member Portrait Image Container */}
                <div className="relative rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-slate-200 aspect-square group-hover:border-slate-400 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                  {member.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-600 font-medium">Department of Computer Engineering</span>
                <a
                  href={member.cnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-slate-700 hover:text-white text-slate-700 border border-slate-300 transition-all shadow-sm"
                  aria-label={`View profile for ${member.name}`}
                  title="View CN Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
