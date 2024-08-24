import React from "react";

function ShoeItem(props) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {props.item.name}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <table className="detail">
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>{props.item.id}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>{props.item.name}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>description</td>
                  <td>{props.item.description}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>quantity</td>
                  <td>{props.item.quantity}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>price</td>
                  <td>{props.item.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              // onClick={() => {
              //   props.setModal(false);
              // }}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoeItem;
