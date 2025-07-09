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

// Force static generation at build time - NO ISR
export const dynamic = 'force-static'
export const revalidate = false // Disable ISR completely

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <Hero />
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