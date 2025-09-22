import React from 'react'

const AppSubmission = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">App Store Submission Checklist for Mosaic AI Story Maker</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: September 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Required Documents Checklist</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">✅ Privacy Policy</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>File</strong>: PRIVACY_POLICY.md</li>
            <li className="mb-1"><strong>Status</strong>: Complete</li>
            <li className="mb-1"><strong>URL Required</strong>: [Your Privacy Policy URL]</li>
            <li className="mb-1"><strong>Content</strong>: Comprehensive privacy policy covering data collection, usage, children's privacy (COPPA), and user rights</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">✅ Terms and Conditions</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>File</strong>: TERMS_AND_CONDITIONS.md</li>
            <li className="mb-1"><strong>Status</strong>: Complete</li>
            <li className="mb-1"><strong>Content</strong>: Complete terms covering user agreements, acceptable use, subscription terms, and liability limitations</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">✅ Copyright Information</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>File</strong>: COPYRIGHT_INFORMATION.md</li>
            <li className="mb-1"><strong>Status</strong>: Complete</li>
            <li className="mb-1"><strong>Content</strong>: Copyright notices, third-party licenses, content rights, and DMCA compliance information</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">✅ Content Rights Information</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>File</strong>: CONTENT_RIGHTS_INFORMATION.md</li>
            <li className="mb-1"><strong>Status</strong>: Complete</li>
            <li className="mb-1"><strong>Content</strong>: Content ownership, usage rights, licensing information, and dispute resolution procedures</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">✅ Age Rating Content Descriptions</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>File</strong>: AGE_RATING_CONTENT_DESCRIPTIONS.md</li>
            <li className="mb-1"><strong>Status</strong>: Complete</li>
            <li className="mb-1"><strong>Rating</strong>: 4+ (Suitable for All Ages)</li>
            <li className="mb-1"><strong>Content</strong>: Detailed content descriptions for all Apple content categories with "None" frequency</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">✅ App Store Listing Content</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>File</strong>: APP_STORE_LISTING.md</li>
            <li className="mb-1"><strong>Status</strong>: Complete</li>
            <li className="mb-1"><strong>Content</strong>: App description, keywords, pricing information, and marketing copy</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">App Store Connect Requirements</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">App Information</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>App Name</strong>: Mosaic AI Story Maker</li>
            <li className="mb-1"><strong>Subtitle</strong>: Create Magical Stories for Kids with AI</li>
            <li className="mb-1"><strong>Bundle ID</strong>: com.gitcuber369rn.Mosaic</li>
            <li className="mb-1"><strong>Category</strong>: Books (Primary), Education (Secondary)</li>
            <li className="mb-1"><strong>Age Rating</strong>: 4+</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Pricing and Availability</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Free Tier</strong>: 30 listening credits, 5 generation credits per month</li>
            <li className="mb-1"><strong>Premium Monthly</strong>: $4.99/month - Unlimited listening, 30 generations</li>
            <li className="mb-1"><strong>Additional Credits</strong>: $2.99 for 10 extra generation credits</li>
            <li className="mb-1"><strong>Availability</strong>: Worldwide</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">App Privacy</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Data Collection</strong>: Yes</li>
            <li className="mb-1"><strong>Data Types</strong>: Name, Email, Usage Data, Audio Data</li>
            <li className="mb-1"><strong>Purpose</strong>: App Functionality, Analytics, Personalization</li>
            <li className="mb-1"><strong>Third-Party Sharing</strong>: Yes (Stripe, OpenAI, Google)</li>
            <li className="mb-1"><strong>Privacy Policy URL</strong>: [Required - Add your URL]</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content Rights</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Copyright Information</strong>: Complete</li>
            <li className="mb-1"><strong>Content Rights</strong>: Complete</li>
            <li className="mb-1"><strong>Third-Party Content</strong>: Properly licensed</li>
            <li className="mb-1"><strong>User-Generated Content</strong>: Covered in terms</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Age Rating</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Rating</strong>: 4+ (Suitable for All Ages)</li>
            <li className="mb-1"><strong>Content Descriptions</strong>: All categories marked as "None"</li>
            <li className="mb-1"><strong>Content Review</strong>: Completed and documented</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Technical Requirements</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">App Store Guidelines Compliance</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">✅ Follows Apple App Store Review Guidelines</li>
            <li className="mb-1">✅ Appropriate content for all ages</li>
            <li className="mb-1">✅ Clear privacy policy and terms of service</li>
            <li className="mb-1">✅ Proper age rating and content descriptions</li>
            <li className="mb-1">✅ No prohibited content or functionality</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Privacy and Security</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">✅ COPPA compliance for children's privacy</li>
            <li className="mb-1">✅ GDPR compliance for international users</li>
            <li className="mb-1">✅ Secure data handling and storage</li>
            <li className="mb-1">✅ Clear data collection and usage policies</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content and Rights</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">✅ All content properly licensed</li>
            <li className="mb-1">✅ Clear copyright and trademark information</li>
            <li className="mb-1">✅ Appropriate content for target audience</li>
            <li className="mb-1">✅ Content moderation and safety measures</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Submission Steps</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Upload App Binary</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Build and upload your app to App Store Connect</li>
            <li className="mb-1">Ensure all technical requirements are met</li>
            <li className="mb-1">Test on various devices and iOS versions</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Complete App Information</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Fill in all required app information</li>
            <li className="mb-1">Upload screenshots and app preview video</li>
            <li className="mb-1">Set pricing and availability</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. App Privacy Section</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Complete the App Privacy questionnaire</li>
            <li className="mb-1">Provide detailed information about data collection</li>
            <li className="mb-1">Link to your privacy policy</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Content Rights Information</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Upload copyright information</li>
            <li className="mb-1">Provide content rights details</li>
            <li className="mb-1">Complete content rights questionnaire</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Age Rating</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Complete age rating questionnaire</li>
            <li className="mb-1">Provide content descriptions for all categories</li>
            <li className="mb-1">Ensure rating is appropriate for your content</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Review and Submit</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Review all information for accuracy</li>
            <li className="mb-1">Ensure all required documents are complete</li>
            <li className="mb-1">Submit for App Store review</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Important Notes</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Privacy Policy URL</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">You must host your privacy policy on a publicly accessible URL</li>
            <li className="mb-1">The URL must be accessible from the App Store Connect</li>
            <li className="mb-1">Consider using GitHub Pages, your website, or a document hosting service</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content Rights</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Ensure all third-party content is properly licensed</li>
            <li className="mb-1">Document all open source components and their licenses</li>
            <li className="mb-1">Have clear agreements with all service providers</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Age Rating</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Your app is rated 4+ which is appropriate for your content</li>
            <li className="mb-1">All content descriptions are marked as "None" frequency</li>
            <li className="mb-1">This rating allows your app to be downloaded by users of all ages</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">App Store Review</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Apple typically reviews apps within 24-48 hours</li>
            <li className="mb-1">Be prepared to respond to any review feedback</li>
            <li className="mb-1">Ensure your app functions properly and meets all guidelines</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Contact Information</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">App Store Connect Support</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Use Apple's App Store Connect support for technical issues</li>
            <li className="mb-1">Contact Apple Developer Support for account issues</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Legal and Compliance</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Privacy Policy</strong>: <a href="mailto:support@mosaicai.in" className="text-blue-600 hover:text-blue-800 underline">support@mosaicai.in</a></li>
            <li className="mb-1"><strong>Content Rights</strong>: <a href="mailto:support@mosaicai.in" className="text-blue-600 hover:text-blue-800 underline">support@mosaicai.in</a></li>
            <li className="mb-1"><strong>Legal</strong>: <a href="mailto:support@mosaicai.in" className="text-blue-600 hover:text-blue-800 underline">support@mosaicai.in</a></li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Technical Support</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>App Support</strong>: <a href="mailto:support@mosaicai.in" className="text-blue-600 hover:text-blue-800 underline">support@mosaicai.in</a></li>
            <li className="mb-1"><strong>Developer</strong>: [Your Developer Contact]</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Next Steps</h2>
          
          <ol className="list-decimal pl-6 mb-6 text-black">
            <li className="mb-2"><strong>Host Privacy Policy</strong>: Upload your privacy policy to a publicly accessible URL</li>
            <li className="mb-2"><strong>Review Documents</strong>: Double-check all documents for accuracy and completeness</li>
            <li className="mb-2"><strong>Test App</strong>: Ensure your app works properly on all target devices</li>
            <li className="mb-2"><strong>Submit for Review</strong>: Complete all App Store Connect requirements and submit</li>
            <li className="mb-2"><strong>Monitor Review</strong>: Check for any feedback from Apple's review team</li>
            <li className="mb-2"><strong>Respond to Feedback</strong>: Address any issues or questions from Apple</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Success Criteria</h2>
          
          <p className="mb-3 text-black font-semibold">Your app submission will be successful when:</p>
          <ul className="list-disc pl-6 mb-6 text-black">
            <li className="mb-1">✅ All required documents are complete and accurate</li>
            <li className="mb-1">✅ App passes Apple's technical review</li>
            <li className="mb-1">✅ Content is appropriate for the stated age rating</li>
            <li className="mb-1">✅ Privacy policy is accessible and comprehensive</li>
            <li className="mb-1">✅ All legal requirements are met</li>
            <li className="mb-1">✅ App functions properly on all target devices</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Ready for App Store Submission!</h3>
              <p className="text-green-700 font-semibold">All requirements completed ✅</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mosaic AI Story Maker</h3>
              <p className="text-sm text-gray-600 mb-2 italic">Creating magical stories for children through AI technology</p>
              <p className="text-sm text-gray-600 font-semibold">App Store Submission Checklist © 2025 Mosaic AI Story Maker. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppSubmission