'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Check, Star, Zap, Crown, Building } from 'lucide-react'

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const tiers = [
    {
      name: 'Starter',
      icon: Zap,
      price: isAnnual ? 39 : 49,
      description: 'Perfect for small businesses getting started with demand forecasting',
      features: [
        'Up to 1,000 SKUs',
        'Basic forecasting models',
        'Email support',
        'Standard integrations',
        '1 user',
        'Basic analytics dashboard',
        'CSV data import',
        'Monthly forecasts'
      ],
      cta: 'Start Free Trial',
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      icon: Star,
      price: isAnnual ? 119 : 149,
      description: 'Advanced features for growing businesses with complex forecasting needs',
      features: [
        'Up to 10,000 SKUs',
        'Advanced ML models',
        'Priority support',
        'Custom integrations',
        'API access',
        '5 users',
        'Advanced analytics',
        'Real-time forecasting',
        'Seasonal adjustments',
        'Anomaly detection',
        'Custom dashboards',
        'Webhook support'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      description: 'Enterprise-grade solution with unlimited scale and custom development',
      features: [
        'Unlimited SKUs',
        'White-label options',
        'Dedicated support',
        'Custom development',
        'On-premise deployment',
        'Unlimited users',
        'Advanced security',
        'Custom ML models',
        'Multi-tenant support',
        'SLA guarantees',
        'Training & onboarding',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-gray-700 to-gray-800'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 text-green-600 font-medium">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                tier.popular 
                  ? 'border-purple-500 scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${tier.color} text-white mb-4`}>
                    <tier.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    {typeof tier.price === 'number' ? (
                      <>
                        <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                        <span className="text-gray-500 ml-1">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full py-3 text-lg font-medium ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:opacity-90'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">What's included in the free trial?</h4>
              <p className="text-gray-600">Full access to all features for 14 days. No credit card required to start.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer custom pricing?</h4>
              <p className="text-gray-600">Yes, our Enterprise plan includes custom pricing based on your specific needs.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">What support is included?</h4>
              <p className="text-gray-600">Email support for Starter, priority support for Professional, and dedicated support for Enterprise.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
