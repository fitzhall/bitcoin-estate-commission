import { Hero } from '@/components/home/Hero'
import { AuthoritySignals } from '@/components/home/AuthoritySignals'
import { ValuePillars } from '@/components/home/ValuePillars'
import { StorySection } from '@/components/home/StorySection'
import { PathSelection } from '@/components/home/PathSelection'
import { RecentDevelopments } from '@/components/home/RecentDevelopments'
import { TrustIndicators } from '@/components/home/TrustIndicators'
import { FinalCTA } from '@/components/home/FinalCTA'
import { OrganizationSchema } from '@/components/SchemaMarkup'

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <Hero />
      {/* Content updated with truth-based messaging - v3 */}
      <AuthoritySignals />
      <ValuePillars />
      <StorySection />
      <PathSelection />
      <RecentDevelopments />
      <TrustIndicators />
      <FinalCTA />
    </>
  )
}