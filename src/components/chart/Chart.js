import ChartBar from '../chart-bar/ChartBar'
import './Chart.css'

export default function Chart({ datapoints }) {

  const totalMax = Math.max(...datapoints.map(point => point.value))
  
  return (
    <div className="chart">
      {datapoints.map(datapoint=>
        <ChartBar 
        key={datapoint.label}
        value={datapoint.value}
        label={datapoint.label}
        max={totalMax}
        />
        )}
    </div>
  )
}
