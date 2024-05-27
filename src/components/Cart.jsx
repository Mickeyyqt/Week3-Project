import CartItem from "./CartItem";

const fruits = [
  {
    id: 1,
    price: 10.23,
    name: "Apple",
    description: "fresh apple from Singapore",
    quantity: 2,
  },
  {
    id: 2,
    price: 28.67,
    name: "Durian",
    description: "fresh Durian from Thiland",
    quantity: 1,
  },
  {
    id: 3,
    price: 12.7,
    name: "Banana",
    description: "fresh banana from Singapore",
    quantity: 2,
  },
];
const Cart = () => {
  return (
    <section className="cart-box">
      <h2>Carts</h2>
      {
        fruits.map((fruit)=>(
            <CartItem key={fruit.id} fruit={fruit}/>
        ))
      }
      <hr />
      <div className="total">
        <h3>Total Price</h3>
        <p>$3000.00</p>
      </div>
      <div className="btns">
        <button className="close-btn">Close</button>
        <button className="order-btn">Order</button>
      </div>
    </section>
  );
};

export default Cart;
