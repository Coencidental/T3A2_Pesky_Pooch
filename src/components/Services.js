import React, { useState, useEffect } from 'react'
import ServicesControlPanel from './ServicesControlPanel'
import '../styles/services.scss'

export default function Services(props) {
  const [services, setServices] = useState(props.allServices)

  useEffect(() => {
    props.renderChanges()
    setServices(props.allServices)
  }, [])

  return (
    <>
      <div className="services-container">
        <h2>All current services</h2>
        {( props.allServices.length > 0) ? (
        <> 
          <div className="services">      
            { props.allServices.map(service => {
            return (
            <div className="service-card" key={service._id}>
              <h3>{service.name}</h3>
              <p className="service-desc">{service.description}</p>
              <p className="service-cost">{service.cost}</p>
              { service.thumbnail ? (<img className="thumbnail" width="100px" src={service.thumbnail}></img>) : (null)}
            </div>
            )}) 
            }
          </div>
        </>
        ):
        (
        <p>Loading...</p>
        ) 
        }
      </div>
    </>
  )
}
