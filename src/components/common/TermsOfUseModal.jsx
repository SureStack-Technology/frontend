import React from 'react';
import { X, Play } from 'lucide-react';
import { client } from "../../sanity.js";


const PortableText = ({ blocks }) => {
  return blocks.map((block, i) => (
    <p key={i} className="text-white leading-relaxed">
      {block.children.map((child, j) => (
        <span key={j}><Play size={12} className='inline'/> {child.text}</span>
      ))}
    </p>
  ));
};

const TermsOfUseModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Terms of Use</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-6 text-slate-300">
            <p className="text-sm text-slate-400">Last Updated: October 9, 2025</p>
            
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
              <p>By accessing and using the RISK Protocol platform, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">2. Use of Service</h3>
              <p>RISK Protocol provides decentralized cryptocurrency risk assessment services. You agree to use the service only for lawful purposes and in accordance with these Terms of Use.</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>You must be at least 18 years old to use this service</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree not to use the service for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">3. Risk Assessment Disclaimer</h3>
              <p>The risk assessments provided by RISK Protocol are for informational purposes only and should not be considered as financial advice. Cryptocurrency investments carry inherent risks, and past performance does not guarantee future results.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">4. Validator Responsibilities</h3>
              <p>If you participate as a validator, you agree to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Provide accurate and honest risk assessments</li>
                <li>Maintain the minimum required stake</li>
                <li>Comply with all validator requirements and protocols</li>
                <li>Accept the risk of slashing for poor performance</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h3>
              <p>The RISK Protocol platform and its original content, features, and functionality are owned by RISK Protocol and are protected by international copyright, trademark, and other intellectual property laws.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h3>
              <p>RISK Protocol shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">7. Changes to Terms</h3>
              <p>We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform. Continued use of the service after such modifications constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">8. Governing Law</h3>
              <p>These Terms shall be governed by and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">9. Contact Information</h3>
              <p>For questions about these Terms of Use, please contact us at:</p>
              <p className="mt-2">Email: hello@surestack.tech</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUseModal;