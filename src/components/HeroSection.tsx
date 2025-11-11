const HeroSection = () => {

  return (
    <section id="home" className="max-w-5xl mx-auto text-center py-16 md:py-24 animate-fade-in">
      <div className="space-y-8">
        <div className="inline-block animate-float">
          <span className="px-6 py-3 rounded-full glass-card text-sm font-medium tracking-wide glow-border">
            Welcome to UTOPIA
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight animate-slide-up">
          <span style={{ color: 'rgb(242, 123, 214)' }}>Make</span>
          {' '}
          <span style={{ color: 'rgb(68, 219, 234)' }}>Sense</span>
          {' '}
          <span style={{ color: 'rgb(242, 123, 214)' }}>Again</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
          The world is drowning in half-truths and speed. Everyone is speaking, but few are listening. 
          Utopia was built for those who still want to understand, for those who believe clarity is worth slowing down for. 
          We tell stories that slow the noise and make sense of what matters.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
