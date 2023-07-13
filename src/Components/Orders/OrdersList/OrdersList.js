import React from "react";
import OrdersDisplay from "../OrdersDisplay/OrdersDisplay";

const OrdersList = (props) => {
  const filteredTable1Orders = props.allOrdersArray.filter(
    (order) => order.table === "Table 1"
  );

  const filteredTable2Orders = props.allOrdersArray.filter(
    (order) => order.table === "Table 2"
  );

  const filteredTable3Orders = props.allOrdersArray.filter(
    (order) => order.table === "Table 3"
  );
  return (
    <div>
      <h1>Orders</h1>
      <ul>
        <h2>Table 1</h2>
        <ul>
          {filteredTable1Orders.map((order) => (
            <OrdersDisplay
              key={order.orderId}
              id={order.orderId}
              price={order.price}
              dish={order.dish}
              table={order.table}
              onDelete={props.onDeleteOrder}
            />
          ))}
        </ul>
        <h2>Table 2</h2>
        <ul>
          {filteredTable2Orders.map((order) => (
            <OrdersDisplay
              key={order.orderId}
              id={order.orderId}
              price={order.price}
              dish={order.dish}
              table={order.table}
              onDelete={props.onDeleteOrder}
            />
          ))}
        </ul>
        <h2>Table 3</h2>
        <ul>
          {filteredTable3Orders.map((order) => (
            <OrdersDisplay
              key={order.orderId}
              id={order.orderId}
              price={order.price}
              dish={order.dish}
              table={order.table}
              onDelete={props.onDeleteOrder}
            />
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default OrdersList;
