interface Product {
  id: number;
  name: string;
  price: number;
}

interface ShoppingCartProps {
  cart: Product[];
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart, onCheckout }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const checkoutHandler = () => {
    onCheckout();
    alert("Checkout successful!");
  };

  return (
    <div className="w-full bg-white p-3 border-t border-gray-200 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      <div className="min-h-52 bg-gray-100 rounded-md p-2 max-h-96 overflow-auto">
        <ul className="divide-y divide-gray-200 space-y-1 shadow-md">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex bg-white rounded justify-between items-center py-2 px-1"
            >
              <p className="text-lg">{item.name}</p>
              <p className="text-lg">${item.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-semibold">Total:</p>
        <p className="text-lg font-semibold">${totalPrice}</p>
      </div>
      <button
        onClick={checkoutHandler}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-200"
      >
        Checkout
      </button>
    </div>
  );
};

export default ShoppingCart;
