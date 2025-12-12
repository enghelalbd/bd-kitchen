import React, { Suspense, useState } from "react";
import Navbar from "./Component/Navbar";
import Logo from "./Component/Logo";
import OrderContainer from "./Component/OrderContainer";

import Heading from "./Component/Heading";
import States from "./Component/States";

const loadorders = () => fetch("/orders.json").then((res) => res.json());

const App = () => {
  const ordersPromise = loadorders();

  const [count, setcount] = useState(100);

  return (
    <div>
      <header className="w-11/12 mx-auto py-3">
        {" "}
        <Navbar></Navbar>{" "}
      </header>

      <Heading>Kitchen Room </Heading>
      <section>
        <Suspense fallback={"loading"}>
          <OrderContainer promise={ordersPromise}></OrderContainer>
        </Suspense>
      </section>
    </div>
  );
};

export default App;
