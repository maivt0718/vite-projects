import React from 'react'
import { useLoaderData, useLocation, useParams } from 'react-router-dom'

function ShowDetails() {
    const params = useParams();
    const pathName  = useLocation();
    console.log(pathName)
  return (
    
    <div>ShowDetails</div>
  )
}

export default ShowDetails