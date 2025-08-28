'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { 
  Upload, 
  Play, 
  Settings, 
  Download, 
  Eye, 
  Edit, 
  Trash2,
  Calendar,
  Target,
  TrendingUp,
  AlertTriangle
} from 'lucide-react'

export function ForecastingInterface() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [forecastPeriod, setForecastPeriod] = useState('30')
  const [isGenerating, setIsGenerating] = useState(false)

  const products = [
    { id: '1', name: 'Product A', category: 'Electronics', currentStock: 150, lastForecast: '1,200 units' },
    { id: '2', name: 'Product B', category: 'Clothing', currentStock: 75, lastForecast: '890 units' },
    { id: '3', name: 'Product C', category: 'Home & Garden', currentStock: 200, lastForecast: '2,100 units' },
    { id: '4', name: 'Product D', category: 'Sports', currentStock: 120, lastForecast: '750 units' },
    { id: '5', name: 'Product E', category: 'Books', currentStock: 300, lastForecast: '1,500 units' },
  ]

  const recentForecasts = [
    {
      id: 1,
      product: 'Product A',
      period: '30 days',
      forecast: '1,250 units',
      confidence: '95%',
      status: 'completed',
      createdAt: '2 hours ago',
      accuracy: '94.2%'
    },
    {
      id: 2,
      product: 'Product B',
      period: '30 days',
      forecast: '890 units',
      confidence: '92%',
      status: 'completed',
      createdAt: '4 hours ago',
      accuracy: '91.8%'
    },
    {
      id: 3,
      product: 'Product C',
      period: '30 days',
      forecast: '2,100 units',
      confidence: '88%',
      status: 'completed',
      createdAt: '6 hours ago',
      accuracy: '89.5%'
    }
  ]

  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const handleGenerateForecast = async () => {
    if (selectedProducts.length === 0) return
    
    setIsGenerating(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsGenerating(false)
    // Handle success
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Forecasting</h2>
          <p className="text-sm text-gray-600">Create and manage demand forecasts for your products</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Import Data
          </Button>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Forecast Configuration */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Forecast</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Forecast Period
            </label>
            <select
              value={forecastPeriod}
              onChange={(e) => setForecastPeriod(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
              <option value="60">60 days</option>
              <option value="90">90 days</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Model Type
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Auto-select best model</option>
              <option>Time Series (ARIMA)</option>
              <option>Neural Network</option>
              <option>Ensemble Model</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confidence Level
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>95% (Recommended)</option>
              <option>90%</option>
              <option>85%</option>
              <option>80%</option>
            </select>
          </div>
        </div>

        {/* Product Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Products ({selectedProducts.length} selected)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                  selectedProducts.includes(product.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleProductToggle(product.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-xs text-gray-400">Stock: {product.currentStock}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Last forecast</p>
                    <p className="text-sm font-medium">{product.lastForecast}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleGenerateForecast}
            disabled={selectedProducts.length === 0 || isGenerating}
            className="gradient-bg text-white"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Generate Forecast
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Recent Forecasts */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recent Forecasts</h3>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Period
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Forecast
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confidence
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Accuracy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentForecasts.map((forecast) => (
                <tr key={forecast.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {forecast.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {forecast.period}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {forecast.forecast}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {forecast.confidence}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {forecast.accuracy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <Target className="w-3 h-3 mr-1" />
                      {forecast.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
