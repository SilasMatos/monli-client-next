import { Navbar } from '@/components/app-navbar'
import WelcomeScreen from '@/features/welcome/page'

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <>
        <Navbar />
        <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        {/* <WelcomeScreen /> */}
      </>
    </div>
  )
}
