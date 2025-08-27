export default function Loading() {
  return (
  <div className="min-h-screen flex items-center justify-center bg-background dark:bg-dark-background">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
  <p className="text-sm text-muted-foreground dark:text-dark-brand">Loading...</p>
      </div>
    </div>
  );
}
