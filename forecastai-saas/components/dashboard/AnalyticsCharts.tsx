'use client'

import { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  Filter,
  Download
} from 'lucide-react'

export function AnalyticsCharts() {
  const [selectedMetric, setSelectedMetric] = useState('revenue')
  const [timeRange, setTimeRange] = useState('30d')

  const metrics = [
    { id: 'revenue', name: 'Revenue', value: '$2.4M', change: '+12.5%', trend: 'up' },
    { id: 'accuracy', name: 'Forecast Accuracy', value: '94.2%', change: '+2.1%', trend: 'up' },
    { id: 'inventory', name: 'Inventory Turnover', value: '8.5x', change: '+0.3x', trend: 'up' },
    { id: 'stockouts', name: 'Stockout Rate', value: '2.3%', change: '-1.2%', trend: 'down' }
  ]

  const chartData = {
    revenue: [
      { month: 'Jan', actual: 180000, forecast: 175000 },
      { month: 'Feb', actual: 195000, forecast: 190000 },
      { month: 'Mar', actual: 210000, forecast: 205000 },
      { month: 'Apr', actual: 225000, forecast: 220000 },
      { month: 'May', actual: 240000, forecast: 235000 },
      { month: 'Jun', actual: 255000, forecast: 250000 }
    ],
    accuracy: [
      { month: 'Jan', value: 89.5 },
      { month: 'Feb', value: 91.2 },
      { month: 'Mar', value: 92.8 },
      { month: 'Apr', value: 93.1 },
      { month: 'May', value: 94.2 },
      { month: 'Jun', value: 94.2 }
    ]
  }

  const topProducts = [
    { name: 'Product A', revenue: '$450K', growth: '+15%', accuracy: '96%' },
    { name: 'Product B', revenue: '$380K', growth: '+8%', accuracy: '92%' },
    { name: 'Product C', revenue: '$320K', growth: '+22%', accuracy: '89%' },
    { name: 'Product D', revenue: '$280K', growth: '+5%', accuracy: '94%' },
    { name: 'Product E', revenue: '$250K', growth: '+12%', accuracy: '91%' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Analytics</h2>
          <p className="text-sm text-gray-600">Deep insights into your forecasting performance</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="border border-gray-300 rounded-md px-3 py-2 text-sm hover:bg-gray-50">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                <div className="flex items-center mt-2">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Forecast vs Actual Performance</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Actual</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Forecast</span>
            </div>
          </div>
        </div>
        
        <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-2">Interactive chart would be rendered here</p>
            <p className="text-sm text-gray-400">Using Chart.js, Recharts, or similar library</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Revenue Trend</p>
                <p className="text-green-600">+12.5% vs forecast</p>
              </div>
              <div>
                <p className="font-medium">Accuracy</p>
                <p className="text-blue-600">94.2% average</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Accuracy Trend */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Forecast Accuracy Trend</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <p className="text-gray-500">Accuracy trend chart</p>
              <p className="text-sm text-gray-400">Showing improvement over time</p>
            </div>
          </div>
        </div>

        {/* Seasonal Analysis */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Seasonal Patterns</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <p className="text-gray-500">Seasonal analysis chart</p>
              <p className="text-sm text-gray-400">Identifying recurring patterns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Products */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Top Performing Products</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Forecast Accuracy
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProducts.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    {product.growth}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.accuracy}
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
