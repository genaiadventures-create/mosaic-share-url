import React from 'react'

function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
      <p className="text-sm text-gray-600 mb-8">Last Updated: September 19, 2025</p>
      
      <div className="prose prose-gray max-w-none">
        <p className="mb-6">
          These Terms and Conditions ("Terms") govern your use of the Mosaic AI Story Maker mobile application (the "App"). 
          The App is provided by [Your Name/Developer Name] ("we," "us," or "our").
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
        <p className="mb-4">
          Mosaic is an AI-powered mobile application that creates on-demand, age-appropriate stories for children. The App uses artificial intelligence to generate custom stories based on user inputs including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Age-group, gender</li>
          <li>Story character or plot</li>
          <li>Story style and audio voice preferences</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Age Restrictions and Parental Consent</h2>
        
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">3.1 Minimum Age Requirements</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Users must be at least 13 years old to create an account.</li>
          <li>Children under 13 may use the App only under direct parental supervision.</li>
          <li>Parents and guardians are responsible for monitoring their children's use of the App.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">3.2 Parental Responsibility</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Parents/guardians must provide consent for children under 13 to use the App.</li>
          <li>Parents/guardians are responsible for reviewing all generated content before sharing with children.</li>
          <li>Parents/guardians must ensure appropriate supervision during App usage.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">3.3 Content Appropriateness</h3>
        <p className="mb-4">
          All generated content is designed to be age-appropriate for children aged 3-12. Content is filtered and moderated to ensure child safety.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. User Accounts and Registration</h2>
        
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">4.1 Account Creation</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Users must provide accurate and complete information during registration.</li>
          <li>Users are responsible for maintaining the confidentiality of their account credentials.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">4.2 Account Security</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Users are responsible for all activities that occur under their account.</li>
          <li>Users must notify us immediately of any unauthorized use of their account.</li>
          <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Content and Intellectual Property</h2>
        
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">5.1 User-Generated Content</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Users are expected to use this app for its intended purpose only, which is generating kid-friendly stories that are positive and uplifting.</li>
          <li>Users retain ownership of their personal information and preferences they provide.</li>
          <li>You acknowledge that while you provide the creative inputs, all AI-generated content ("Story") is the property of Mosaic AI Story Maker. By default, all Stories you generate are accessible to other Mosaic users to help build a shared community library. You grant us the right and license to store, process, display, and distribute these Stories to ensure the proper functionality of the App.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">5.2 AI-Generated Content</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>"Story" here refers to all assets related to the story, e.g., text, image, audio, video.</li>
          <li>Stories are generated using artificial intelligence and may not be unique.</li>
          <li>Users may not claim ownership of AI-generated story content.</li>
          <li>We do not guarantee the originality or uniqueness of generated content.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Payment and Subscription Terms</h2>
        
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">6.1 Free Tier</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>New users receive some free story generation credits and free credits to read/listen to stories generated by other users.</li>
          <li>Free credits are provided as a one-time benefit and do not renew.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">6.2 Premium Subscription</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Premium users on a monthly subscription receive additional story generation credits per month and unlimited access to stories created by other users.</li>
          <li>Subscriptions automatically renew unless cancelled.</li>
          <li>At the end of each monthly billing cycle, a maximum of 10 unused story generation credits will be carried over to the next month. Any credits in excess of 10 will expire.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">6.3 One-Time Purchases</h3>
        <p className="mb-4">Available to premium subscribers to purchase additional story generation credits.</p>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">6.4 Payment Processing</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Payments are processed through Stripe.</li>
          <li>All payments are final and non-refundable unless required by law.</li>
          <li>Users are responsible for any applicable taxes.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">6.5 Subscription Management</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Users can cancel their subscription at any time through their account settings.</li>
          <li>Cancellation takes effect at the end of the current billing period. Please note that deleting the App from your device does not automatically cancel your subscription.</li>
          <li>No refunds are provided for unused portions of subscription periods.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Privacy and Data Protection</h2>
        <p className="mb-4">
          Our data collection and use practices are described in our Privacy Policy, which is incorporated into these Terms by reference.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Prohibited Uses</h2>
        <p className="mb-2">Users may not:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Use the App for any illegal or unauthorized purpose.</li>
          <li>Interfere with or disrupt the App's functionality.</li>
          <li>Create inappropriate or harmful content.</li>
          <li>Use the App to harm or exploit children.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Third-Party Services</h2>
        <p className="mb-4">
          The App integrates with third-party services, including OpenAI, Google Gemini, Stripe, Google Sign-In, Apple Sign-In, and Cloudinary. Use of these services is subject to their respective terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Disclaimers and Limitations</h2>
        
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">10.1 Service Availability</h3>
        <p className="mb-4">
          We do not guarantee uninterrupted access to the App. The App may be temporarily unavailable for maintenance or updates.
        </p>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">10.2 Content Accuracy</h3>
        <p className="mb-4">
          AI-generated content may contain errors or inaccuracies. While we implement safety filters and instruct the AI to generate age-appropriate content, you acknowledge that generative AI may produce unexpected, inaccurate, or potentially offensive content.
        </p>
        <p className="mb-4">
          You agree to review all content before sharing it with children and use the App at your own risk.
        </p>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">10.3 Limitation of Liability</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Our liability is limited to the maximum extent permitted by law. We are not liable for any indirect, incidental, or consequential damages.</li>
          <li>Our total liability shall not exceed the amount paid by the user in the 12 months preceding the claim.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold me (the developer of Mosaic AI Story Maker) harmless from any claims, damages, or expenses arising from your use of the App, your violation of these Terms, or your violation of any third-party rights.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Termination</h2>
        
        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">12.1 User Termination</h3>
        <p className="mb-4">
          Users can delete their account through the App settings. Account deletion might result in the permanent loss of all data and pending credits.
        </p>

        <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">12.2 Our Right to Terminate</h3>
        <p className="mb-4">
          We may suspend or terminate accounts that violate these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms from time to time. Users will be notified of significant changes, and continued use of the App constitutes acceptance of updated Terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Governing Law</h2>
        <p className="mb-4 bg-yellow-100 p-3 rounded border">
          <strong>[MISSING INFORMATION]</strong> These Terms are governed by the laws of [Your State, Your Country] without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts of [Your State, Your Country].
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
        <p className="mb-4">
          For questions about these Terms, please contact us at: <a href="mailto:support@mosaicai.in" className="text-blue-600 hover:text-blue-800 underline">support@mosaicai.in</a>.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">16. Entire Agreement</h2>
        <p className="mb-4">
          These Terms, together with our Privacy Policy, constitute the entire agreement between you and the developer of Mosaic AI Story Maker regarding the use of the App.
        </p>
      </div>
    </div>
  )
}

export default TermsAndConditions