import React from 'react';
import { X, Check, Play, Linkedin } from 'lucide-react';
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

const PrivacyPolicyModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-6 text-slate-300">
            <p className="text-sm text-slate-400">Last Updated: October 9, 2025</p>
            
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h3>
              <p>RISK Protocol collects information to provide and improve our services:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li><strong>Account Information:</strong> Email address, username, and authentication credentials</li>
                <li><strong>Transaction Data:</strong> Blockchain addresses and transaction history for risk assessment</li>
                <li><strong>Usage Data:</strong> How you interact with our platform, including API calls and feature usage</li>
                <li><strong>Device Information:</strong> Browser type, IP address, and device identifiers</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h3>
              <p>We use the collected information for:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Providing risk assessment services</li>
                <li>Improving and personalizing user experience</li>
                <li>Communicating with you about service updates and changes</li>
                <li>Detecting and preventing fraud and abuse</li>
                <li>Complying with legal obligations and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">3. Data Security</h3>
              <p>We implement industry-standard security measures to protect your data:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>End-to-end encryption for sensitive data</li>
                <li>Secure storage with regular backups</li>
                <li>Multi-factor authentication options</li>
                <li>Regular security audits and penetration testing</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">4. Data Sharing and Disclosure</h3>
              <p>We do not sell your personal information. We may share your data only in the following circumstances:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li><strong>Service Providers:</strong> Third-party services that help us operate our platform</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>With Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">5. Blockchain Transparency</h3>
              <p>Please note that blockchain transactions are public by nature. While we protect your account information, on-chain activities may be visible to anyone on the blockchain network.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">6. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Object to processing of your personal information</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">7. Cookies and Tracking</h3>
              <p>We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings, though this may affect functionality.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">8. International Data Transfers</h3>
              <p>Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">9. Data Retention</h3>
              <p>We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Blockchain data is permanent and cannot be deleted.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">10. Children's Privacy</h3>
              <p>Our service is not intended for users under 18 years of age. We do not knowingly collect information from children.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">11. Changes to Privacy Policy</h3>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">12. Contact Us</h3>
              <p>For questions about this Privacy Policy or to exercise your rights, please contact us at:</p>
              <p className="mt-2">Email: hello@surestack.tech</p>
              <p>Address: RISK Protocol Foundation, Zug, Switzerland</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;