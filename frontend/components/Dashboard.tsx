import * as React from 'react'
import { AppSidebar } from '@/components/AppSidebar'
import { PowerChart } from '@/components/PowerChart'
import { VoltageChart } from '@/components/VoltageChart'
import { CurrentChart } from '@/components/CurrentChart'
import { StatsCards } from '@/components/StatsCards'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'
import { useSensorData } from '@/hooks/useSensorData'

export default function Dashboard() {
  const [timeRange, setTimeRange] = React.useState<'1d' | '3d' | '5d' | '7d'>('1d')
  
  const { loading, error, stats, powerChartData, voltageChartData, currentChartData } = useSensorData(timeRange)

  // Add these 3 lines:
  console.log('TimeRange:', timeRange)
  console.log('Data count:', powerChartData.length)
  console.log('First date:', powerChartData[0]?.date, 'Last date:', powerChartData[powerChartData.length - 1]?.date)

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "18rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 p-4 md:p-6">
            {loading && (
              <div className="flex items-center justify-center p-8">
                <p className="text-muted-foreground">Loading dashboard data...</p>
              </div>
            )}

            {error && (
              <div className="flex items-center justify-center p-8">
                <p className="text-destructive">Error: {error}</p>
              </div>
            )}

            {!loading && !error && stats && (
              <div className="flex flex-col gap-4 md:gap-6">
                <StatsCards
                  avgPower={stats.avgPower}
                  peakPower={stats.peakPower}
                  currentPower={stats.currentPower}
                  voltage={stats.voltage}
                />

                <PowerChart
                  key={`power-${timeRange}`}
                  data={powerChartData}
                  timeRange={timeRange}
                  onTimeRangeChange={setTimeRange}
                />

                <VoltageChart 
                  key={`voltage-${timeRange}`}
                  data={voltageChartData} 
                />

                <CurrentChart 
                  key={`current-${timeRange}`}
                  data={currentChartData} 
                />
              </div>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}