import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemShoe from './ItemShoe'
import { NotificationContext } from '../../App'

const DemoUseEffect = () => {
  const data = useContext(NotificationContext);

  const [products, setProdcuts] = useState()
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product"
    }).then((res) => {
      setProdcuts(res.data.content)
    }).catch((err) => {
      console.log(err)
      data.handleNotification("error", `${err}`)
    })
  })

  // to always run
  // useEffect(() => {
  //   console.log("I'm useeffect always running")
  // })

  // to calculate the usage period
  useEffect(() => {
    return () => {
      console.log("Component is off used to track time")
    }
  },[])
 
  return (
    <div>
      <h2>Demo Use Effect</h2>
      <div className='grid grid-cols-4 gap-2'>{products?.map((item, index) => {
        return(
          <ItemShoe key={index} image={item.image} name={item.name} id={item.id} price={item.price}></ItemShoe>
        )
      })}</div>
    </div>
  )
}

export default DemoUseEffect