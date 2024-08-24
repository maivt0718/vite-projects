import React from 'react'
import data from "../../../public/dataShoe.json"
import ShoeList from './ShoeList'
import ShoeItem from './ShoeItem'
import { useSelector } from 'react-redux'

function Shoe() {
    const {shoes} = useSelector((state) => state.shoeSlice)

  return (
    <div className="shoe">
        <div className='container'>
            <div className='shoe_row grid grid-cols-3 gap-5'>
                <div className="shoe_nav">
                    <div className='home common'>Home</div>
                    <div className='others common'>Others</div>
                </div>
                <div className="shoe_content common col-span-2">
                    <h1 className='shoe_title mb-5 text-center'>Shoe Shop</h1>
                    <ShoeList data={shoes}></ShoeList>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shoe