import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy for Mosaic AI Story Maker</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: September 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Introduction</h2>
          <p className="mb-6 text-black leading-relaxed">
            Mosaic AI Story Maker ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Name and Email</strong>: When you create an account or sign in using Google/Apple</li>
            <li className="mb-1"><strong>Child Information</strong>: Name, gender, age group, and hobbies for story personalization</li>
            <li className="mb-1"><strong>Profile Data</strong>: User preferences and settings</li>
            <li className="mb-1"><strong>Payment Information</strong>: Processed securely through Stripe (we do not store payment details)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Usage Information</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Story Content</strong>: AI-generated stories and user preferences</li>
            <li className="mb-1"><strong>App Usage</strong>: Features used, time spent, and interaction patterns</li>
            <li className="mb-1"><strong>Device Information</strong>: Device type, operating system, and app version</li>
            <li className="mb-1"><strong>Audio Data</strong>: Voice recordings for text-to-speech features (processed in real-time)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Log Data</strong>: App crashes, performance metrics, and error reports</li>
            <li className="mb-1"><strong>Analytics</strong>: Usage statistics and app performance data</li>
            <li className="mb-1"><strong>Cookies and Similar Technologies</strong>: For app functionality and personalization</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">How We Use Your Information</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Primary Uses</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Story Generation</strong>: Create personalized AI-generated stories for children</li>
            <li className="mb-1"><strong>Account Management</strong>: Maintain your user account and preferences</li>
            <li className="mb-1"><strong>App Functionality</strong>: Provide core features like story creation, sharing, and audio playback</li>
            <li className="mb-1"><strong>Payment Processing</strong>: Handle subscription and credit purchases through Stripe</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Secondary Uses</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Improvement</strong>: Enhance app features and user experience</li>
            <li className="mb-1"><strong>Support</strong>: Provide customer service and technical support</li>
            <li className="mb-1"><strong>Communication</strong>: Send important updates and notifications</li>
            <li className="mb-1"><strong>Analytics</strong>: Understand app usage patterns and optimize performance</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Information Sharing and Disclosure</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">We Do NOT Share Personal Information With:</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Third-party advertisers</li>
            <li className="mb-1">Data brokers</li>
            <li className="mb-1">Marketing companies</li>
            <li className="mb-1">Social media platforms (except when you explicitly choose to share)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">We May Share Information With:</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Service Providers</strong>: Trusted partners who help us operate the app (e.g., Stripe for payments, OpenAI for AI services)</li>
            <li className="mb-1"><strong>Legal Requirements</strong>: When required by law or to protect our rights</li>
            <li className="mb-1"><strong>Business Transfers</strong>: In case of merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Data Security</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Security Measures</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Encryption</strong>: All data is encrypted in transit and at rest</li>
            <li className="mb-1"><strong>Secure Storage</strong>: User data is stored on secure, encrypted servers</li>
            <li className="mb-1"><strong>Access Controls</strong>: Limited access to personal information on a need-to-know basis</li>
            <li className="mb-1"><strong>Regular Audits</strong>: Ongoing security assessments and updates</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Payment Security</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Payment processing handled by Stripe (PCI DSS compliant)</li>
            <li className="mb-1">We do not store credit card information</li>
            <li className="mb-1">All financial transactions are encrypted and secure</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Children's Privacy</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">COPPA Compliance</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">We do not knowingly collect personal information from children under 13</li>
            <li className="mb-1">Parents/guardians must create accounts and provide consent</li>
            <li className="mb-1">Child information is used solely for story personalization</li>
            <li className="mb-1">Parents can review, modify, or delete child information at any time</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Special Protections</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Child data is not used for advertising or marketing</li>
            <li className="mb-1">No behavioral tracking of children</li>
            <li className="mb-1">Limited data collection for essential app functionality only</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Data Retention</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How Long We Keep Data</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Account Information</strong>: Until account deletion or 2 years of inactivity</li>
            <li className="mb-1"><strong>Story Content</strong>: Until manually deleted by user or account closure</li>
            <li className="mb-1"><strong>Usage Data</strong>: Up to 2 years for analytics and improvement purposes</li>
            <li className="mb-1"><strong>Payment Records</strong>: As required by law (typically 7 years)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Data Deletion</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Users can delete their accounts and all associated data</li>
            <li className="mb-1">Deleted data is permanently removed from our systems</li>
            <li className="mb-1">Some data may be retained for legal compliance purposes</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Your Rights and Choices</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Access and Control</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>View Data</strong>: Access your personal information through the app</li>
            <li className="mb-1"><strong>Update Information</strong>: Modify your profile and preferences</li>
            <li className="mb-1"><strong>Delete Account</strong>: Remove your account and all associated data</li>
            <li className="mb-1"><strong>Data Portability</strong>: Request a copy of your data</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Communication Preferences</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Email Notifications</strong>: Opt out of promotional emails</li>
            <li className="mb-1"><strong>Push Notifications</strong>: Control app notifications in device settings</li>
            <li className="mb-1"><strong>Marketing Communications</strong>: Unsubscribe from marketing messages</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Third-Party Services</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Integrated Services</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Google Sign-In</strong>: Authentication and account creation</li>
            <li className="mb-1"><strong>Apple Sign-In</strong>: iOS authentication</li>
            <li className="mb-1"><strong>Stripe</strong>: Payment processing and subscription management</li>
            <li className="mb-1"><strong>OpenAI</strong>: AI story generation services</li>
            <li className="mb-1"><strong>Google Gemini</strong>: Enhanced AI capabilities</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Privacy Policies</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Google: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            <li className="mb-1">Apple: <a href="https://www.apple.com/privacy/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://www.apple.com/privacy/</a></li>
            <li className="mb-1">Stripe: <a href="https://stripe.com/privacy" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a></li>
            <li className="mb-1">OpenAI: <a href="https://openai.com/privacy" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://openai.com/privacy</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">International Data Transfers</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Data Processing Locations</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Your data may be processed in the United States and other countries</li>
            <li className="mb-1">We ensure appropriate safeguards for international transfers</li>
            <li className="mb-1">Data processing complies with applicable privacy laws</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Changes to This Privacy Policy</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Updates</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">We may update this Privacy Policy periodically</li>
            <li className="mb-1">Material changes will be communicated through the app or email</li>
            <li className="mb-1">Continued use of the app constitutes acceptance of updated terms</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Notification Methods</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">In-app notifications for significant changes</li>
            <li className="mb-1">Email notifications for material updates</li>
            <li className="mb-1">Updated policy posted on our website</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Contact Information</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Privacy Questions</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Email</strong>: <a href="mailto:support@mosaicai.in" className="text-blue-600 hover:text-blue-800 underline">support@mosaicai.in</a></li>
            <li className="mb-1"><strong>Support</strong>: Available through the app's support feature</li>
            <li className="mb-1"><strong>Address</strong>: [Your Business Address]</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Data Protection Officer</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Email</strong>: <a href="mailto:support@mosaicai.in" className="text-blue-600 hover:text-blue-800 underline">support@mosaicai.in</a></li>
            <li className="mb-1"><strong>Response Time</strong>: Within 30 days of inquiry</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Legal Basis for Processing (GDPR)</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Lawful Basis</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Consent</strong>: For optional features and marketing communications</li>
            <li className="mb-1"><strong>Contract Performance</strong>: For app functionality and service delivery</li>
            <li className="mb-1"><strong>Legitimate Interest</strong>: For app improvement and analytics</li>
            <li className="mb-1"><strong>Legal Obligation</strong>: For compliance with applicable laws</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">California Privacy Rights (CCPA)</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Your Rights</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Right to Know</strong>: What personal information we collect and how we use it</li>
            <li className="mb-1"><strong>Right to Delete</strong>: Request deletion of your personal information</li>
            <li className="mb-1"><strong>Right to Opt-Out</strong>: Opt out of the sale of personal information (we do not sell personal information)</li>
            <li className="mb-1"><strong>Right to Non-Discrimination</strong>: We will not discriminate against you for exercising your rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Additional State Privacy Rights</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Other Jurisdictions</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">We comply with applicable state privacy laws</li>
            <li className="mb-1">Additional rights may apply based on your location</li>
            <li className="mb-1">Contact us for information about your specific rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Effective Date</h2>
          <p className="mb-8 text-black leading-relaxed">
            This Privacy Policy is effective as of December 2024 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
          </p>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mosaic AI Story Maker</h3>
              <p className="text-sm text-gray-600 mb-2 italic">Creating magical stories for children through AI technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy