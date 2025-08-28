'use client'

import { useState } from 'react'
import { DashboardOverview } from '@/components/dashboard/DashboardOverview'
import { ForecastingInterface } from '@/components/dashboard/ForecastingInterface'
import { AnalyticsCharts } from '@/components/dashboard/AnalyticsCharts'
import { RecentActivity } from '@/components/dashboard/RecentActivity'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', name: 'Overview', component: DashboardOverview },
    { id: 'forecasting', name: 'Forecasting', component: ForecastingInterface },
    { id: 'analytics', name: 'Analytics', component: AnalyticsCharts },
    { id: 'activity', name: 'Recent Activity', component: RecentActivity }
  ]

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || DashboardOverview

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Monitor your forecasts, analyze performance, and manage your AI models
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        <ActiveComponent />
      </div>
    </div>
  )
}
