import React from 'react';
import { GraduationCap, ExternalLink } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'M.F.M. FAZLY',
      regNo: 'E/21/130',
      cnLink: 'https://thecn.com/EF509',
      role: 'Hardware & Circuit Engineer',
      image: '/assets/team/fazly.png'
    },
    {
      name: 'A.H.M. RAYID',
      regNo: 'E/21/335',
      cnLink: 'https://thecn.com/ER757',
      role: 'IoT Edge & Gateway Developer',
      image: '/assets/team/rayid.png'
    },
    {
      name: 'R.M. RINOS',
      regNo: 'E/21/336',
      cnLink: 'https://thecn.com/ER760',
      role: 'Backend & Cloud Systems Engineer',
      image: '/assets/team/rinos.png'
    },
    {
      name: 'A.M.M. SAABITH',
      regNo: 'E/21/342',
      cnLink: 'https://thecn.com/SM3230',
      role: 'Mobile Frontend & UX Designer',
      image: '/assets/team/saabith.png'
    }
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            University of Peradeniya · Group 18
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Meet the Engineering Team
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Engineered by Computer Engineering undergraduates for the Third Year Engineering Project (Milestone 3).
          </p>
        </div>

        {/* Individual Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl hover:shadow-emerald-500/10"
            >
              <div>
                {/* Individual Member Portrait Image Container */}
                <div className="relative rounded-2xl overflow-hidden mb-5 bg-slate-900 border border-white/10 aspect-square group-hover:border-emerald-500/30 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {member.regNo}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-slate-400 mb-4">{member.role}</div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">Department of Computer Engineering</span>
                <a
                  href={member.cnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500 hover:text-cluck-navy text-slate-300 transition-all"
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
