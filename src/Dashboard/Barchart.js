import React,{Component,useEffect,useState,useCallback} from 'react'
import Chart from 'react-apexcharts'

const BarChart = () => {
  
  const [apiData,getAPiData] = useState([])
  const [attemptCount,setCount] = useState([])
  const [succesfullAttempt,successCount] = useState([])
  const [series, setSeries] = useState({
          
    series: [{
      name: 'Attempt Count',
      data: [1,2,3,6,1,3,9]
    }, {
      name: 'Sucessfull Attempt',
      data: []
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
     
    },
 } )


  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/landpads`)
      .then(res => res.json())
      .then(response => {
        getAPiData(response);
        const transformedData = response.map(item => item.attempted_landings);
        const transformedData1 = response.map(item => item.successful_landings);
        setSeries(prevSeries => {
          const newSeries = JSON.parse(JSON.stringify(prevSeries));
          newSeries.series[0].data = transformedData;
          newSeries.series[1].data = transformedData1
          return newSeries
        })
       
        
      })
 },[])


      return (
        <Chart options={series.options} series={series.series} type="bar" width={500} height={320} />
      )
  }

  export default BarChart;