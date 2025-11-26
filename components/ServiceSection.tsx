import { Header } from "./navigation"
import { BackgroundElements } from "./background-elements"
import { Card } from "./ui/card"
import { Brain, Database, Zap, CheckCircle, TrendingUp, Shield, LineChart, BarChart3 } from "lucide-react"

export const metadata = {
  title: "Our Approach - Young Turtle",
  description: "Learn about our comprehensive methodology for financial analysis and investment research.",
}

const ServiceSection = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-b from-background to-background py-16 sm:py-24">
          <BackgroundElements />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4">Our Approach</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                A scientifically-backed, multi-layered methodology combining technical analysis, quantitative research,
                and risk management to deliver actionable trading insights.
              </p>
            </div>
          </div>
        </section>

        {/* Core Philosophy */}
        <section className="py-16 sm:py-24 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Core Philosophy</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that successful trading is built on three pillars: rigorous analysis, disciplined risk
                management, and psychological resilience. Our platform combines AI-driven insights with time-tested
                trading principles to help you make consistently profitable decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Data-Driven",
                  icon: Database,
                  desc: "Every signal backed by years of market data and statistical analysis",
                },
                {
                  title: "Risk-First",
                  icon: Shield,
                  desc: "We prioritize capital preservation before pursuing profit opportunities",
                },
                {
                  title: "Transparent",
                  icon: BarChart3,
                  desc: "You understand exactly why we make specific recommendations",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="p-8 border-border bg-background text-center hover:border-accent/50 transition-colors"
                >
                  <item.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <BackgroundElements />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">Our Methodology</h2>
                <p className="text-lg text-muted-foreground">
                  We employ a comprehensive approach that integrates multiple analytical frameworks to identify
                  high-probability trading opportunities with favorable risk-reward ratios.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Technical Pattern Recognition", desc: "AI-powered candlestick pattern detection" },
                    { title: "Volume & Momentum Analysis", desc: "Confirmation through volume and trend strength" },
                    { title: "Market Structure Evaluation", desc: "Support, resistance, and trend identification" },
                    { title: "Risk-Reward Assessment", desc: "Optimal entry and exit point calculation" },
                    { title: "Portfolio Correlation Study", desc: "Diversification and hedge effectiveness analysis" },
                    {
                      title: "Real-Time Condition Monitoring",
                      desc: "Continuous signal adjustment based on market changes",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Card className="p-6 border-border bg-background hover:border-accent/50 transition-colors">
                  <Brain className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Intelligent Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Our machine learning models identify market patterns and anomalies that human analysis might miss.
                    Trained on millions of candlesticks across market cycles.
                  </p>
                </Card>
                <Card className="p-6 border-border bg-background hover:border-accent/50 transition-colors">
                  <Database className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Data Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    We aggregate price data, volume information, open interest, and macroeconomic indicators to provide
                    a holistic market view. Real-time data from NSE/BSE.
                  </p>
                </Card>
                <Card className="p-6 border-border bg-background hover:border-accent/50 transition-colors">
                  <Zap className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Real-Time Execution</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant signal generation with millisecond latency ensures you capture market opportunities. Alerts
                    delivered via multiple channels simultaneously.
                  </p>
                </Card>
                <Card className="p-6 border-border bg-background hover:border-accent/50 transition-colors">
                  <TrendingUp className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Continuous Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Our algorithms learn and evolve with market conditions. We continuously backtest and optimize our
                    models to maintain high accuracy.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Framework */}
        <section className="py-16 sm:py-24 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our 6-Step Trading Framework</h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Market Scanning",
                  description:
                    "Our system continuously scans NIFTY 50 and major indices for potential setups matching our technical criteria and probability models.",
                },
                {
                  step: "2",
                  title: "Pattern Confirmation",
                  description:
                    "Identified patterns are validated through volume analysis, momentum indicators, and support/resistance levels before signal generation.",
                },
                {
                  step: "3",
                  title: "Risk Analysis",
                  description:
                    "We calculate optimal stop-loss placement and position sizing based on volatility, portfolio correlation, and your risk tolerance.",
                },
                {
                  step: "4",
                  title: "Signal Generation",
                  description:
                    "High-conviction signals are generated with entry price, target prices, and stop-loss levels. Each signal includes a confidence score.",
                },
                {
                  step: "5",
                  title: "Position Management",
                  description:
                    "We provide trail stops, partial profit-taking levels, and dynamic target adjustments based on real-time market conditions.",
                },
                {
                  step: "6",
                  title: "Performance Analysis",
                  description:
                    "Detailed post-trade analysis helps you understand what worked and what didn't, enabling continuous improvement in your trading.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground font-bold shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Metrics */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Results & Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { metric: "95%", label: "Signal Accuracy", subtext: "Verified across 100+ signals" },
                { metric: "24/7", label: "Market Monitoring", subtext: "Continuous analysis and alerts" },
                { metric: "10,000+", label: "Active Traders", subtext: "Using Young Turtle daily" },
                { metric: "3.2:1", label: "Avg Risk-Reward", subtext: "Target to stop-loss ratio" },
              ].map((stat, i) => (
                <Card key={i} className="p-6 border-border bg-card/50 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.metric}</div>
                  <p className="font-semibold mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.subtext}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Indicators */}
        <section className="py-16 sm:py-24 bg-card/30 relative overflow-hidden">
          <BackgroundElements />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Technical Indicators We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <Card key={i} className="p-6 border-border bg-background flex items-center gap-3">
                  <LineChart className="h-5 w-5 text-accent shrink-0" />
                  <p className="font-medium">{indicator}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ServiceSection