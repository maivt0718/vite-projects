import React, { useState } from "react";
import data from "../../../public/imgs/dataGlasses.json";

function States() {
  return <div>States</div>;
}

const DemoState = () => {
  // const [state, setState] = useState(8);
  // const [hoTen, setHoten] = useState("");
  // let diemToan = 9;
  let [glassInfo, setGlassInfo] = useState({id: "1", url: "./public/imgs/glassesImage/v1.png"});
  let [borderEnabledId, setBorderEnabled] = useState("1");
  $(`#${borderEnabledId}`).css({"border": "2px solid red"});
  return (
    <>
      {/* <p className="text-black">{diemToan}</p>
      <p className="text-black">Gia tri State {state}</p>
      <button
        onClick={() => {
          diemToan++;
          console.log(diemToan);
          setState(state + 1);
        }}
        className="py-2 px-5 text-black bg-blue-400 rounded-sm"
      >
        Tang diem
      </button>
      <div className="mb-3">
        <label className="form-label text-black">Name</label>
        <input
          type="text"
          className="form-control text-black border-black bg-blue-600"
          name=""
          id="name"
          aria-describedby="helpId"
          placeholder=""
          onChange={(e) => {
            setHoten(e.target.value);
          }}
        />
        <small id="helpId" className="form-text text-black">
          {hoTen}
        </small>
      </div> */}
      <div className="glasses">
        <div className="glasses_header">
          <div className="container">
            <h1>Try to makeup online!</h1>
          </div>
        </div>
        <div className="glasses_body">
          <div className="container">
            <div className="potrait">
              <div className="face flex justify-center gap-10">
                <img src="./public/imgs/glassesImage/model.jpg"></img>
                <img src="./public/imgs/glassesImage/model.jpg"></img>
              </div>
              <div className="glass">
                <img className={glassInfo.id} src={glassInfo.url}></img>
              </div>
            </div>
            <div className="glasess_list flex gap-5">
            {data.map((item, index) => {
              return (
                <img key={index} onLoad={(e) => {
                  $(`#${borderEnabledId}`).css({"border": "2px solid red"});
                }} 
                onClick={(e) => {
                  $(`#${borderEnabledId}`).css({"border": "none"});
                  setGlassInfo({id: e.target.id, url: `./public/imgs/${item.url}`});
                  setBorderEnabled(e.target.id)
                  $(`#${item.id}`).css({"border": "2px solid red"});
                }} src={`./public/imgs/${item.url}`} id={item.id}></img>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoState;
