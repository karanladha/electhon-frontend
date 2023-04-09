import React from 'react'
import { Link } from 'react-router-dom'

const Print = ({areaName}) => {

    const handleClick= () => {
        
    }

  return (
    <div>
        <h1><Link to={`/slot/${areaName}`}>{areaName}</Link></h1>
    </div>
  )
}

export default Print