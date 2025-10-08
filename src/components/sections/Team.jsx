import React, { useState, useEffect } from 'react';
import TeamMemberModal from '../common/TeamMemberModal';
import { client } from "../../sanity.js";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source)
}

// Modularized team member card
const TeamMemberCard = ({ member, onClick }) => (
    <div onClick={() => onClick(member)}
        className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition cursor-pointer">
        {member.image ?
        <img src={urlFor(member.image).url()} alt={member.name} className="w-full h-64 object-cover" /> : 
        <img src={"https://ui-avatars.com/api/?name="+member.name} alt={member.name} className="w-full h-64 object-cover" />}
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


const TEAM_QUERY = `*[_type == "author"]|order(sequence asc)`;
const options = { next: { revalidate: 30 } };

const Team = () => {

    const [selectedMember, setSelectedMember] = useState(null);

    const [postData, setPost] = useState([]);
  
    useEffect(() => {
        client
            .fetch(TEAM_QUERY, {}, options)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

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
          {postData.map((member, index) => (
            <TeamMemberCard key={index} member={member} onClick={setSelectedMember} />
          ))}
        </div>

        {/* Modal is conditionally rendered using the new component */}
        <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      </div>
    </section>
  );
};

export default Team;