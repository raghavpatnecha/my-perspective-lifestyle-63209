import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import { articles } from "@/data/articles";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Main Body Section */}
        <section className="max-w-4xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
          <div className="text-center space-y-6 glass-card p-8 md:p-12 glow-border">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              We explore how ideas, economies, and decisions move through people's lives. 
              Every story is traced from cause to consequence, told with calm precision. 
              No chaos, no rush, only the clarity that comes when time slows down enough to think.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-primary glow-text">
              Understanding is not a lost art. It just needs a home again.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full animate-shimmer"></div>
                <h2 className="text-3xl md:text-4xl font-bold glow-text">A media space built for thought</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Utopia is an independent project created to study how the world truly works. 
                We explain how one decision can echo through systems and alter the rhythm of everyday life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The purpose is not to predict the future but to understand the present. 
                Every piece we publish is built from observation, curiosity, and proof. 
                We speak in a language that respects intelligence but stays easy to grasp.
              </p>
              <p className="text-lg text-foreground font-medium">
                There is no team of experts shouting opinions here. Only people who believe that truth deserves care.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 animate-slide-up stagger-2 glow-border">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-secondary to-accent rounded-full animate-shimmer"></div>
                <h2 className="text-3xl md:text-4xl font-bold glow-text">A slow revolution in how we understand</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Utopia aims to become a living system of understanding. It studies how information travels, 
                how ideas mutate, and how the world's structure affects the choices people make. 
                The work begins with short explanations that turn scattered facts into coherent thought.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over time, it will expand into longer stories, field research, and projects that explore 
                how systems connect across geography and experience. Each piece will build on the last 
                until a larger picture begins to form.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles Grid */}
        <section id="articles" className="py-12 md:py-16">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight glow-text">Featured Stories</h2>
            <a href="#all" className="text-sm font-medium text-primary hover:text-secondary transition-colors px-4 py-2 rounded-full glass-card glow-border">
              View all →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ArticleCard {...article} size="small" />
              </div>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="my-20 rounded-[2.5rem] glass-card p-12 md:p-16 text-center animate-scale-in glow-border">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-block animate-float">
              <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-shimmer mx-auto mb-6"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight glow-text">Work with intent</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Utopia is looking for voices that value precision over volume. You might be a student, 
              creator, or thinker, but what matters most is the ability to explain ideas clearly.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              You will help build short stories that uncover how the world functions beneath the surface. 
              You will learn to shape meaning, refine delivery, and tell the truth in a language people trust.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              The work asks for patience, not perfection. It rewards curiosity, not compliance. 
              It is for those who believe that understanding can still move people.
            </p>
            <button className="group mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-bold text-lg hover:scale-105 transition-all glow-border flex items-center gap-3 mx-auto">
              Join Utopia
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[hsl(var(--glass-border)/0.3)] mt-16 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">Explore</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/wellness" className="hover:text-primary transition-colors">Wellness</a></li>
                <li><a href="/travel" className="hover:text-primary transition-colors">Travel</a></li>
                <li><a href="/creativity" className="hover:text-primary transition-colors">Creativity</a></li>
                <li><a href="/growth" className="hover:text-primary transition-colors">Growth</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="/authors" className="hover:text-primary transition-colors">Authors</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/style-guide" className="hover:text-primary transition-colors">Style Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[hsl(var(--glass-border)/0.3)] text-center text-sm text-muted-foreground">
            <p>© 2025 Utopia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
