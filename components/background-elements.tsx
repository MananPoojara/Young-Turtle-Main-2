export function BackgroundElements() {
  return (
    <>
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1000" height="1000" fill="url(#grid)" />
      </svg>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-accent rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent rounded-full opacity-3 blur-3xl"></div>
    </>
  )
}
