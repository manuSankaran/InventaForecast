'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Play, ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const stats = [
    { label: 'Companies using ForecastAI', value: '500+' },
    { label: 'Average accuracy improvement', value: '23%' },
    { label: 'Cost savings achieved', value: '$2.4M' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                AI-Powered Demand Forecasting
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with{' '}
                <span className="gradient-text">AI-Powered</span> Demand Forecasting
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Reduce inventory costs by 23%, prevent stockouts, and boost revenue with our advanced machine learning platform. 
                Get accurate predictions in minutes, not months.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/signup">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-500" />
                99.9% Uptime
              </div>
            </div>
          </motion.div>

          {/* Right Column - Demo Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                {!isVideoPlaying ? (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform"
                         onClick={() => setIsVideoPlaying(true)}>
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-gray-600 font-medium">Watch 2-minute demo</p>
                  </div>
                ) : (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <p className="text-white">Demo video would play here</p>
                  </div>
                )}
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-2xl font-bold text-green-600">23%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
    </section>
  )
}
