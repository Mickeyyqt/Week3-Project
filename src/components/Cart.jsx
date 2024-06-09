import CartItem from "./CartItem";
import { useContext } from "react";
import { itemContext } from "../store/ItemContext";

const Cart = (props) => {
  const { items, totalAmount } = useContext(itemContext);
  
  const totalPrice = `$${totalAmount.toFixed(2)};`
  return (
    <section className="cart-box">
     <section className="overflow-ctr">
     <h2>Your cart items are here</h2>
      {items.length < 1 ? (
        <h1 className="no-item">no items in your cart</h1>
      ) : (
        <>
          {items.map((fruit) => (
            <CartItem key={fruit.id} fruit={fruit} />
          ))}
        </>
      )}
     </section>

      <hr />
      <div className="total">
        <h3>{totalPrice}</h3>
        <p>${totalAmount}</p>
      </div>
      <div className="btns">
        <button className="close-btn" onClick={props.hideCartHandler}>
          Close
        </button>
        {items.length < 1 ? (
        <></>
      ) : (
        <>
          <button className="order-btn" onClick={() =>{
            alert("Ordered!");
          }}>Order</button>
        </>
      )}
       
      </div>
    </section>
  );
};

export default Cart;
