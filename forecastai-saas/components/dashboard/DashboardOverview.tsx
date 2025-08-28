'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Package, 
  AlertTriangle, 
  CheckCircle,
  BarChart3,
  Calendar,
  Target,
  Zap
} from 'lucide-react'

export function DashboardOverview() {
  const [timeRange, setTimeRange] = useState('30d')

  const metrics = [
    {
      name: 'Total Revenue',
      value: '$2.4M',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      description: 'vs last month'
    },
    {
      name: 'Forecast Accuracy',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive',
      icon: Target,
      description: 'vs last month'
    },
    {
      name: 'Active SKUs',
      value: '1,247',
      change: '+23',
      changeType: 'positive',
      icon: Package,
      description: 'vs last month'
    },
    {
      name: 'Stockout Rate',
      value: '2.3%',
      change: '-1.2%',
      changeType: 'negative',
      icon: AlertTriangle,
      description: 'vs last month'
    }
  ]

  const recentForecasts = [
    {
      id: 1,
      product: 'Product A',
      forecast: '1,250 units',
      confidence: '95%',
      status: 'completed',
      date: '2 hours ago'
    },
    {
      id: 2,
      product: 'Product B',
      forecast: '890 units',
      confidence: '92%',
      status: 'processing',
      date: '4 hours ago'
    },
    {
      id: 3,
      product: 'Product C',
      forecast: '2,100 units',
      confidence: '88%',
      status: 'completed',
      date: '6 hours ago'
    },
    {
      id: 4,
      product: 'Product D',
      forecast: '750 units',
      confidence: '91%',
      status: 'completed',
      date: '1 day ago'
    }
  ]

  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Anomaly detected in Product A sales pattern',
      time: '30 minutes ago'
    },
    {
      id: 2,
      type: 'info',
      message: 'New forecast model trained successfully',
      time: '2 hours ago'
    },
    {
      id: 3,
      type: 'success',
      message: 'Inventory optimization completed',
      time: '4 hours ago'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
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
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                <div className="flex items-center mt-2">
                  {metric.changeType === 'positive' ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">{metric.description}</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <metric.icon className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Data */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Forecast Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Forecast Performance</h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Actual</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Forecast</span>
              </div>
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Forecast chart would be rendered here</p>
              <p className="text-sm text-gray-400">Using Chart.js or Recharts</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  alert.type === 'warning' ? 'bg-yellow-500' :
                  alert.type === 'info' ? 'bg-blue-500' : 'bg-green-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Forecasts */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Forecasts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Forecast
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confidence
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
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
                    {forecast.forecast}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {forecast.confidence}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      forecast.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {forecast.status === 'completed' ? (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      ) : (
                        <Zap className="w-3 h-3 mr-1" />
                      )}
                      {forecast.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {forecast.date}
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
