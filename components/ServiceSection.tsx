import React from 'react';
import { Brain, Database, Zap, CheckCircle, TrendingUp, Shield, LineChart, BarChart3, Target, Sparkles } from "lucide-react";
import Image from 'next/image';
import officeImage from '../public/office-images.jpg'

const ServiceSection = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-br from-[#275669] via-[#2d6a7f] to-[#1e4552]">
        <div className="absolute inset-0 w-full h-full">
        <Image
          src={officeImage}
          alt="Office"
          layout="fill"           
          objectFit="cover"       
          quality={100}           
          priority                
        />
      </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(39,86,105,0.5),rgba(45,106,127,0.7),rgba(30,69,82,1))]"></div>

        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Where Mathematics Meets
              <span className="block pb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mt-1">
                Market Intelligence
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Young Turtle is a technology-driven, multi-strategy quantitative trading firm operating in global financial markets. We're a Math and Technology company—scientists and engineers working as a unified team to solve complex problems in the dynamic world of finance.
            </p>

          </div>
        </div>
      </section>


      {/* Core Philosophy */}
      <section className="py-20 sm:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#275669] mb-6">Our Core Philosophy</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Successful trading is built on three pillars: rigorous analysis, disciplined risk management, and psychological resilience. Our platform combines AI-driven insights with time-tested trading principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data-Driven",
                icon: Database,
                desc: "Every signal backed by years of market data and statistical analysis",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Risk-First",
                icon: Shield,
                desc: "We prioritize capital preservation before pursuing profit opportunities",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Transparent",
                icon: BarChart3,
                desc: "You understand exactly why we make specific recommendations",
                color: "from-amber-500 to-orange-500"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#275669] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#275669] mb-4">Our Methodology</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We employ a comprehensive approach that integrates multiple analytical frameworks to identify high-probability trading opportunities with favorable risk-reward ratios.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Technical Pattern Recognition", desc: "AI-powered candlestick pattern detection" },
                  { title: "Volume & Momentum Analysis", desc: "Confirmation through volume and trend strength" },
                  { title: "Market Structure Evaluation", desc: "Support, resistance, and trend identification" },
                  { title: "Risk-Reward Assessment", desc: "Optimal entry and exit point calculation" },
                  { title: "Portfolio Correlation Study", desc: "Diversification and hedge effectiveness analysis" },
                  { title: "Real-Time Condition Monitoring", desc: "Continuous signal adjustment based on market changes" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#275669] to-[#1e4552] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: Brain,
                  title: "Intelligent Analysis",
                  desc: "Our machine learning models identify market patterns and anomalies that human analysis might miss. Trained on millions of candlesticks across market cycles.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: Database,
                  title: "Comprehensive Data Integration",
                  desc: "We aggregate price data, volume information, open interest, and macroeconomic indicators to provide a holistic market view. Real-time data from NSE/BSE.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Zap,
                  title: "Real-Time Execution",
                  desc: "Instant signal generation with millisecond latency ensures you capture market opportunities. Alerts delivered via multiple channels simultaneously.",
                  gradient: "from-amber-500 to-orange-500"
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Optimization",
                  desc: "Our algorithms learn and evolve with market conditions. We continuously backtest and optimize our models to maintain high accuracy.",
                  gradient: "from-emerald-500 to-teal-500"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-[#275669] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading Framework */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-[#275669] to-[#1e4552] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Our 6-Step Trading Framework</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Market Scanning",
                description: "Our system continuously scans NIFTY 50 and major indices for potential setups matching our technical criteria and probability models.",
                icon: Target
              },
              {
                step: "2",
                title: "Pattern Confirmation",
                description: "Identified patterns are validated through volume analysis, momentum indicators, and support/resistance levels before signal generation.",
                icon: CheckCircle
              },
              {
                step: "3",
                title: "Risk Analysis",
                description: "We calculate optimal stop-loss placement and position sizing based on volatility, portfolio correlation, and your risk tolerance.",
                icon: Shield
              },
              {
                step: "4",
                title: "Signal Generation",
                description: "High-conviction signals are generated with entry price, target prices, and stop-loss levels. Each signal includes a confidence score.",
                icon: Zap
              },
              {
                step: "5",
                title: "Position Management",
                description: "We provide trail stops, partial profit-taking levels, and dynamic target adjustments based on real-time market conditions.",
                icon: TrendingUp
              },
              {
                step: "6",
                title: "Performance Analysis",
                description: "Detailed post-trade analysis helps you understand what worked and what didn't, enabling continuous improvement in your trading.",
                icon: BarChart3
              },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="h-full p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-white text-xl group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <item.icon className="h-8 w-8 text-amber-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-200 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#275669] text-center mb-16">Results & Performance Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "95%", label: "Signal Accuracy", subtext: "Verified across 100+ signals", gradient: "from-emerald-500 to-teal-500" },
              { metric: "24/7", label: "Market Monitoring", subtext: "Continuous analysis and alerts", gradient: "from-blue-500 to-cyan-500" },
              { metric: "10,000+", label: "Active Traders", subtext: "Using Young Turtle daily", gradient: "from-purple-500 to-pink-500" },
              { metric: "3.2:1", label: "Avg Risk-Reward", subtext: "Target to stop-loss ratio", gradient: "from-amber-500 to-orange-500" },
            ].map((stat, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"></div>
                <div className="relative p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#275669] transition-all duration-300 hover:shadow-xl text-center">
                  <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-br ${stat.gradient} text-transparent bg-clip-text mb-3`}>
                    {stat.metric}
                  </div>
                  <p className="font-semibold text-slate-900 mb-2">{stat.label}</p>
                  <p className="text-sm text-slate-600">{stat.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Indicators */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#275669] text-center mb-16">Technical Indicators We Use</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Moving Averages (SMA, EMA)",
              "RSI (Relative Strength Index)",
              "MACD (Moving Average Convergence Divergence)",
              "Bollinger Bands",
              "Stochastic Oscillator",
              "Volume Profile Analysis",
              "Fibonacci Retracements",
              "ATR (Average True Range)",
              "Candlestick Pattern Recognition",
            ].map((indicator, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-[#275669] transition-all duration-300 hover:shadow-lg flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#275669] to-[#1e4552] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <LineChart className="h-5 w-5 text-white" />
                </div>
                <p className="font-semibold text-slate-900">{indicator}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#275669] to-[#1e4552]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Trading?</h2>
          <p className="text-xl text-slate-200 mb-8">
            Join thousands of traders who trust Young Turtle for intelligent market insights.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
};

export default ServiceSection;