import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Search, User, Briefcase, Star, Users, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: User,
      title: 'Professional Profiles',
      description: 'Create comprehensive profiles showcasing your skills, education, and projects',
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Recruiters can easily find students by skills, education, and location',
    },
    {
      icon: Briefcase,
      title: 'Project Showcase',
      description: 'Display your best work with live previews and detailed descriptions',
    },
    {
      icon: Star,
      title: 'Skill Highlights',
      description: 'Mark your primary skills to stand out to potential employers',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Students' },
    { number: '5K+', label: 'Projects' },
    { number: '500+', label: 'Recruiters' },
    { number: '95%', label: 'Success Rate' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 rounded-3xl" />
        <div className="relative z-10">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-3 h-3 mr-1" />
            Trusted by 10,000+ Students
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
            Showcase Your True Potential
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The ultimate platform for students to build professional portfolios and connect with top recruiters. Stand out with your skills, projects, and achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline">
                <Search className="mr-2 h-4 w-4" />
                Explore Profiles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">{stat.number}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose PortfolioHub?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create an impressive portfolio and get noticed by recruiters
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sample Profile Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
          <p className="text-xl text-muted-foreground">
            Here's what a professional student profile looks like
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-border/50 shadow-xl">
            <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  AS
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold mb-2">Alex Smith</h3>
                  <p className="text-muted-foreground mb-4">Full Stack Developer | Computer Science @ MIT</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">AWS</Badge>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                Passionate full-stack developer with experience in building scalable web applications. 
                Experienced in React, Node.js, and cloud technologies. Looking for opportunities to 
                contribute to innovative projects.
              </p>
              <div className="flex justify-center">
                <Link to="/search">
                  <Button variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    View Full Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Stand Out?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who have already built their professional portfolios
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
              <GraduationCap className="mr-2 h-4 w-4" />
              Create Your Portfolio Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;