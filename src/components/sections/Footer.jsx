import React, { useState } from "react";
import { X, Shield, Twitter, Github, Linkedin } from 'lucide-react';

// Modularized Footer Link Column
const FooterLinkColumn = ({ title, links }) => (
    <div>
        <h3 className="text-white font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href} className="text-slate-400 hover:text-cyan-400 text-sm">{link.label}</a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {

    const productLinks = [
        { href: "#features", label: "Features" },
        { href: "#", label: "Documentation" },
        { href: "#", label: "Whitepaper" },
    ];

    const companyLinks = [
        { href: "#team", label: "Team" },
        { href: "#blog", label: "Blog" },
        { href: "#contact", label: "Contact" },
    ];

    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    return (
        <>
        <footer className="bg-slate-950 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <Shield className="h-8 w-8 text-cyan-400" />
                            <span className="ml-2 text-xl font-bold text-white">Sure Stack RISK Protocol</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            The first crypto risk assessment platform with real-time volatility integration.
                        </p>
                    </div>

                    <FooterLinkColumn title="Product" links={productLinks} />
                    <FooterLinkColumn title="Company" links={companyLinks} />

                    {/* Connect Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-cyan-400"><Twitter /></a>
                            <a href="https://github.com/surestack" className="text-slate-400 hover:text-cyan-400"><Github /></a>
                            <a href="#" className="text-slate-400 hover:text-cyan-400"><Linkedin /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-400 text-sm">© 2025 SureStack. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <button onClick={() => setShowTerms(true)} 
                                className="text-slate-400 hover:text-cyan-400 text-sm">
                            Terms of Use
                        </button>
                        <button onClick={() => setShowPrivacy(true)}
                                className="text-slate-400 hover:text-cyan-400 text-sm">
                            Privacy Policy
                        </button>
                    </div>
                </div>
            </div>
        </footer>

        {/* Terms of Use Modal */}
        {showTerms && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setShowTerms(false)}>
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Terms of Use</h2>
                <button onClick={() => setShowTerms(false)} className="text-slate-400 hover:text-white">
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
      )}

        {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setShowPrivacy(false)}>
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
                <button onClick={() => setShowPrivacy(false)} className="text-slate-400 hover:text-white">
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
      )}
      </>
    )
}

export default Footer;