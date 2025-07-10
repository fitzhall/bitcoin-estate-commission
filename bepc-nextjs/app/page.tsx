import { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { AuthoritySignals } from '@/components/home/AuthoritySignals'
import { ValuePillars } from '@/components/home/ValuePillars'
import { StorySection } from '@/components/home/StorySection'
import { ExtendedContent } from '@/components/home/ExtendedContent'
import { PathSelection } from '@/components/home/PathSelection'
import { RecentDevelopments } from '@/components/home/RecentDevelopments'
import { TrustIndicators } from '@/components/home/TrustIndicators'
import { StateDirectory } from '@/components/home/StateDirectory'
import { FAQSection } from '@/components/home/FAQSection'
import { FinalCTA } from '@/components/home/FinalCTA'
import { OrganizationSchema } from '@/components/SchemaMarkup'
import { EmailCapture } from '@/components/EmailCapture'
import { AdvisoryCouncil } from '@/components/home/AdvisoryCouncil'

export const metadata: Metadata = {
  title: 'Bitcoin Estate Planning Commission | Professional Standards & Certification',
  description: 'The global authority for Bitcoin estate planning. Find certified attorneys, download professional standards, and protect your digital legacy with research-based protocols.',
  keywords: 'bitcoin estate planning, cryptocurrency inheritance, bitcoin trust, digital asset probate, BEPC certification, bitcoin attorney, KEEP protocol',
}

// Static generation with ISR for better performance
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <Hero />
      {/* Advisory Council section - new per PRD-01 */}
      <AdvisoryCouncil />
      {/* Content updated with truth-based messaging - v3 */}
      <AuthoritySignals />
      <ValuePillars />
      <StorySection />
      <ExtendedContent />
      <PathSelection />
      <RecentDevelopments />
      <TrustIndicators />
      <StateDirectory />
      <FAQSection />
      <FinalCTA />
    </>
  )
}