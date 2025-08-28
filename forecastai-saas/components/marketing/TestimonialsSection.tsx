'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'VP of Operations',
      company: 'TechCorp Inc.',
      image: '/api/placeholder/60/60',
      content: 'ForecastAI transformed our inventory management. We reduced costs by 28% and eliminated stockouts completely. The AI accuracy is incredible!',
      rating: 5,
      improvement: '28% cost reduction'
    },
    {
      name: 'Michael Chen',
      role: 'Supply Chain Director',
      company: 'Global Retail Co.',
      image: '/api/placeholder/60/60',
      content: 'The seasonal forecasting capabilities are game-changing. We now predict holiday demand with 95% accuracy. ROI was achieved in just 3 months.',
      rating: 5,
      improvement: '95% accuracy'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO',
      company: 'StartupXYZ',
      image: '/api/placeholder/60/60',
      content: 'As a growing startup, we needed a solution that could scale with us. ForecastAI delivered exactly that. The API integration was seamless.',
      rating: 5,
      improvement: '3x faster scaling'
    },
    {
      name: 'David Thompson',
      role: 'Operations Manager',
      company: 'Manufacturing Plus',
      image: '/api/placeholder/60/60',
      content: 'The anomaly detection feature saved us from a major supply chain disruption. The alerts are timely and actionable.',
      rating: 5,
      improvement: 'Prevented $500K loss'
    },
    {
      name: 'Lisa Wang',
      role: 'E-commerce Director',
      company: 'Online Retail Pro',
      image: '/api/placeholder/60/60',
      content: 'Multi-channel forecasting was exactly what we needed. Now we can optimize inventory across all our sales channels in real-time.',
      rating: 5,
      improvement: '40% inventory optimization'
    },
    {
      name: 'Robert Kim',
      role: 'Data Scientist',
      company: 'Analytics Corp',
      image: '/api/placeholder/60/60',
      content: 'The custom model training capabilities are impressive. We were able to fine-tune the algorithms for our specific industry needs.',
      rating: 5,
      improvement: 'Custom ML models'
    }
  ]

  const stats = [
    { label: 'Average Rating', value: '4.9/5' },
    { label: 'Customer Satisfaction', value: '98%' },
    { label: 'Time to Value', value: '< 30 days' },
    { label: 'ROI Achieved', value: '3.2x average' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies across industries are transforming their operations with AI-powered demand forecasting
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-blue-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Improvement Badge */}
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.improvement}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join These Success Stories
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your journey to better forecasting today. Join hundreds of companies 
              that have already transformed their operations with ForecastAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-bg text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Start Free Trial
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
