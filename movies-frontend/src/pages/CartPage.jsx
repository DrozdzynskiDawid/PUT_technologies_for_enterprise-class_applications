import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import CartItemsList from "../components/CartItemsList";


function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/cart/get`,{ withCredentials: true })
            .then(response => setCartItems(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const handleClearCart = async () => {
        try {
            await axios.delete('http://localhost:8080/api/cart/clear', {
                withCredentials: true
            });
            setCartItems([]);
        } catch (error) {
            console.error('Error clearing cart: ', error);
        }
    };

    return (
      <div className="w-50 mt-2 mx-auto p-3 fs-5">
          <h2>Movie Cart</h2>
          <Button
              onClick={() => handleClearCart()}
              className="ms-auto btn-danger"
          >
              Clear Cart
          </Button>
          <CartItemsList cartItems={cartItems} />
      </div>
    );
}

export default CartPage;