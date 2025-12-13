import React from "react";

const ReadyCard = ({ order }) => {
  return (
    <div className="shadow p-5 border rounded-3xl border-amber-400">
      <h2> {order.order_title} </h2>
      <p> Table no: {order.table_no}</p>
      <p> Wter Id:{order.waiterId}</p>
    </div>
  );
};

export default ReadyCard;
