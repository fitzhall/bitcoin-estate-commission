import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Bitcoin Estate Planning Commission',
  description: 'Terms of service for using the Bitcoin Estate Planning Commission website and services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <p className="mb-6">
              These Terms of Service ("Terms") govern your use of the Bitcoin Estate Planning Commission website located at bitcoinestatecommission.org (the "Site") and all related services provided by the Bitcoin Estate Planning Commission ("BEPC," "we," "us," or "our").
            </p>

            <p className="mb-6">
              By accessing or using our Site and services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Site or services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Professional Disclaimers</h2>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Important Legal Disclaimers</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>No Legal Advice:</strong> The information provided on this Site is for general informational and educational purposes only and does not constitute legal, tax, or financial advice.</li>
                <li><strong>No Attorney-Client Relationship:</strong> Use of this Site or communication with BEPC does not create an attorney-client relationship.</li>
                <li><strong>No Professional Relationship:</strong> BEPC is not a law firm and does not provide legal services.</li>
                <li><strong>Consult Professionals:</strong> Always consult with qualified legal, tax, and financial professionals before making decisions about estate planning or cryptocurrency management.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Site and Services</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Eligibility</h3>
            <p className="mb-4">
              You must be at least 18 years old to use our Site and services. By using our Site, you represent and warrant that you meet this age requirement.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Acceptable Use</h3>
            <p className="mb-4">You agree to use our Site and services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit harmful code or malware</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Collect or harvest user information without permission</li>
              <li>Use our services for fraudulent or deceptive purposes</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property Rights</h2>
            <p className="mb-4">
              All content on this Site, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of BEPC or its content suppliers and is protected by United States and international copyright laws.
            </p>
            
            <p className="mb-4">
              You may download or print materials from the Site for personal, non-commercial use only, provided you maintain all copyright and other proprietary notices.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Certification Program</h2>
            <p className="mb-4">
              Participation in the BEPC certification program is subject to additional terms and conditions, including eligibility requirements, fees, and ongoing compliance obligations. Certification does not guarantee any specific outcomes or results.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Attorney Directory</h2>
            <p className="mb-4">
              Attorneys listed in our directory are independent professionals. BEPC does not endorse, recommend, or guarantee the services of any attorney. Users should conduct their own due diligence when selecting professional services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. User Content</h2>
            <p className="mb-4">
              By submitting content to our Site, you grant BEPC a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Privacy</h2>
            <p className="mb-4">
              Your use of our Site is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimers and Limitations of Liability</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Disclaimer of Warranties</h3>
              <p className="mb-4 uppercase">
                THE SITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
              <p className="uppercase">
                IN NO EVENT SHALL BEPC, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR SERVICES.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless BEPC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of your use of the Site or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Third-Party Links and Services</h2>
            <p className="mb-4">
              Our Site may contain links to third-party websites or services. We are not responsible for the content, accuracy, or practices of these third parties. Your use of third-party websites is at your own risk.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Modifications to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page. Your continued use of the Site after such modifications constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access to our Site and services immediately, without prior notice or liability, for any reason, including breach of these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">13. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in Delaware.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">14. Dispute Resolution</h2>
            <p className="mb-4">
              Any dispute arising out of or relating to these Terms or the Site shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">15. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">16. Entire Agreement</h2>
            <p className="mb-4">
              These Terms constitute the entire agreement between you and BEPC regarding the use of the Site and services, superseding any prior agreements.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">17. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="mb-2"><strong>Bitcoin Estate Planning Commission</strong></p>
              <p className="mb-2">Email: legal@bitcoinestatecommission.org</p>
              <p>Website: bitcoinestatecommission.org</p>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> These terms of service are provided as a template and should be reviewed by legal counsel to ensure compliance with applicable laws and regulations in your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}