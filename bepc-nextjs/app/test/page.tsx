export const dynamic = 'force-static'
export const revalidate = false

export default function TestPage() {
  return (
    <div>
      <h1>Simple Test Page</h1>
      <p>If you can see this, static generation is working.</p>
      <p>Generated at build time: {new Date().toISOString()}</p>
    </div>
  )
}