import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./Cards/OrderCard";
import CookingCard from "./Cards/CookingCard";
import ReadyCard from "./Cards/ReadyCard";
import { toast } from "react-toastify";

const OrderContainer = ({ promise }) => {
  // const orders = use(promise);
  const data = use(promise);

  // console.log(orders);
  const [orders, setOrders] = useState(data);
  const [cookingItems, setCookingItems] = useState([]);

  const [ReadyItems, setReadyItems] = useState([]);

  const handelOrder = (order) => {
    console.log(order);

    // Age cooking er order ache kina
    const isExist = cookingItems.find((item) => item.id == order.id);
    console.log(isExist);
    toast("Order Called");

    if (isExist) {
      alert("Already ordered");
      return;
    }

    // Cooking Kora Item Dukhabo

    const newCookingIteams = [...cookingItems, order];
    setCookingItems(newCookingIteams);
  };

  console.log(cookingItems);

  const handleCooking = (order) => {
    //  Ready Items er moddhe dukao..
    //  Cooking item theke bad daw
    setReadyItems([...ReadyItems, order]);
    const remaining = cookingItems.filter((item) => item.id !== order.id);
    console.log(remaining);
    setCookingItems(remaining);
  };

  const handelReadyCooking = (order) => {
    console.log(order);
  };
  console.log(ReadyItems);
  return (
    <div>
      <States
        orderTotal={orders.length}
        cookingTotal={cookingItems.length}
        readyTotal={ReadyItems.length}
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
              <CookingCard
                handleCooking={handleCooking}
                key={order.id}
                order={order}
              ></CookingCard>
            ))}
          </div>{" "}
          <div>
            <h2 className="font-bold text-4xl"> Order Ready</h2>
            <div className="shadow p-10">
              {" "}
              {ReadyItems.map((order) => (
                // <CookingCard
                //   handleCooking={handleCooking}
                //   key={order.id}
                //   order={order}
                // ></CookingCard>
                // <h2>{order.order_title}</h2>
                // <readyTotal></readyTotal>
                <ReadyCard key={order.id} order={order}></ReadyCard>
              ))}{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
