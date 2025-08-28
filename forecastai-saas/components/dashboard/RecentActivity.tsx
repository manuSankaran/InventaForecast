'use client'

import { useState } from 'react'
import { 
  Clock, 
  User, 
  Settings, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Download,
  Upload,
  Play,
  Target,
  BarChart3,
  Bell
} from 'lucide-react'

export function RecentActivity() {
  const [filter, setFilter] = useState('all')

  const activities = [
    {
      id: 1,
      type: 'forecast',
      user: 'John Doe',
      action: 'Generated forecast for Product A',
      details: '30-day forecast with 95% confidence',
      time: '2 hours ago',
      status: 'completed',
      icon: TrendingUp
    },
    {
      id: 2,
      type: 'alert',
      user: 'System',
      action: 'Anomaly detected in Product B sales',
      details: 'Unusual spike in demand pattern',
      time: '4 hours ago',
      status: 'warning',
      icon: AlertTriangle
    },
    {
      id: 3,
      type: 'model',
      user: 'AI System',
      action: 'New forecast model trained',
      details: 'Neural network model improved accuracy by 2.1%',
      time: '6 hours ago',
      status: 'completed',
      icon: Target
    },
    {
      id: 4,
      type: 'data',
      user: 'Sarah Johnson',
      action: 'Uploaded new sales data',
      details: 'CSV file with 1,247 new records',
      time: '1 day ago',
      status: 'completed',
      icon: Upload
    },
    {
      id: 5,
      type: 'settings',
      user: 'John Doe',
      action: 'Updated forecast settings',
      details: 'Changed confidence level to 95%',
      time: '1 day ago',
      status: 'completed',
      icon: Settings
    },
    {
      id: 6,
      type: 'export',
      user: 'Mike Chen',
      action: 'Exported forecast report',
      details: 'PDF report for Q2 2024',
      time: '2 days ago',
      status: 'completed',
      icon: Download
    },
    {
      id: 7,
      type: 'alert',
      user: 'System',
      action: 'Low stock alert for Product C',
      details: 'Current stock below safety threshold',
      time: '2 days ago',
      status: 'warning',
      icon: Bell
    },
    {
      id: 8,
      type: 'analysis',
      user: 'AI System',
      action: 'Seasonal pattern detected',
      details: 'Identified recurring monthly pattern',
      time: '3 days ago',
      status: 'completed',
      icon: BarChart3
    }
  ]

  const filters = [
    { id: 'all', name: 'All Activities', count: activities.length },
    { id: 'forecast', name: 'Forecasts', count: activities.filter(a => a.type === 'forecast').length },
    { id: 'alert', name: 'Alerts', count: activities.filter(a => a.type === 'alert').length },
    { id: 'model', name: 'Model Training', count: activities.filter(a => a.type === 'model').length },
    { id: 'data', name: 'Data Operations', count: activities.filter(a => a.type === 'data').length }
  ]

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(activity => activity.type === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100'
      case 'warning':
        return 'text-yellow-600 bg-yellow-100'
      case 'error':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'forecast':
        return 'text-blue-600 bg-blue-100'
      case 'alert':
        return 'text-red-600 bg-red-100'
      case 'model':
        return 'text-purple-600 bg-purple-100'
      case 'data':
        return 'text-green-600 bg-green-100'
      case 'settings':
        return 'text-gray-600 bg-gray-100'
      case 'export':
        return 'text-orange-600 bg-orange-100'
      case 'analysis':
        return 'text-indigo-600 bg-indigo-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <p className="text-sm text-gray-600">Track all system activities and user actions</p>
        </div>
        <div className="flex space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            {filters.map((filterOption) => (
              <option key={filterOption.id} value={filterOption.id}>
                {filterOption.name} ({filterOption.count})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Activity Timeline</h3>
        </div>
        <div className="p-6">
          <div className="flow-root">
            <ul className="-mb-8">
              {filteredActivities.map((activity, activityIdx) => (
                <li key={activity.id}>
                  <div className="relative pb-8">
                    {activityIdx !== filteredActivities.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${getTypeColor(activity.type)}`}>
                          <activity.icon className="h-4 w-4" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-900">
                            <span className="font-medium">{activity.user}</span>
                            {' '}{activity.action}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {activity.details}
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <time dateTime={activity.time}>{activity.time}</time>
                          <div className="mt-1">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                              {activity.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                              {activity.status === 'warning' && <AlertTriangle className="w-3 h-3 mr-1" />}
                              {activity.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Forecasts Generated
                </dt>
                <dd className="text-lg font-medium text-gray-900">
                  {activities.filter(a => a.type === 'forecast').length}
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Alerts Triggered
                </dt>
                <dd className="text-lg font-medium text-gray-900">
                  {activities.filter(a => a.type === 'alert').length}
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Models Trained
                </dt>
                <dd className="text-lg font-medium text-gray-900">
                  {activities.filter(a => a.type === 'model').length}
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Upload className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Data Operations
                </dt>
                <dd className="text-lg font-medium text-gray-900">
                  {activities.filter(a => a.type === 'data').length}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
