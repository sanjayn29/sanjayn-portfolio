const SpaceBackground = () => {
  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: `${Math.random() * 3}s`,
    duration: `${Math.random() * 2 + 2}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: star.size > 2 
              ? 'linear-gradient(135deg, hsl(189 86% 53% / 0.8), hsl(217 91% 68% / 0.8))' 
              : 'hsl(215 25% 84% / 0.6)',
            animation: `twinkle ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
            boxShadow: star.size > 2 
              ? '0 0 6px hsl(189 86% 53% / 0.5)' 
              : 'none',
          }}
        />
      ))}

      {/* Moon */}
      <div 
        className="absolute right-[10%] top-[15%] w-20 h-20 md:w-28 md:h-28 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(215 25% 94%), hsl(215 25% 74%), hsl(215 25% 54%))',
          animation: 'moon-glow 4s ease-in-out infinite',
        }}
      >
        {/* Moon craters */}
        <div 
          className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full opacity-30"
          style={{
            background: 'hsl(215 25% 44%)',
            top: '20%',
            left: '25%',
          }}
        />
        <div 
          className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full opacity-25"
          style={{
            background: 'hsl(215 25% 44%)',
            top: '50%',
            left: '60%',
          }}
        />
        <div 
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full opacity-20"
          style={{
            background: 'hsl(215 25% 44%)',
            top: '65%',
            left: '30%',
          }}
        />
      </div>

      {/* Rocket */}
      <div 
        className="absolute left-[5%] top-[60%] md:left-[8%] md:top-[50%]"
        style={{
          animation: 'rocket-float 4s ease-in-out infinite',
        }}
      >
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="md:w-14 md:h-14"
          style={{ transform: 'rotate(-45deg)' }}
        >
          {/* Rocket body */}
          <path 
            d="M12 2C12 2 8 6 8 12C8 15 9 18 12 22C15 18 16 15 16 12C16 6 12 2 12 2Z" 
            fill="url(#rocketGradient)"
            stroke="hsl(189 86% 53%)"
            strokeWidth="0.5"
          />
          {/* Rocket window */}
          <circle 
            cx="12" 
            cy="10" 
            r="2" 
            fill="hsl(217 91% 68%)"
            opacity="0.8"
          />
          {/* Left fin */}
          <path 
            d="M8 14L5 18L8 16V14Z" 
            fill="hsl(189 86% 53%)"
            opacity="0.8"
          />
          {/* Right fin */}
          <path 
            d="M16 14L19 18L16 16V14Z" 
            fill="hsl(189 86% 53%)"
            opacity="0.8"
          />
          {/* Flame */}
          <path 
            d="M10 20C10 20 11 23 12 24C13 23 14 20 14 20C13 21 11 21 10 20Z" 
            fill="url(#flameGradient)"
          />
          <defs>
            <linearGradient id="rocketGradient" x1="8" y1="2" x2="16" y2="22">
              <stop offset="0%" stopColor="hsl(215 25% 84%)" />
              <stop offset="100%" stopColor="hsl(215 25% 64%)" />
            </linearGradient>
            <linearGradient id="flameGradient" x1="12" y1="20" x2="12" y2="24">
              <stop offset="0%" stopColor="hsl(189 86% 53%)" />
              <stop offset="50%" stopColor="hsl(217 91% 68%)" />
              <stop offset="100%" stopColor="hsl(280 80% 60%)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Rocket trail */}
        <div 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1 h-8 opacity-50"
          style={{
            background: 'linear-gradient(to bottom, hsl(189 86% 53% / 0.6), transparent)',
            filter: 'blur(2px)',
          }}
        />
      </div>

      {/* Shooting Star */}
      <div 
        className="absolute top-[20%] left-[20%] w-1 h-1 bg-foreground rounded-full"
        style={{
          animation: 'shooting-star 6s linear infinite',
          animationDelay: '2s',
        }}
      >
        <div 
          className="absolute w-16 h-px -left-16 top-1/2 -translate-y-1/2"
          style={{
            background: 'linear-gradient(to right, transparent, hsl(215 25% 84% / 0.6))',
          }}
        />
      </div>

      {/* Second Shooting Star */}
      <div 
        className="absolute top-[40%] left-[60%] w-1 h-1 bg-foreground rounded-full"
        style={{
          animation: 'shooting-star 8s linear infinite',
          animationDelay: '5s',
        }}
      >
        <div 
          className="absolute w-12 h-px -left-12 top-1/2 -translate-y-1/2"
          style={{
            background: 'linear-gradient(to right, transparent, hsl(189 86% 53% / 0.5))',
          }}
        />
      </div>

      {/* Floating planets/orbs */}
      <div 
        className="absolute right-[20%] bottom-[30%] w-6 h-6 md:w-8 md:h-8 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(217 91% 68%), hsl(217 91% 48%))',
          animation: 'float 6s ease-in-out infinite',
          boxShadow: '0 0 20px hsl(217 91% 68% / 0.3)',
        }}
      />
      
      <div 
        className="absolute left-[15%] top-[25%] w-4 h-4 md:w-5 md:h-5 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(189 86% 53%), hsl(189 86% 33%))',
          animation: 'float 5s ease-in-out infinite',
          animationDelay: '1s',
          boxShadow: '0 0 15px hsl(189 86% 53% / 0.3)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;
