export function HireBanner() {
  return (
    <section id="hire" className="px-4 py-12 sm:px-6 lg:px-8">
  <div className="bg-white-blue-gradient dark:bg-blue-black-gradient-dark rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left shadow-sm transition-colors">
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 leading-snug">
            Hire the best developers and <br className="hidden md:inline" />
            designers around!
          </h3>
        </div>

        <div className="relative mt-6 md:mt-0">
          <button className="bg-mint-neon-gradient dark:bg-mint-neon-gradient-dark text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 relative z-10 border-2 border-transparent dark:border-accent-mint dark:shadow-lg">
            Hire Top Developers
          </button>

          {/* Animated sunburst effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-20 h-20 rounded-full border-2 border-yellow-400 dark:border-accent-mint animate-ping opacity-30" />
            {[0, 45, 90, 135].map((deg) => (
              <div
                key={deg}
                className="absolute w-4 h-0.5 bg-yellow-400 dark:bg-accent-mint"
                style={{ top: '-1.5rem', transform: `rotate(${deg}deg)` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
