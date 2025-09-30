'use client'

import React from 'react'

const DeleteAccount = () => {
  const handleDeleteRequest = () => {
    const emailSubject = encodeURIComponent('Account Deletion Request - Mosaic AI Story Maker')
    const emailBody = encodeURIComponent(`Hello Mosaic AI Support Team,

I would like to request the deletion of my account and all associated data from Mosaic AI Story Maker.

Please process my account deletion request and confirm once completed.

Account Details:
- Email: [Please enter your account email here]
- Name: [Please enter your name here]
- Reason for deletion: [Optional - please specify if you'd like]

Thank you for your assistance.

Best regards,
[Your Name]`)

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@mosaicai.in&su=${emailSubject}&body=${emailBody}`
    
    window.open(gmailUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Account Deletion Request</h1>
          <p className="text-lg text-gray-600">Mosaic AI Story Maker</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-red-800 mb-3">⚠️ Important Information</h2>
            <p className="text-red-700 mb-2">Before requesting account deletion, please note that:</p>
            <ul className="list-disc pl-6 text-red-700 mb-4">
              <li className="mb-1">All your stories and data will be permanently deleted</li>
              <li className="mb-1">This action cannot be undone</li>
              <li className="mb-1">Active subscriptions will be canceled</li>
              <li className="mb-1">You will lose access to all premium features</li>
            </ul>
            <p className="text-red-700 font-semibold">Please make sure you have backed up any stories you want to keep!</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Request Account Deletion</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Step 1: Contact Support</h3>
            <p className="text-blue-700 mb-4">
              To delete your account, you need to send an email request to our support team. Click the button below to automatically open Gmail with a pre-filled deletion request email.
            </p>
            
            <div className="text-center">
              <button
                onClick={handleDeleteRequest}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Send Deletion Request Email
              </button>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Step 2: Complete the Email</h3>
            <p className="text-green-700 mb-2">After clicking the button above, you'll be redirected to Gmail with a pre-filled email. Please:</p>
            <ul className="list-disc pl-6 text-green-700">
              <li className="mb-1">Fill in your account email address</li>
              <li className="mb-1">Add your name</li>
              <li className="mb-1">Optionally, specify your reason for leaving</li>
              <li className="mb-1">Send the email to complete your request</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">Step 3: Confirmation</h3>
            <p className="text-yellow-700 mb-2">
              Our support team will process your request within 3-5 business days and send you a confirmation email once your account has been deleted.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Alternative Contact Method</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              If you prefer to use a different email client or have any issues with the button above, you can manually send an email to:
            </p>
            <div className="text-center bg-white border border-gray-300 rounded-lg p-4">
              <p className="text-lg font-bold text-gray-900">support@mosaicai.in</p>
              <p className="text-sm text-gray-600 mt-2">Subject: Account Deletion Request - Mosaic AI Story Maker</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Privacy & Data Protection</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Your Rights</h3>
            <ul className="list-disc pl-6 text-purple-700">
              <li className="mb-1">Right to data deletion under GDPR and CCPA</li>
              <li className="mb-1">Complete removal of personal information</li>
              <li className="mb-1">Secure deletion of all stored content</li>
              <li className="mb-1">Cancellation of active subscriptions</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Need Help?</h2>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
            <p className="text-indigo-700 mb-4">
              If you have any questions about the account deletion process or need assistance, please don't hesitate to contact our support team:
            </p>
            <ul className="list-disc pl-6 text-indigo-700">
              <li className="mb-1"><strong>Email</strong>: support@mosaicai.in</li>
              <li className="mb-1"><strong>Response Time</strong>: Within 24-48 hours</li>
              <li className="mb-1"><strong>Available</strong>: Monday - Friday, 9 AM - 5 PM</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mosaic AI Story Maker</h3>
              <p className="text-sm text-gray-600 mb-2 italic">We're sorry to see you go!</p>
              <p className="text-sm text-gray-600">If you change your mind, you can always create a new account in the future.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount