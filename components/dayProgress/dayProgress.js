import React from 'react'
import { ProgressChart } from 'react-native-chart-kit'

class DayProgress extends React.PureComponent {

  render() {
    const { data, chartConfig } = this.props
    defaultChartConfig={
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#7e93f5',
      backgroundGradientTo: '#f32b65',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }
    return (
      <ProgressChart
        data={data}
        width={310}
        height={220}
        chartConfig={chartConfig ? chartConfig : defaultChartConfig}
      />
    )
  }
}

export default DayProgress
