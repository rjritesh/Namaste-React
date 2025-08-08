import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || item.defaultPrice) / 100,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-start mb-4 hover:shadow-md transition"
            >
              {item.imageId && (
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                    item.imageId
                  }
                  alt={item.name}
                  className="w-24 h-20 object-cover rounded-md"
                />
              )}
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-gray-600">
                  ₹{(item.price || item.defaultPrice) / 100}
                </p>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex justify-between text-lg font-semibold mb-2">
              <span>Total Items:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-orange-600">
              <span>Total Price:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Clear Cart Button */}
          <div className="mt-4 text-right">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
