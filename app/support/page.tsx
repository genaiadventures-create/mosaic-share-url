import React from 'react'
import { marketingMetadata, pageJsonLdString } from '../marketing-seo'

export const metadata = marketingMetadata(
  '/support',
  'Support | Mosaic bedtime stories (app and ChatGPT)',
  'Get help with Mosaic: the mobile app and the Mosaic app in ChatGPT. Contact us, disconnect, or ask us to delete your data.',
)

const h2 = 'text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2'
const p = 'mb-4 text-black leading-relaxed'
const ul = 'list-disc pl-6 mb-4 text-black'
const a = 'text-blue-600 hover:text-blue-800 underline'

export default function Support() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pageJsonLdString('/support', 'Support') }} />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
        <nav aria-label="Site" className="text-sm text-gray-700 mb-6 flex gap-4">
          <a href="https://mosaicai.in/" className="underline">Mosaic home</a>
          <a href="https://mosaicai.in/privacy-policy" className="underline">Privacy policy</a>
          <a href="https://mosaicai.in/terms-and-conditions" className="underline">Terms</a>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Mosaic support</h1>

        <h2 className={h2}>Contact us</h2>
        <p className={p}>
          Email <a className={a} href="mailto:support@mosaicai.in">support@mosaicai.in</a>. Please say whether your question is about the mobile app or the Mosaic app in ChatGPT, and do not include passwords. We answer by email.
        </p>

        <h2 id="chatgpt" className={h2}>Mosaic in ChatGPT</h2>
        <p className={p}>
          Mosaic in ChatGPT is for parents and guardians who want a bedtime story for their child. Ask ChatGPT for a bedtime story with Mosaic.
        </p>
        <ul className={ul}>
          <li className="mb-1"><strong>Sample stories</strong>: ask for a sample or a surprise story. No sign-in is needed.</li>
          <li className="mb-1"><strong>Your own story</strong>: give your child&apos;s first name, a theme, and optionally a style. ChatGPT will ask you to connect Mosaic and sign in with Google on a Mosaic page. A signed-in account has a limited number of new stories per month, shown in the chat. Mosaic may also pause new stories for the day if it reaches its daily limit; samples keep working.</li>
          <li className="mb-1"><strong>Ask for the right thing</strong>: Mosaic only makes gentle bedtime stories. It does not ask for or use your child&apos;s age, school, address, or photos. Please do not type them into the chat for Mosaic.</li>
          <li className="mb-1"><strong>Not linked to the mobile app</strong>: a ChatGPT sign-in is a separate Mosaic account. It does not show your mobile app stories or subscription.</li>
        </ul>

        <h2 className={h2}>Disconnect Mosaic</h2>
        <p className={p}>
          In ChatGPT, open Settings, then Apps (or Connectors), choose Mosaic, and disconnect it. This stops Mosaic from acting on your behalf. It does not erase stored data; to do that, send a deletion request.
        </p>

        <h2 className={h2}>Delete your data</h2>
        <p className={p}>
          Email <a className={a} href="mailto:support@mosaicai.in?subject=Delete%20my%20Mosaic%20ChatGPT%20app%20data">support@mosaicai.in</a> from the email address you signed in with and write &quot;delete my Mosaic ChatGPT app data&quot;. We erase your account record, your email, your stories and their audio and images within 30 days and confirm by email. Mobile app accounts are deleted inside the mobile app or at <a className={a} href="https://mosaicai.in/delete-account">mosaicai.in/delete-account</a>. More detail is in the <a className={a} href="https://mosaicai.in/privacy-policy#chatgpt-app">privacy policy</a>.
        </p>

        <h2 className={h2}>Something wrong with a story</h2>
        <p className={p}>
          Stories are written by AI and are checked by automatic filters, not read by people before you see them. If a story seems unsuitable or has a mistake, email us with the title and what you saw, and we will look into it.
        </p>
      </div>
    </main>
  )
}
