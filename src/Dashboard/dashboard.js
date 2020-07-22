import React from 'react'
import './dashboard.scss'
import InfoCard from './InfoCard'
import dragon from '../public/images/dragon.png'
import ship from '../public/images/ship.png'
import launch from '../public/images/launch.png'
import historyIcon from '../public/images/history.png'
import rocket from '../public/images/rocket.png'
import BarChart from './Barchart'

const Dashboard = () => 
  {
      return (
          <div className="dashboard-wrapper">
               
              <div className="sidepanel-wrapper"> 
                <ul className="sidepanel-items">
                   <li className="menu-items active"><i><img src={launch}/></i>Launches</li>
                   <li className="menu-items"><i><img src={rocket}/></i>Rockets</li>
                   <li className="menu-items"><i><img src={ship}/></i>Ships</li>
                   <li className="menu-items"><i><img src={dragon}/></i>Dragons</li>
                   <li className="menu-items"><i><img src={historyIcon}/></i>History</li>
                </ul>
              </div>

              <div className="info-card-wrapper">
                 <InfoCard/>
              </div>
               
               <div className="chart-wrapper">
                  <BarChart/>
               </div>
             
              
          </div>
      )
  } 

  export default Dashboard;