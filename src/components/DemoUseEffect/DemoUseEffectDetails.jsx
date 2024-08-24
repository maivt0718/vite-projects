import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ItemShoe from "./ItemShoe";

const DemoUseEffectDetails = () => {
  const [shoe, setShoe] = useState();
  const [searchParam, setSearchParam] = useSearchParams()
  const params = useParams();
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
    })
      .then((res) => {
        setShoe(res.data.content);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);
  
  return (
    <div>
      <div className="mb-3">
        <label for="" className="form-label text-black">Name</label>
        <input type="text"
          class="form-control" name="" id="" fplaceHolder=""
          onChange={(e) => {
            const dataQuery = Object.fromEntries(searchParam)
            console.log(dataQuery)
          // setSearchParam({
          //   label: e.target.value,
          //   price: e.target.value
          // })
          setSearchParam({ ...dataQuery, label: e.target.value})
          }}
          />
      </div>
      <div className="text-black flex">
        <img src={`${shoe?.image}`}></img>
        <div>
          <h1 className="text-black">Name: {`${shoe?.name}`}</h1>
          <button className="bg-black">Buy</button>
        </div>
      </div>
      <div className="text-black">
        <h1>Related Products</h1>
        <div className="grid grid-cols-3">
          {shoe?.relatedProducts?.map((item, index) => {
            return(
              <ItemShoe key={index} image={item.image} name={item.name} id={item.id} price={item.price}></ItemShoe>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default DemoUseEffectDetails;
