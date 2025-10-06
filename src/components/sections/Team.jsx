// src/components/sections/Team.jsx
import React, { useState } from 'react';
import TeamMemberModal from '../common/TeamMemberModal';

// Modularized team member card
const TeamMemberCard = ({ member, onClick }) => (
  <div
    onClick={() => onClick(member)}
    className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition cursor-pointer"
  >
    <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
      <p className="text-cyan-400 mb-3">{member.role}</p>
      <p className="text-slate-300 text-sm mb-4">{member.education}</p>
      <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
        View Full Profile →
      </button>
    </div>
  </div>
);

const teamMembersData = [
  // Keeping data outside the component for better separation/potential API call later
  {
    name: "Nese Unsal",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    education: "PhD Financial Engineering",
    experience: "15 years institutional risk management",
    highlights: [
      "VP Risk Management, Goldman Sachs (2010-2015)",
      "Head of Crypto Risk, Coinbase Institutional (2015-2020)",
      "Founded two successful fintech startups (exits: $50M, $120M)",
      "12 peer-reviewed papers on risk modelling"
    ],
    linkedin: "#"
  },
  {
    name: "Christian Tanner",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    education: "MS Computer Science",
    experience: "Senior blockchain engineer with expertise in DeFi protocols",
    highlights: [
      "Familiar with Chainlink and Compound Protocol",
      "Expert in oracle networks and DeFi infrastructure",
      "Previously developed blockchain solutions at two successful crypto startups",
      "Specialized in smart contract security and optimization"
    ],
    linkedin: "#"
  },
  {
    name: "Mark Berry",
    role: "Head of Risk Management",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    education: "CFA Charterholder",
    experience: "12 years in financial risk modelling and regulatory compliance",
    highlights: [
      "Held senior position in institutional risk management",
      "Expertise in crypto asset valuation and derivatives",
      "Specialized in credit risk and market risk analytics",
      "Published thought leader in crypto risk frameworks"
    ],
    linkedin: "#"
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="team" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Full transparency with verified credentials and proven track records
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembersData.map((member, index) => (
            <TeamMemberCard 
                key={index} 
                member={member} 
                onClick={setSelectedMember} 
            />
          ))}
        </div>

        {/* Modal is conditionally rendered using the new component */}
        <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      </div>
    </section>
  );
};

export default Team;