import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./Cards/OrderCard";
import CookingCard from "./Cards/CookingCard";

const OrderContainer = ({ promise }) => {
  const orders = use(promise);
  // console.log(orders);
  const [cookingItems, setCookingItems] = useState([]);

  const handelOrder = (order) => {
    console.log(order);
    // Age cooking er order ache kina
    const isExist = cookingItems.find((item) => item.id == order.id);

    if (isExist) {
      alert("Already ordered");
      return;
    }

    // Cooking Kora Item Dukhabo

    const newCookingIteams = [...cookingItems, order];
    setCookingItems(newCookingIteams);
  };
  console.log(cookingItems);

  return (
    <div>
      <States
        orderTotal={orders.length}
        cookingTotal={cookingItems.length}
      ></States>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          {" "}
          Orders
          <h2 className="font-bold text-4xl"> Current order</h2>
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard handelOrder={handelOrder} key={order.id} order={order}>
                {" "}
              </OrderCard>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-bold text-4xl"> Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((order) => (
              <CookingCard key={order.id} order={order}></CookingCard>
            ))}
          </div>{" "}
          <div>
            <h2 className="font-bold text-4xl"> Order Ready</h2>
            <div className="shadow p-10"> </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
