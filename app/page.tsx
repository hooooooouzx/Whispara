'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "The Whisper",
      subtitle: "Instant Capture Mode",
      description: "Record upon launch. No blank page anxiety. Frictionless capture in under 2 seconds.",
      direction: "Home",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "The Flow",
      subtitle: "Gravity Directory",
      description: "AI automatically pulls notes into relevant themes. No manual tagging required.",
      direction: "Swipe Right →",
      icon: "🌊",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "The Shadow",
      subtitle: "Echo Mode",
      description: "AI resurfaces old insights at the perfect moment. Forgotten notes become active shadows.",
      direction: "← Swipe Left",
      icon: "👁️",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "The Dispatcher",
      subtitle: "Intent Mapping",
      description: "Instantly dispatch inspirations to Notion, GitHub, or Calendar. Stay lightweight.",
      direction: "↓ Swipe Down",
      icon: "⚡",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
            style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.001})` }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-indigo-500/20 animate-ripple"
                style={{ animationDelay: `${i * 0.7}s` }}
              />
            ))}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10">
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Intent Router • Version 2026.03</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Whispara
            </span>
          </h1>

          <p className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300 font-light italic">
            The Cognitive Perception Engine
          </p>

          <p className="text-xl md:text-2xl mb-12 text-gray-500 dark:text-gray-400">
            Capture the Whisper, Follow the Shadow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Experience Whispara</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-8 py-4 border-2 border-black/20 dark:border-white/20 rounded-full font-medium text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
              Read the Manifesto
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black/20 dark:border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">From Archive to Portal</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Unlike traditional note-taking apps that act as a final destination,
              Whispara is the <span className="font-bold text-indigo-600 dark:text-indigo-400">starting line of thought</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gray-50 dark:bg-gray-900 p-10 rounded-2xl border-2 border-gray-200 dark:border-gray-800">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-2xl font-bold mb-4">Legacy Tools</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Human manages notes</p>
                <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">
                  The Manual Organization Era
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 p-10 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-4">Whispara</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Notes find the human</p>
                <span className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full text-sm">
                  The Cognitive Intelligence Era
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Dimensions Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Four-Dimensional Interaction</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Disruptive UI that redefines how you capture and connect ideas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white scale-105 shadow-2xl'
                    : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border-2 border-gray-200 dark:border-gray-800'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className={`text-sm font-medium mb-2 ${
                  activeFeature === index ? 'text-white/80' : 'text-indigo-600 dark:text-indigo-400'
                }`}>
                  {feature.direction}
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className={`text-sm mb-4 font-medium ${
                  activeFeature === index ? 'text-white/90' : 'text-gray-500'
                }`}>
                  {feature.subtitle}
                </p>
                <p className={`text-sm leading-relaxed ${
                  activeFeature === index ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {feature.description}
                </p>

                {activeFeature === index && (
                  <div className="absolute inset-0 rounded-3xl border-2 border-white/50 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-32 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">The Paradigm Shift</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              From filing cabinets to neural networks
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-black dark:border-white">
                  <th className="text-left p-6 text-lg font-bold">Dimension</th>
                  <th className="text-left p-6 text-lg font-bold text-gray-500">Traditional AI Notes</th>
                  <th className="text-left p-6 text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Whispara
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <td className="p-6 font-bold">Mental Model</td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">Filing Cabinet<br/><span className="text-sm">(More you save, higher the stress)</span></td>
                  <td className="p-6 font-bold">Neural Network<br/><span className="text-sm font-normal text-indigo-600 dark:text-indigo-400">(Auto-aggregation, weight decay)</span></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <td className="p-6 font-bold">Primary Purpose</td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">Management & Organization</td>
                  <td className="p-6 font-bold text-indigo-600 dark:text-indigo-400">Release & Dispatch</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <td className="p-6 font-bold">Retrieval</td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">Manual Search<br/><span className="text-sm">(Keyword matching)</span></td>
                  <td className="p-6 font-bold text-indigo-600 dark:text-indigo-400">Passive Awakening<br/><span className="text-sm font-normal">(Context Awareness + Semantic Echo)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Transform Your Thinking?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Join the cognitive revolution. Experience the first true Intent Router.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Get Early Access
            </button>
            <button className="px-8 py-4 border-2 border-white/50 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2026 Whispara Tech. Built for the Flow of Thought.</p>
          <p className="text-sm text-gray-600">The Cognitive Perception Engine • Intent Router • Zero-Directory Architecture</p>
        </div>
      </footer>
    </div>
  );
}
