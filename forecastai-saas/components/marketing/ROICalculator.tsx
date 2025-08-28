'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, Package, AlertTriangle } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

export function ROICalculator() {
  const [metrics, setMetrics] = useState({
    monthlyRevenue: 100000,
    inventoryValue: 500000,
    stockoutRate: 5,
    currentForecastAccuracy: 75
  })

  const calculatedSavings = useMemo(() => {
    // Inventory reduction savings (23% reduction as mentioned in the guide)
    const inventoryReduction = metrics.inventoryValue * 0.23
    
    // Stockout prevention savings (87% of lost revenue can be recovered)
    const stockoutPrevention = (metrics.monthlyRevenue * 12) * (metrics.stockoutRate / 100) * 0.87
    
    // Improved forecast accuracy savings
    const accuracyImprovement = (100 - metrics.currentForecastAccuracy) / 100 * metrics.monthlyRevenue * 0.15
    
    return {
      inventoryReduction,
      stockoutPrevention,
      accuracyImprovement,
      total: inventoryReduction + stockoutPrevention + accuracyImprovement
    }
  }, [metrics])

  const handleInputChange = (field: string, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Calculate Your Potential Savings
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            See how much you could save with AI-powered demand forecasting
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Business Metrics</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Revenue
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={metrics.monthlyRevenue}
                    onChange={(e) => handleInputChange('monthlyRevenue', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="100000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Inventory Value
                </label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={metrics.inventoryValue}
                    onChange={(e) => handleInputChange('inventoryValue', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stockout Rate (%)
                </label>
                <div className="relative">
                  <AlertTriangle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={metrics.stockoutRate}
                    onChange={(e) => handleInputChange('stockoutRate', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="5"
                    min="0"
                    max="100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Forecast Accuracy (%)
                </label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={metrics.currentForecastAccuracy}
                    onChange={(e) => handleInputChange('currentForecastAccuracy', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="75"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Total Savings */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Annual Savings</h3>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {formatCurrency(calculatedSavings.total)}
              </div>
              <p className="text-blue-100">per year</p>
            </div>

            {/* Breakdown */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Inventory Reduction</span>
                  <span className="text-white font-bold">{formatCurrency(calculatedSavings.inventoryReduction)}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(calculatedSavings.inventoryReduction / calculatedSavings.total) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Stockout Prevention</span>
                  <span className="text-white font-bold">{formatCurrency(calculatedSavings.stockoutPrevention)}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(calculatedSavings.stockoutPrevention / calculatedSavings.total) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Accuracy Improvement</span>
                  <span className="text-white font-bold">{formatCurrency(calculatedSavings.accuracyImprovement)}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-purple-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(calculatedSavings.accuracyImprovement / calculatedSavings.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <p className="text-blue-100 text-sm mt-2">
                No credit card required • 14-day free trial
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
