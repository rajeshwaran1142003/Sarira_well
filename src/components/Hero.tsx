import React from 'react';
import { ArrowRight, Star, Leaf, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-green-50 flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-amber-50/90 to-green-50/80"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 border border-[#E38A30] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 border border-[#E38A30] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 border border-[#E38A30] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8 sm:py-12">
        <div className="space-y-8 animate-fade-in">
          {/* Brand Badge */}
          <div className="inline-flex items-center bg-[#E38A30]/10 border border-[#E38A30]/20 rounded-full px-4 py-2 mb-6">
            <Leaf className="w-4 h-4 text-[#E38A30] mr-2" />
            <span className="text-[#E38A30] text-sm font-medium">Rooted in Tamil Tradition</span>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src="/images/Logo.png" 
              alt="SARIRA Logo" 
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain brightness-110 contrast-125 transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#364A22] mb-4 leading-tight">
              Functional Wellness
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E38A30] mb-6 leading-tight">
              Redefined
            </h2>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#364A22]/80 max-w-4xl mx-auto leading-relaxed px-4 mb-8">
            Ancient Tamil wisdom meets modern nutrition. Discover SARIRA's Fig Malt — your gateway to holistic wellness, crafted with time-honored traditions.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8 text-sm sm:text-base">
            <div className="flex items-center text-[#364A22]/70">
              <Heart className="w-4 h-4 text-[#E38A30] mr-2" />
              <span>100% Natural Ingredients</span>
            </div>
            <div className="flex items-center text-[#364A22]/70">
              <Star className="w-4 h-4 text-[#E38A30] mr-2" />
              <span>Traditional Recipe</span>
            </div>
            <div className="flex items-center text-[#364A22]/70">
              <Leaf className="w-4 h-4 text-[#E38A30] mr-2" />
              <span>Sustainably Sourced</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <button className="group bg-[#E38A30] hover:bg-[#E38A30]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center min-h-[56px] touch-manipulation">
              Discover Fig Malt
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-white/80 hover:bg-white text-[#364A22] border-2 border-[#364A22]/20 hover:border-[#364A22]/40 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center min-h-[56px] touch-manipulation">
              Learn Our Story
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#E38A30] mb-2">500+</div>
              <div className="text-[#364A22]/70 text-sm sm:text-base">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#E38A30] mb-2">100%</div>
              <div className="text-[#364A22]/70 text-sm sm:text-base">Natural Ingredients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#E38A30] mb-2">50+</div>
              <div className="text-[#364A22]/70 text-sm sm:text-base">Years of Tradition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;