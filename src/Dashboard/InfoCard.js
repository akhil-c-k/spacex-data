import React,{useEffect,useState,Fragement} from 'react'
import './info-card.scss'
import cardLaunch from '../public/images/card-launch.png'
import cardCore from '../public/images/card-rocket.png'
import cardMission from '../public/images/card-missions.png'

const InfoCard = () => 
  {
    const [launches,launchCount] = useState(0)
    const [core,coreCount] = useState(0)
    const [mission,missionCount] = useState(0)
     
     useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
        .then(response => response.json())
        .then(data => launchCount(data.length));
     })

     useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
        .then(response => response.json())
        .then(data => coreCount(data.length));

     })

     useEffect(() => {
        fetch('https://api.spacexdata.com/v3/missions')
        .then(response => response.json())
        .then(data => missionCount(data.length));

     })
    
       return (
        <div className="card-inner-wrapper">
           <div className="single-card">
              <div className="card-image-wrapper"><img src={cardLaunch}/></div>
                 <div className="card-text">
                   <div className="card-count-item">{launches}</div>
                   <div className="card-count-text">Total Launches</div>
                 </div>
           </div>

           <div className="single-card">
              <div className="card-image-wrapper"><img src={cardCore}/></div>
                 <div className="card-text">
                   <div className="card-count-item">{core}</div>
                   <div className="card-count-text">Total Cores</div>
                 </div>
           </div>

           <div className="single-card">
              <div className="card-image-wrapper"><img src={cardMission}/></div>
                 <div className="card-text">
                   <div className="card-count-item">{mission}</div>
                   <div className="card-count-text">Total Mission</div>
                 </div>
           </div>
           <div className="single-card">
              <div className="card-image-wrapper"><img src={cardMission}/></div>
                 <div className="card-text">
                   <div className="card-count-item">{mission}</div>
                   <div className="card-count-text">Total Mission</div>
                 </div>
           </div>
        </div>
        
        
       )
  }

  export default InfoCard;