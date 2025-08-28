'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Clock, 
  Users,
  Database,
  Target,
  AlertTriangle,
  RefreshCw
} from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'State-of-the-art machine learning algorithms that continuously learn and improve from your data.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Monitor your forecasts in real-time with interactive dashboards and automated alerts.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate accurate forecasts in minutes, not hours. Process millions of data points instantly.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with end-to-end encryption. Your data is protected at every level.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: BarChart3,
      title: 'Multi-channel Forecasting',
      description: 'Forecast across all your sales channels - e-commerce, retail, wholesale, and more.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Handle seasonal patterns, regional variations, and international market dynamics.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Clock,
      title: 'Seasonal Intelligence',
      description: 'Automatically detect and account for seasonal patterns, holidays, and special events.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share forecasts, collaborate on models, and get approval workflows built-in.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    },
    {
      icon: Database,
      title: 'Easy Integration',
      description: 'Connect with your existing systems via API, CSV upload, or direct database connections.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100'
    },
    {
      icon: Target,
      title: 'Custom Models',
      description: 'Train custom models for your specific business needs and industry requirements.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      icon: AlertTriangle,
      title: 'Anomaly Detection',
      description: 'Automatically detect unusual patterns and alert you to potential issues before they impact sales.',
      color: 'text-rose-600',
      bgColor: 'bg-rose-100'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Learning',
      description: 'Models automatically retrain and improve as new data becomes available.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for{' '}
              <span className="gradient-text">Perfect Forecasting</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines cutting-edge AI with intuitive design to deliver 
              the most accurate demand forecasts in the industry.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg bg-white"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
              Ready to Transform Your Forecasting?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already improved their forecasting accuracy 
              and reduced costs with ForecastAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-bg text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Start Free Trial
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
