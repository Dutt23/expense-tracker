import './ChartBar.css'

export default function ChartBar({ value, label, max }) {

  let height = '0%';
  
  if(max > 0){
    height = Math.round((value/max) * 100) +'%'
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  )
}
