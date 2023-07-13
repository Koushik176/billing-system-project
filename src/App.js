import React, { useState } from "react";
import "./App.css";
import OrderForm from "./Components/OrderForm/OrderForm";
import OrdersList from "./Components/Orders/OrdersList/OrdersList";

function App() {
  const [ordersArray, setOrdersArray] = useState([]);

  const addOrderHandler = (order) => {
    setOrdersArray((prevOrdersArray) => {
      return [order, ...prevOrdersArray];
    });
  };

  const deleteOrderHandler = (orderId) => {
    setOrdersArray((prevOrdersArray) => {
      const updatedOrders = prevOrdersArray.filter(
        (order) => order.orderId !== orderId
      );
      return updatedOrders;
    });
  };

  return (
    <div>
      <OrderForm onAddOrder={addOrderHandler} />
      <OrdersList
        allOrdersArray={ordersArray}
        onDeleteOrder={deleteOrderHandler}
      />
    </div>
  );
}

export default App;
