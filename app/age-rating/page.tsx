import React from 'react'

const AgeRating = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Age Rating Content Descriptions for Mosaic AI Story Maker</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: September 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-2">App Store Age Rating: 4+ (Suitable for All Ages)</h2>
            <p className="text-green-700">Mosaic AI Story Maker is designed to be a family-friendly application suitable for users of all ages, with particular focus on creating content appropriate for children.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Content Descriptions and Frequency</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Cartoon or Fantasy Violence</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">None</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app contains no violent content. All stories are designed to be educational, entertaining, and age-appropriate for children. Stories focus on positive themes such as friendship, adventure, learning, and creativity.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">No fighting, weapons, or violent actions</li>
              <li className="mb-1">No scary or threatening characters</li>
              <li className="mb-1">No depictions of harm or danger</li>
              <li className="mb-1">All conflicts resolved through positive means</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Realistic Violence</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">None</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app contains no realistic violence. All content is fictional and designed for children's entertainment and education.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">No realistic depictions of violence</li>
              <li className="mb-1">No weapons or dangerous objects</li>
              <li className="mb-1">No scenes of conflict or harm</li>
              <li className="mb-1">No frightening or scary situations</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Prolonged Violence or Intense Violence</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">None</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app contains no prolonged or intense violence. All content is gentle and appropriate for young children.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">No extended violent sequences</li>
              <li className="mb-1">No intense or graphic content</li>
              <li className="mb-1">No prolonged conflict situations</li>
              <li className="mb-1">No disturbing or upsetting material</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Sexual Content or Nudity</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">None</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app contains no sexual content or nudity. All content is appropriate for children and families.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">No sexual references or content</li>
              <li className="mb-1">No nudity or suggestive imagery</li>
              <li className="mb-1">No inappropriate relationships</li>
              <li className="mb-1">No adult themes or content</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Profanity or Crude Humor</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">None</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app contains no profanity or crude humor. All language is appropriate for children and educational in nature.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">No profane or offensive language</li>
              <li className="mb-1">No crude jokes or humor</li>
              <li className="mb-1">No inappropriate references</li>
              <li className="mb-1">All dialogue is child-friendly</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Alcohol, Tobacco, or Drug Use or References</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">None</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app contains no references to alcohol, tobacco, or drugs. All content promotes healthy, positive lifestyle choices.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">No alcohol references</li>
              <li className="mb-1">No tobacco or smoking references</li>
              <li className="mb-1">No drug use or references</li>
              <li className="mb-1">No substance abuse content</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7. Mature or Suggestive Themes</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">None</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app contains no mature or suggestive themes. All content is designed for children and families.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">No adult themes or situations</li>
              <li className="mb-1">No suggestive content</li>
              <li className="mb-1">No mature storylines</li>
              <li className="mb-1">No inappropriate relationships</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8. Simulated Gambling</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">None</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app contains no gambling content. All features are educational and entertainment-focused.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">No gambling games or activities</li>
              <li className="mb-1">No betting or wagering</li>
              <li className="mb-1">No casino-style games</li>
              <li className="mb-1">No gambling references</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9. Horror or Fear Themes</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">None</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app contains no horror or fear themes. All content is designed to be comforting and educational for children.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">No scary characters or monsters</li>
              <li className="mb-1">No frightening situations</li>
              <li className="mb-1">No horror elements</li>
              <li className="mb-1">No fear-inducing content</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">10. Realistic Blood</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">None</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app contains no realistic blood or gore. All content is appropriate for children.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">No blood or gore</li>
              <li className="mb-1">No injuries or wounds</li>
              <li className="mb-1">No medical procedures</li>
              <li className="mb-1">No graphic content</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Positive Content Themes</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Educational Content</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-blue-600 font-semibold">Frequent</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app frequently includes educational content designed to help children learn and develop.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">Moral lessons and values</li>
              <li className="mb-1">Problem-solving skills</li>
              <li className="mb-1">Creativity and imagination</li>
              <li className="mb-1">Social skills and friendship</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Family-Friendly Themes</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-green-600 font-semibold">Constant</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: All content is designed to be appropriate for family viewing and sharing.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">Positive character development</li>
              <li className="mb-1">Uplifting storylines</li>
              <li className="mb-1">Educational messages</li>
              <li className="mb-1">Wholesome entertainment</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Creative Expression</h3>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
            <p className="mb-2 text-black"><strong>Frequency</strong>: <span className="text-purple-600 font-semibold">Constant</span></p>
            <p className="mb-3 text-black"><strong>Description</strong>: The app encourages creative expression and imagination in children.</p>
            <p className="mb-2 text-black font-semibold">Content Examples:</p>
            <ul className="list-disc pl-6 text-black">
              <li className="mb-1">Story creation and customization</li>
              <li className="mb-1">Character development</li>
              <li className="mb-1">Creative problem-solving</li>
              <li className="mb-1">Artistic expression</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Content Moderation</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">AI Content Filtering</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">All AI-generated content is filtered for age-appropriateness</li>
            <li className="mb-1">Automated screening for inappropriate language or themes</li>
            <li className="mb-1">Regular updates to content filtering algorithms</li>
            <li className="mb-1">Human review of flagged content</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">User-Generated Content</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">User input is monitored for appropriateness</li>
            <li className="mb-1">Inappropriate content is automatically rejected</li>
            <li className="mb-1">Clear guidelines for acceptable content</li>
            <li className="mb-1">Regular review of user-generated material</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content Review Process</h3>
          <ol className="list-decimal pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Automated Screening</strong>: AI-powered content filtering</li>
            <li className="mb-1"><strong>Human Review</strong>: Manual review of flagged content</li>
            <li className="mb-1"><strong>Community Reporting</strong>: User reporting system</li>
            <li className="mb-1"><strong>Regular Audits</strong>: Ongoing content quality checks</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Safety Features</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Parental Controls</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Account creation requires adult supervision</li>
            <li className="mb-1">Parents can review and approve content</li>
            <li className="mb-1">Usage monitoring and reporting</li>
            <li className="mb-1">Content filtering options</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Child Safety</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">No personal information collection from children</li>
            <li className="mb-1">Safe sharing features</li>
            <li className="mb-1">Privacy protection measures</li>
            <li className="mb-1">Age-appropriate content only</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content Guidelines</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Clear content creation guidelines</li>
            <li className="mb-1">Educational focus on positive themes</li>
            <li className="mb-1">Regular content updates and improvements</li>
            <li className="mb-1">Community standards enforcement</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Age Appropriateness</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Target Audience</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Primary</strong>: Children ages 4-12</li>
            <li className="mb-1"><strong>Secondary</strong>: Parents and caregivers</li>
            <li className="mb-1"><strong>Tertiary</strong>: Educators and families</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content Suitability</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">All content appropriate for ages 4+</li>
            <li className="mb-1">Educational value for all age groups</li>
            <li className="mb-1">Family-friendly entertainment</li>
            <li className="mb-1">Safe for unsupervised use by children</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Developmental Benefits</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Encourages reading and literacy</li>
            <li className="mb-1">Promotes creativity and imagination</li>
            <li className="mb-1">Teaches problem-solving skills</li>
            <li className="mb-1">Builds social and emotional skills</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Compliance and Standards</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">International Standards</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">COPPA compliance (Children's Online Privacy Protection Act)</li>
            <li className="mb-1">GDPR compliance for international users</li>
            <li className="mb-1">Local content regulations compliance</li>
            <li className="mb-1">Industry best practices adherence</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content Standards</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Educational content standards</li>
            <li className="mb-1">Child safety guidelines</li>
            <li className="mb-1">Family-friendly content policies</li>
            <li className="mb-1">Positive messaging requirements</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Regular Reviews</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1">Quarterly content audits</li>
            <li className="mb-1">Annual age rating reviews</li>
            <li className="mb-1">Ongoing compliance monitoring</li>
            <li className="mb-1">Regular updates to content policies</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">Contact Information</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content Concerns</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Email</strong>: <a href="mailto:support@mosaicai.in" className="text-blue-600 hover:text-blue-800 underline">support@mosaicai.in</a></li>
            <li className="mb-1"><strong>Support</strong>: Available through the app</li>
            <li className="mb-1"><strong>Response Time</strong>: 24-48 hours</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Age Rating Questions</h3>
          <ul className="list-disc pl-6 mb-4 text-black">
            <li className="mb-1"><strong>Email</strong>: <a href="mailto:support@mosaicai.in" className="text-blue-600 hover:text-blue-800 underline">support@mosaicai.in</a></li>
            <li className="mb-1"><strong>Legal</strong>: <a href="mailto:support@mosaicai.in" className="text-blue-600 hover:text-blue-800 underline">support@mosaicai.in</a></li>
          </ul>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Age Rating: 4+ (Suitable for All Ages)</h3>
              <p className="text-green-700 font-semibold">Safe, educational, and family-friendly content for everyone</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mosaic AI Story Maker</h3>
              <p className="text-sm text-gray-600 mb-2 italic">Creating magical stories for children through AI technology</p>
              <p className="text-sm text-gray-600 font-semibold">Age Rating Content Descriptions © 2025 Mosaic AI Story Maker. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgeRating