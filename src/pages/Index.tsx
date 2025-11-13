import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { ArrowRight } from "lucide-react";

const Index = () => {

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 animate-slide-up glow-border">
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-6 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-secondary to-accent rounded-full animate-shimmer"></div>
                <h2 className="text-4xl md:text-5xl font-bold glow-text text-center">A media space built for thought</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                Utopia is an independent media house created to study how the world truly works. 
                We explain how one decision can ripple through systems and alter the rhythm of everyday life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                Every story we publish comes from observation, curiosity, and proof. 
                We speak in a language that respects intelligence while staying easy to grasp.
              </p>
              <p className="text-lg text-foreground font-medium text-justify">
                We believe understanding is not a lost art. It just needs a home again.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 animate-slide-up stagger-2 glow-border">
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-6 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-secondary to-accent rounded-full animate-shimmer"></div>
                <h2 className="text-4xl md:text-5xl font-bold glow-text text-center">Reimagining how the world is understood</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                Utopia aims to become a living system of understanding, studying how information travels, 
                how ideas evolve, and how the world's structure shapes human choices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                In time, we will grow into in-depth coverage, field research, and projects that explore 
                how systems connect across cultures and the human fabric.
              </p>
            </div>
          </div>
        </section>


        {/* Join Us Section */}
        <section id="join" className="my-20 rounded-[2.5rem] glass-card p-12 md:p-16 text-center animate-scale-in glow-border">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-secondary to-accent rounded-full animate-shimmer"></div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight glow-text">Work with intent</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed text-justify">
              We are hiring Media Presenters and Video Journalists to craft short stories that reveal how the world works beneath the surface. 
              You might be a student, creator, or thinker, but what matters most is the ability to explain ideas clearly.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed text-justify">
              Utopia is looking for voices that value precision over volume and speak the truth in a language people trust. 
              For more information, reach out at info@utopiamedia.in
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--glass-border)/0.3)] mt-16 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Utopia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
