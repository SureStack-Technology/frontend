import React from 'react';
import { X, Check, Play, Linkedin } from 'lucide-react';
import { client } from "../../sanity.js";
import imageUrlBuilder from '@sanity/image-url';
// import {PortableText} from '@portabletext/react';


const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source)
}

const PortableText = ({ blocks }) => {
  return blocks.map((block, i) => (
    <p key={i} className="text-white leading-relaxed">
      {block.children.map((child, j) => (
        <span key={j}><Play size={12} className='inline'/> {child.text}</span>
      ))}
    </p>
  ));
};

const TeamMemberModal = ({ member, onClose }) => {

  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              {member.image ?
              <img src={urlFor(member.image).url()} alt={member.name} className="w-24 h-24 rounded-full object-cover mr-6" /> : 
              <img src={"https://ui-avatars.com/api/?name="+member.name} alt={member.name} className="w-full h-64 object-cover" />}
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
            {member.bio && (<
              PortableText blocks={member.bio} />
            )}
          </div>

          {member.linkedIn && (
            <a href={member.linkedIn} target='_blank' className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
              <Linkedin className="w-5 h-5 mr-2" />
              View LinkedIn Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;