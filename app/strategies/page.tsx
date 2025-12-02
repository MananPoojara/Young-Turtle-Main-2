"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { TrendingUp, BarChart2, PieChart, Activity } from "lucide-react"

const strategies = [
  {
    icon: TrendingUp,
    name: "Systematic Equity",
    description:
      "Quantitative equity strategies employing factor-based models, statistical arbitrage, and machine learning techniques to capture alpha across global markets.",
    features: ["Factor Investing", "Statistical Arbitrage", "Market Neutral", "Long/Short Equity"],
  },
  {
    icon: BarChart2,
    name: "Global Macro",
    description:
      "Data-driven macro strategies that identify and capitalize on structural shifts in global economies, currencies, and interest rates.",
    features: ["Currency Trading", "Interest Rate", "Commodity Overlay", "Event-Driven"],
  },
  {
    icon: PieChart,
    name: "Multi-Asset",
    description:
      "Dynamic allocation across asset classes using proprietary risk-parity and momentum models to optimize risk-adjusted returns.",
    features: ["Risk Parity", "Tactical Allocation", "Volatility Targeting", "Trend Following"],
  },
  {
    icon: Activity,
    name: "Alternative Risk Premia",
    description:
      "Systematic harvesting of well-documented risk premia including value, momentum, carry, and volatility across multiple asset classes.",
    features: ["Value Premium", "Momentum", "Carry Strategies", "Volatility Premium"],
  },
]

const approach = [
  {
    step: "01",
    title: "Research",
    description: "Rigorous academic research and empirical analysis form the foundation of every strategy.",
  },
  {
    step: "02",
    title: "Development",
    description: "Systematic model development with robust backtesting and stress testing protocols.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Precision execution with proprietary infrastructure minimizing market impact.",
  },
  {
    step: "04",
    title: "Monitoring",
    description: "Continuous performance attribution and risk monitoring with adaptive refinement.",
  },
]

export default function StrategiesPage() {
  return (
    <>
      <PageHero
        title="Our Multi-Strategy Approach"
        subtitle="Systematic excellence across asset classes and market conditions"
        variant="lines"
      />

      {/* Strategies Section */}
      <SectionWrapper className="py-32 bg-sunbeam-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-aqua-mist">Investment Strategies</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue text-balance">
              Diversified Alpha Generation
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-border p-10 group hover:border-aqua-mist/50 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-aqua-mist/30 text-aqua-mist group-hover:bg-aqua-mist group-hover:text-white transition-all duration-500">
                    <strategy.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-abyssal-blue mb-3">{strategy.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{strategy.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {strategy.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs uppercase tracking-wider bg-sunbeam-pearl text-abyssal-blue border border-border"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Investment Process */}
      <SectionWrapper className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-aqua-mist">Investment Process</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-abyssal-blue">From Research to Results</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="absolute -top-4 left-0 font-serif text-6xl text-aqua-mist/20">{item.step}</div>
                <div className="pt-12">
                  <h3 className="font-serif text-xl text-abyssal-blue mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Risk Management */}
      <SectionWrapper className="py-32 bg-abyssal-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-aqua-mist">Risk Management</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl text-sunbeam-pearl text-balance">
                Disciplined Risk Control at Every Level
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-sunbeam-pearl/70 leading-relaxed">
                  Risk management is not merely a function at Young Turtle—it is integral to our investment philosophy.
                  Our multi-layered approach encompasses position-level limits, portfolio-level constraints, and
                  firm-wide risk budgets.
                </p>
                <p className="text-sunbeam-pearl/70 leading-relaxed">
                  Proprietary risk systems monitor exposures in real-time across all strategies, ensuring alignment with
                  investment mandates and regulatory requirements.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Daily VaR Monitoring", value: "Real-time" },
                { label: "Stress Testing", value: "Weekly" },
                { label: "Drawdown Controls", value: "Automated" },
                { label: "Liquidity Analysis", value: "Continuous" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0D3A54] p-6 border border-aqua-mist/20"
                >
                  <div className="text-xs uppercase tracking-wider text-aqua-mist mb-2">{item.value}</div>
                  <div className="text-sm text-sunbeam-pearl/80">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
