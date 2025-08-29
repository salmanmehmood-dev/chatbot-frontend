import Link from 'next/link'
import { Button } from '@/components/ui/button'
 
export default function NotFound() {
  return (
  <div className="min-h-screen flex items-center justify-center bg-background dark:bg-dark-background">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground dark:text-dark-brand">404</h1>
          <h2 className="text-2xl font-semibold text-foreground dark:text-dark-foreground">Page Not Found</h2>
          <p className="text-muted-foreground dark:text-dark-brand">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="primary">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
