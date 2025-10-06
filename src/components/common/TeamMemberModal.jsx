// src/components/common/TeamMemberModal.jsx
import React from 'react';
import { X, Check, Linkedin } from 'lucide-react';

const TeamMemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mr-6" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-lg mb-2">{member.role}</p>
                <p className="text-slate-300">{member.education}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <X />
            </button>
          </div>

          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3">Experience</h4>
            <p className="text-slate-300">{member.experience}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3">Key Highlights</h4>
            <ul className="space-y-2">
              {member.highlights.map((highlight, i) => (
                <li key={i} className="text-slate-300 flex items-start">
                  <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <a href={member.linkedin} className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
            <Linkedin className="w-5 h-5 mr-2" />
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;